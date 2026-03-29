import { motion } from 'framer-motion';
import techstackIcon from '../assets/techstack.svg';
import { useLanguage } from '../contexts/LanguageContext';

export default function TechStack() {
  const { t } = useLanguage();
  const iconsUrl = techstackIcon;

  return (
    <section id="tech" className="py-16 md:py-24 relative z-10 w-full overflow-hidden border-y border-neutral-900/50 bg-[#020202]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
         <h2 className="text-2xl font-bold uppercase tracking-widest text-neutral-400 font-mono">{t('nav.techStack')}</h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <div className="flex items-center justify-start [&_img]:max-w-none animate-marquee gap-16 pr-16 bg-neutral-900/20 py-6">
           <img src={iconsUrl} alt="Tech stack list 1" loading="eager" className="h-16 md:h-20 grayscale-[20%] hover:grayscale-0 transition-all duration-300" />
           <img src={iconsUrl} alt="Tech stack list 2" loading="eager" className="h-16 md:h-20 grayscale-[20%] hover:grayscale-0 transition-all duration-300" />
           <img src={iconsUrl} alt="Tech stack list 3" loading="eager" className="h-16 md:h-20 grayscale-[20%] hover:grayscale-0 transition-all duration-300" />
        </div>
      </motion.div>
    </section>
  );
}
