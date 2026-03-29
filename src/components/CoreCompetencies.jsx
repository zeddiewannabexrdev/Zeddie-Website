import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function CoreCompetencies() {
  const { t } = useLanguage();
  const comps = [
    {
      title: t('competencies.prog'),
      items: ["C#", "C++", "OOP", "Data Structures & Algorithms"]
    },
    {
      title: t('competencies.tech'),
      items: ["Unity (3D, VR/AR/MR)", "XR SDKs", "AR Foundations", "Vuforia", "ARKit", "ARCore", "Unreal Engine 5"]
    },
    {
      title: t('competencies.source'),
      items: ["Git (GitHub, GitLab)", "Plastic SCM"]
    },
    {
      title: t('competencies.hardware'),
      items: ["Meta Quest 2", "Quest 3", "Quest 3S", "HTC Vive", "Vive Focus 3", "Microsoft Hololens 2"]
    }
  ];

  return (
    <section id="competencies" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
         <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-neutral-100">{t('competencies.title')}</h2>
         <div className="w-16 h-1 bg-neon-red mx-auto mt-6 shadow-[0_0_10px_rgba(255,42,42,0.6)]" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {comps.map((comp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bento-box flex flex-col group p-6 bg-gradient-to-b from-neutral-900/50 to-transparent hover:border-neutral-700/80"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800/60">
              <div className="w-2 h-2 rounded-full bg-neon-red/50 group-hover:bg-neon-red transition-colors duration-300 shadow-[0_0_10px_rgba(255,42,42,0)] group-hover:shadow-[0_0_10px_rgba(255,42,42,0.8)]" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-white group-hover:text-neon-red transition-colors font-mono">{comp.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {comp.items.map((item, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 text-xs text-neutral-400 bg-neutral-900/80 border border-neutral-800 rounded-md hover:bg-neon-red/10 hover:border-neon-red/50 hover:text-white transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
