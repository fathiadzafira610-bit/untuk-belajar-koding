import { useState, useEffect } from 'react';

import HeroSection from "../src/components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutSection from './components/AboutSection';
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
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
      <Footer />
      
    </>
  );
}

export default App;
