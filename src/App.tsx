import HeroSection from "../src/components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutSection from './components/AboutSection';
import SkillsSection from "./components/SkillsSection";
function App() {
  return (
    <>
          <Navbar isDark={false} toggleTheme={() => {}} />

      <HeroSection />
      <AboutSection/>
      <SkillsSection/>
      <Footer />
      
    </>
  );
}

export default App;
