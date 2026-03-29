import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4 sm:px-6 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur text-xs font-bold text-neutral-400 uppercase tracking-[0.3em] overflow-hidden"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-red to-white drop-shadow-[0_0_15px_rgba(255,42,42,0.8)] relative z-10">
          {t('hero.hello')}
        </span>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl w-full max-w-6xl font-extrabold tracking-tighter leading-tight text-white mb-6"
      >
        I'm An Long <br className="hidden sm:block"/>
        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-500 font-bold block mt-4">(Zeddiewannabexrdev)</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg md:text-2xl lg:text-3xl text-neutral-400 font-medium max-w-2xl tracking-tight"
      >
        {t('hero.role')}
      </motion.p>
    </section>
  );
}
