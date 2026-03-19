import HeroSection from "../src/components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
          <Navbar isDark={false} toggleTheme={() => {}} />

      <HeroSection />
      <Footer />
      
    </>
  );
}

export default App;
