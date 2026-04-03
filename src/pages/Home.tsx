import React from 'react';
import { AnnouncementBanner } from '../components/sections/AnnouncementBanner';
import { Hero } from '../components/sections/Hero';
import { WhoWeHelp } from '../components/sections/WhoWeHelp';
import { Services } from '../components/sections/Services';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Statistics } from '../components/sections/Statistics';
import { MeetTheTeam } from '../components/sections/MeetTheTeam';
import { Resources } from '../components/sections/Resources';
import { Testimonials } from '../components/sections/Testimonials';
import { CrisisSupport } from '../components/sections/CrisisSupport';
import { Blog } from '../components/sections/Blog';
import { FAQ } from '../components/sections/FAQ';
import { ContactSection } from '../components/sections/ContactSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WhoWeHelp />
      <Services />
      <HowItWorks />
      <Statistics />
      <MeetTheTeam />
      <Resources />
      <Testimonials />
      <CrisisSupport />
      <Blog />
      <FAQ />
      <ContactSection />
    </>
  );
};

export default Home;
