import { Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="w-full border-t border-neutral-900/80 bg-[#010101] py-10 md:py-16 relative z-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center">
        
        <div className="flex items-center gap-6 mb-8">
          <a href="https://github.com/zeddiewannabexrdev" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neon-red hover:shadow-[0_0_15px_rgba(255,42,42,0.4)] hover:-translate-y-1 transition-all duration-300 leading-none">
             <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/long-dao-an-hoang-6286a5252" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neon-red hover:shadow-[0_0_15px_rgba(255,42,42,0.4)] hover:-translate-y-1 transition-all duration-300 leading-none">
             <LinkedinIcon />
          </a>
          <a href="https://www.facebook.com/zeddiewannapeace/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neon-red hover:shadow-[0_0_15px_rgba(255,42,42,0.4)] hover:-translate-y-1 transition-all duration-300 leading-none">
             <FacebookIcon />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anlongvrdev.is.working@gmail.com" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neon-red hover:shadow-[0_0_15px_rgba(255,42,42,0.4)] hover:-translate-y-1 transition-all duration-300 leading-none">
             <Mail size={20} />
          </a>
        </div>

        <p className="text-neutral-600 text-xs font-mono tracking-widest uppercase">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}
