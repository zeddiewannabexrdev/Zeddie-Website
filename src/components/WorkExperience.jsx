import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function WorkExperience() {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState(null); // No items expanded by default

  const experiences = t('experience.roles');

  if (!Array.isArray(experiences)) return null;

  return (
    <section id="experience" className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
         <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-neutral-100">{t('experience.title')}</h2>
         <div className="w-16 h-1 bg-neon-red mx-auto mt-6 shadow-[0_0_10px_rgba(255,42,42,0.6)]" />
      </motion.div>

      <div className="relative border-l border-neutral-800 ml-4 md:ml-12 pl-8 space-y-12">
        {experiences.map((exp, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setExpandedIndex(idx)}
              onMouseLeave={() => setExpandedIndex(null)}
              onClick={() => setExpandedIndex(isExpanded ? null : idx)}
            >
              {/* Glowing Timeline Node */}
              <div 
                className={`absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300
                  ${isExpanded ? 'bg-neon-red border-neon-red shadow-[0_0_15px_rgba(255,42,42,0.8)]' : 'bg-[#020202] border-neutral-600 group-hover:border-neon-red group-hover:shadow-[0_0_10px_rgba(255,42,42,0.5)]'}
                `} 
              />
              {/* Timeline Connector Line Glow (optional extra touch) */}
              {isExpanded && idx !== experiences.length - 1 && (
                <div className="absolute -left-[34px] top-6 bottom-[-48px] w-[2px] bg-gradient-to-b from-neon-red/50 to-transparent pointer-events-none" />
              )}

              <div className="flex flex-col mb-1 transition-colors">
                <span className="text-[10px] sm:text-xs text-neon-red font-bold uppercase tracking-widest font-mono mb-1">{exp.date}</span>
                <h3 className={`text-lg md:text-xl font-bold transition-colors ${isExpanded ? 'text-white' : 'text-neutral-300 group-hover:text-white'}`}>
                  {exp.role}
                </h3>
                <span className="text-sm text-neutral-500 font-medium tracking-wide mt-1">{exp.company}</span>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: "16px" }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bento-box !p-5 md:!p-6 bg-gradient-to-br from-neutral-900/60 to-black border-neutral-800/60 shadow-inner">
                      <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-medium">
                        {exp.desc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
