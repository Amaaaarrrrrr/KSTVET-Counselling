import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import WhoWeHelpPage from './pages/WhoWeHelpPage';
import ResourcesPage from './pages/ResourcesPage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import ContactPage from './pages/ContactPage';
import ChatPage from './pages/ChatPage';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/',              element: <Home /> },
      { path: '/about',         element: <About /> },
      { path: '/services',      element: <ServicesPage /> },
      { path: '/who-we-help',   element: <WhoWeHelpPage /> },
      { path: '/resources',     element: <ResourcesPage /> },
      { path: '/blog',          element: <BlogPage /> },
      { path: '/blog/:slug',    element: <BlogPost /> },
      { path: '/contact',       element: <ContactPage /> },
      { path: '/chat',          element: <ChatPage /> },
      { path: '*',              element: <NotFound /> },
    ],
  },
]);
