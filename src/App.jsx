import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';
import InteractiveCursor from './components/InteractiveCursor';
import ShootingStars from './components/ShootingStars';

function App() {
  return (
    <div className="min-h-screen selection:bg-neon-red selection:text-white relative bg-[#020202]">
      <InteractiveCursor />
      <VideoBackground />
      <ShootingStars />
      <Navbar />
      
      <main className="relative z-10 w-full flex flex-col pt-12">
        <Hero />
        <About />
        <TechStack />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
