import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cvFile from '../assets/CV-Unity-Developer-Dao-An-Hoang-Long.pdf';
import myImg from '../assets/myimg.jpg';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [showResumeOptions, setShowResumeOptions] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-6 right-6 z-50 flex flex-col items-end"
      >
        <div 
          onClick={() => setShowAvatarMenu(!showAvatarMenu)}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-neutral-700 hover:border-neon-red transition-colors shadow-lg cursor-pointer group relative backdrop-blur-sm"
        >
          <img src={myImg} alt="Avatar AnLong" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300" />
          <div className="absolute inset-0 bg-neon-red/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <AnimatePresence>
          {showAvatarMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[calc(100%+12px)] right-0 w-48 bg-black/95 border border-neutral-800 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,0,0,0.2)] backdrop-blur-xl z-50 flex flex-col"
            >
              <button 
                onClick={() => { setShowAvatarMenu(false); setShowAvatarModal(true); }}
                className="px-4 py-3 text-[11px] md:text-xs text-neutral-300 hover:text-neon-red hover:bg-neutral-800/80 transition-all font-medium border-b border-neutral-800/50 flex items-center justify-start gap-2 text-left"
              >
                {t('nav.viewAvatar')}
              </button>
              
              <div className="flex items-center justify-between px-4 py-3 text-[11px] md:text-xs text-neutral-300 font-medium bg-neutral-900/40">
                <button 
                  onClick={() => { setLanguage('en'); setShowAvatarMenu(false); }}
                  className={`flex-1 text-center py-1 rounded transition-colors ${language === 'en' ? 'bg-neon-red text-white' : 'hover:text-neon-red hover:bg-neutral-800'}`}
                >
                  🇬🇧 EN
                </button>
                <div className="w-px h-4 bg-neutral-700 mx-2" />
                <button 
                  onClick={() => { setLanguage('vi'); setShowAvatarMenu(false); }}
                  className={`flex-1 text-center py-1 rounded transition-colors ${language === 'vi' ? 'bg-neon-red text-white' : 'hover:text-neon-red hover:bg-neutral-800'}`}
                >
                  🇻🇳 VI
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.header 
        initial={{ opacity: 0, y: -20, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-1/2 z-40 w-auto min-w-[220px]"
      >
        <nav className="glass-pill rounded-full px-6 md:px-8 py-3 flex items-center justify-between md:justify-center gap-4 md:gap-8 shadow-[0_0_30px_rgba(0,0,0,0.8)] mx-auto w-full">
          {/* Hamburger Menu Toggle (Mobile Only) */}
          <button 
            className="md:hidden text-neutral-400 hover:text-white focus:outline-none"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {showMobileMenu ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <a href="#home" className="text-[10px] md:text-xs font-bold text-neutral-400 hover:text-white transition-colors tracking-widest uppercase md:block hidden">{t('nav.home')}</a>
          <a href="#about" className="text-[10px] md:text-xs font-bold text-neutral-400 hover:text-white transition-colors tracking-widest uppercase md:block hidden">{t('nav.about')}</a>
          <a href="#competencies" className="text-[10px] md:text-xs font-bold text-neutral-400 hover:text-white transition-colors tracking-widest uppercase xl:block hidden">{t('nav.skills')}</a>
          <a href="#tech" className="text-[10px] md:text-xs font-bold text-neutral-400 hover:text-white transition-colors tracking-widest uppercase lg:block hidden">{t('nav.techStack')}</a>
          <a href="#experience" className="text-[10px] md:text-xs font-bold text-neutral-400 hover:text-white transition-colors tracking-widest uppercase md:block hidden">{t('nav.experience')}</a>
          <a href="#projects" className="text-[10px] md:text-xs font-bold text-neutral-400 hover:text-white transition-colors tracking-widest uppercase md:block hidden">{t('nav.projects')}</a>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="text-[10px] md:text-xs font-bold text-neutral-400 hover:text-white transition-colors tracking-widest uppercase md:block hidden">{t('nav.contact')}</button>
          
          <div className="w-px h-4 bg-neutral-700 mx-2 hidden md:block" />
          
          <div 
            className="relative"
            onMouseEnter={() => setShowResumeOptions(true)}
            onMouseLeave={() => setShowResumeOptions(false)}
          >
            <button 
              className="text-[10px] md:text-xs font-bold text-neon-red hover:text-red-400 transition-colors tracking-widest uppercase w-full text-center md:w-auto flex items-center justify-center md:justify-start gap-1 focus:outline-none"
              onClick={() => setShowResumeOptions(!showResumeOptions)}
            >
              {t('nav.resume')}
              <svg 
                className={`w-3 h-3 transition-transform duration-300 ${showResumeOptions ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <AnimatePresence>
              {showResumeOptions && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[calc(100%+8px)] right-0 md:left-1/2 md:-translate-x-1/2 w-48 bg-black/90 border border-neutral-800 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(255,0,0,0.2)] backdrop-blur-md z-50 flex flex-col"
                >
                  <a 
                    href={cvFile}
                    download="CV-Unity-Developer-Dao-An-Hoang-Long.pdf"
                    className="px-4 py-3 text-[11px] md:text-xs text-neutral-300 hover:text-neon-red hover:bg-neutral-800/80 transition-all font-medium border-b border-neutral-800/50 flex items-center gap-2"
                    onClick={() => setShowResumeOptions(false)}
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {t('nav.downloadCV')}
                  </a>
                  <button 
                    onClick={() => {
                      setShowResumeOptions(false);
                      setShowCVModal(true);
                    }}
                    className="w-full text-left px-4 py-3 text-[11px] md:text-xs text-neutral-300 hover:text-neon-red hover:bg-neutral-800/80 transition-all font-medium flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {t('nav.viewOnline')}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: -10, x: "-50%" }}
              transition={{ duration: 0.2 }}
              className="absolute top-[calc(100%+12px)] left-1/2 w-[85vw] sm:w-[350px] bg-black/95 border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.9)] backdrop-blur-xl z-40 flex flex-col items-center py-4 md:hidden"
            >
              <a href="#home" onClick={() => setShowMobileMenu(false)} className="w-full text-center py-3 text-xs font-bold text-neutral-300 hover:text-neon-red hover:bg-neutral-900/50 transition-colors tracking-widest uppercase border-b border-neutral-800/50">{t('nav.home')}</a>
              <a href="#about" onClick={() => setShowMobileMenu(false)} className="w-full text-center py-3 text-xs font-bold text-neutral-300 hover:text-neon-red hover:bg-neutral-900/50 transition-colors tracking-widest uppercase border-b border-neutral-800/50">{t('nav.about')}</a>
              <a href="#competencies" onClick={() => setShowMobileMenu(false)} className="w-full text-center py-3 text-xs font-bold text-neutral-300 hover:text-neon-red hover:bg-neutral-900/50 transition-colors tracking-widest uppercase border-b border-neutral-800/50">{t('nav.skills')}</a>
              <a href="#tech" onClick={() => setShowMobileMenu(false)} className="w-full text-center py-3 text-xs font-bold text-neutral-300 hover:text-neon-red hover:bg-neutral-900/50 transition-colors tracking-widest uppercase border-b border-neutral-800/50">{t('nav.techStack')}</a>
              <a href="#experience" onClick={() => setShowMobileMenu(false)} className="w-full text-center py-3 text-xs font-bold text-neutral-300 hover:text-neon-red hover:bg-neutral-900/50 transition-colors tracking-widest uppercase border-b border-neutral-800/50">{t('nav.experience')}</a>
              <a href="#projects" onClick={() => setShowMobileMenu(false)} className="w-full text-center py-3 text-xs font-bold text-neutral-300 hover:text-neon-red hover:bg-neutral-900/50 transition-colors tracking-widest uppercase border-b border-neutral-800/50">{t('nav.projects')}</a>
              <button onClick={() => { setShowMobileMenu(false); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }} className="w-full text-center py-3 text-xs font-bold text-neutral-300 hover:text-neon-red hover:bg-neutral-900/50 transition-colors tracking-widest uppercase">{t('nav.contact')}</button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {showCVModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-full bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,0,0,0.15)] flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b border-neutral-800 bg-black/50">
                <h3 className="text-white font-bold tracking-widest uppercase text-sm">{t('nav.resumeView')}</h3>
                <button 
                  onClick={() => setShowCVModal(false)}
                  className="text-neutral-400 hover:text-neon-red transition-colors p-1"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="flex-1 w-full bg-neutral-800/50">
                <iframe 
                  src={cvFile} 
                  className="w-full h-full border-none rounded-b-2xl"
                  title="Resume PDF View"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showAvatarModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl h-auto aspect-square max-h-[90vh] bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,0,0,0.15)] flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b border-neutral-800 bg-black/50 z-10 absolute top-0 w-full">
                <h3 className="text-white font-bold tracking-widest uppercase text-sm">{t('nav.avatarView')}</h3>
                <button 
                  onClick={() => setShowAvatarModal(false)}
                  className="text-neutral-400 hover:text-neon-red transition-colors p-1 bg-black/50 rounded-full"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="flex-1 w-full h-full bg-neutral-800 flex items-center justify-center overflow-hidden">
                <img src={myImg} alt="Avatar Full" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
