import { useState, useEffect } from 'react';

import HeroSection from "../src/components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutSection from './components/AboutSection';
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ContactSection from './components/ContactSection';
import AccordionSection from './components/AccordionSection';
import ClosingSection from '@/components/ClosingSection';
function App() {
const [loading, setLoading] = useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}, []);

if (loading) return <LoadingScreen />;

  return (
    <>
    <CustomCursor />
          <Navbar isDark={false} toggleTheme={() => {}} />

      <HeroSection />
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <AccordionSection />
      <ContactSection/>
      <ClosingSection/>
      <Footer />
      
    </>
  );
}

export default App;
