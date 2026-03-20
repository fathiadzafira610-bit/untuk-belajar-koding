import HeroSection from "../src/components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutSection from './components/AboutSection';
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
function App() {
  return (
    <>
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
