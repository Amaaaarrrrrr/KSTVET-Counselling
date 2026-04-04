import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "GEMINI_API_KEY is not configured on the server." });
      }

      const ai = new GoogleGenAI({ apiKey });
      const model = "gemini-3-flash-preview";

      const response = await ai.models.generateContent({
        model: model,
        contents: [
          ...history.map((h: any) => ({ role: h.role, parts: h.parts })),
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: "You are a supportive, empathetic, and professional AI Counselling Assistant for KSTVET (Kenya School of TVET). Your goal is to provide a safe space for students and staff to express themselves. You are not a replacement for professional human therapy, but a first point of contact for guidance, resources, and emotional support. Always be kind, non-judgmental, and encourage seeking professional help if the situation is serious (e.g., self-harm, severe trauma). Keep your responses concise yet warm. Use Kenyan English nuances where appropriate but remain professional.",
          maxOutputTokens: 2048,
        }
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Backend Chat Error:", error);
      res.status(500).json({ error: error.message || "An error occurred on the server." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
