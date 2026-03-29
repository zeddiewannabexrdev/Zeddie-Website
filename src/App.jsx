import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import CoreCompetencies from './components/CoreCompetencies';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import RippleBackground from './components/RippleBackground';
import InteractiveCursor from './components/InteractiveCursor';
import ShootingStars from './components/ShootingStars';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen selection:bg-neon-red selection:text-white relative bg-[#020202]">
        <InteractiveCursor />
        <RippleBackground />
        <ShootingStars />
        <Navbar />
        
        <main className="relative z-10 w-full flex flex-col pt-12">
          <Hero />
          <About />
          <CoreCompetencies />
          <TechStack />
          <WorkExperience />
          <Projects />
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
