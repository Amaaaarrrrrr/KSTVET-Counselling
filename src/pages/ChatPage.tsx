import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, User, Bot, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../utils/cn';
import { Button } from '../components/ui/Button';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm your KSTVET AI Counselling Assistant. I'm here to provide a safe space for you to talk, share your thoughts, or ask questions about mental wellness. How are you feeling today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      if (!process.env.GEMINI_API_KEY) {
        setError("AI Chat is currently unavailable because the API key is not configured. If you are the administrator, please ensure GEMINI_API_KEY is set in the environment.");
        setIsLoading(false);
        return;
      }

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const model = "gemini-3-flash-preview";
      
      const chat = ai.chats.create({
        model: model,
        config: {
          systemInstruction: "You are a supportive, empathetic, and professional AI Counselling Assistant for KSTVET (Kenya School of TVET). Your goal is to provide a safe space for students and staff to express themselves. You are not a replacement for professional human therapy, but a first point of contact for guidance, resources, and emotional support. Always be kind, non-judgmental, and encourage seeking professional help if the situation is serious (e.g., self-harm, severe trauma). Keep your responses concise yet warm. Use Kenyan English nuances where appropriate but remain professional.",
        },
      });

      // We send the whole history for context
      const history = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }));

      const response = await ai.models.generateContent({
        model: model,
        contents: [
          ...history.map(h => ({ role: h.role, parts: h.parts })),
          { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          systemInstruction: "You are a supportive, empathetic, and professional AI Counselling Assistant for KSTVET (Kenya School of TVET). Your goal is to provide a safe space for students and staff to express themselves. You are not a replacement for professional human therapy, but a first point of contact for guidance, resources, and emotional support. Always be kind, non-judgmental, and encourage seeking professional help if the situation is serious (e.g., self-harm, severe trauma). Keep your responses concise yet warm. Use Kenyan English nuances where appropriate but remain professional.",
        }
      });

      const aiContent = response.text || "I'm sorry, I couldn't process that. Could you try again?";
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: aiContent,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error("Chat Error:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 min-h-screen bg-cream-100 flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col h-[70vh] bg-white rounded-3xl shadow-card overflow-hidden border border-cream-200">
        {/* Header */}
        <div className="bg-maroon-400 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-gold-400" />
            </div>
            <div>
              <h1 className="font-serif text-xl leading-none">AI Counselling Assistant</h1>
              <p className="text-xs text-maroon-100 mt-1">Always here to listen</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Online
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-cream-50/30">
          <AnimatePresence initial={false}>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={cn(
                  "flex items-start gap-3 max-w-[85%]",
                  msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1",
                  msg.role === 'user' ? "bg-gold-400" : "bg-maroon-400"
                )}>
                  {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                </div>
                <div className={cn(
                  "p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
                  msg.role === 'user' 
                    ? "bg-maroon-400 text-white rounded-tr-none" 
                    : "bg-white text-slate-900 border border-cream-200 rounded-tl-none"
                )}>
                  {msg.content}
                  <div className={cn(
                    "text-[10px] mt-2 opacity-50",
                    msg.role === 'user' ? "text-right" : "text-left"
                  )}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isLoading && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-slate-400 text-xs italic ml-11"
            >
              <Loader2 className="w-3 h-3 animate-spin" />
              Assistant is thinking...
            </motion.div>
          )}

          {error && (
            <div className="flex items-center gap-2 text-red-500 text-xs justify-center p-4 bg-red-50 rounded-xl border border-red-100">
              <AlertCircle className="w-4 h-4" />
              {error}
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-cream-200">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message here..."
              className="w-full bg-cream-50 border border-cream-200 rounded-full py-4 pl-6 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-maroon-400/20 focus:border-maroon-400 transition-all"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className={cn(
                "absolute right-2 w-10 h-10 rounded-full flex items-center justify-center transition-all",
                input.trim() && !isLoading 
                  ? "bg-maroon-400 text-white hover:scale-105 active:scale-95" 
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              )}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[10px] text-slate-400 text-center mt-3 uppercase tracking-widest font-bold">
            Private & Secure AI Conversation
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-4xl w-full mt-6 p-4 bg-gold-50/50 border border-gold-200 rounded-2xl flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
        <p className="text-xs text-gold-800 leading-relaxed">
          <strong>Disclaimer:</strong> This AI assistant is for supportive guidance only and is not a clinical mental health service. If you are in immediate danger or experiencing a crisis, please call the emergency services or visit the KSTVET Counselling Centre in person.
        </p>
      </div>
    </div>
  );
};

export default ChatPage;
