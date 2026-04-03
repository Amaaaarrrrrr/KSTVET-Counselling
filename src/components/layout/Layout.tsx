import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CrisisWidget } from '../ui/CrisisWidget';
import { FloatingBookButton } from '../ui/FloatingBookButton';
import { ScrollToTop } from '../ui/ScrollToTop';
import { ScrollToTopOnRouteChange } from './ScrollToTopOnRouteChange';
import { AnnouncementBanner } from '../sections/AnnouncementBanner';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-50">
        <AnnouncementBanner />
        <Navbar />
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CrisisWidget />
      <FloatingBookButton />
      <ScrollToTop />
      <ScrollToTopOnRouteChange />
    </div>
  );
};
