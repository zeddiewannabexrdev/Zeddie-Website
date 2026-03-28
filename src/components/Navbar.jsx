import cvFile from '../assets/CV-Unity-Developer-Dao-An-Hoang-Long.pdf';
import myImg from '../assets/myimg.jpg';

export default function Navbar() {
  return (
    <>
      <div className="fixed top-6 right-6 z-50">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-neutral-700 hover:border-neon-red transition-colors shadow-lg cursor-pointer hidden sm:block group relative backdrop-blur-sm">
          <img src={myImg} alt="Avatar AnLong" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300" />
          <div className="absolute inset-0 bg-neon-red/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto">
        <nav className="glass-pill rounded-full px-6 md:px-8 py-3 flex items-center justify-between md:justify-center gap-4 md:gap-8 shadow-[0_0_30px_rgba(0,0,0,0.8)] mx-auto w-full">
          <a href="#home" className="text-[10px] md:text-xs font-bold text-neutral-400 hover:text-white transition-colors tracking-widest uppercase md:block hidden">Home</a>
          <a href="#about" className="text-[10px] md:text-xs font-bold text-neutral-400 hover:text-white transition-colors tracking-widest uppercase md:block hidden">About</a>
          <a href="#tech" className="text-[10px] md:text-xs font-bold text-neutral-400 hover:text-white transition-colors tracking-widest uppercase md:block hidden">Tech Stack</a>
          <a href="#projects" className="text-[10px] md:text-xs font-bold text-neutral-400 hover:text-white transition-colors tracking-widest uppercase md:block hidden">Projects</a>
          
          <div className="w-px h-4 bg-neutral-700 mx-2 hidden md:block" />
          
          <a 
            href={cvFile}
            download="CV-Unity-Developer-Dao-An-Hoang-Long.pdf"
            className="text-[10px] md:text-xs font-bold text-neon-red hover:text-red-400 transition-colors tracking-widest uppercase w-full text-center md:w-auto"
          >
            Resume
          </a>
        </nav>
      </header>
    </>
  );
}
