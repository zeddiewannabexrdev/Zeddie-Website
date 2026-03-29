import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const ease = [0.25, 0.46, 0.45, 0.94];
const spring = { type: 'spring', stiffness: 280, damping: 28 };

const sectionHeadingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease },
  }),
};

export default function WorkExperience() {
  const { t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const experiences = t('experience.roles');

  if (!Array.isArray(experiences)) return null;

  return (
    <section id="experience" className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10">

      {/* Section heading */}
      <motion.div
        variants={sectionHeadingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-neutral-100">
          {t('experience.title')}
        </h2>
        <motion.div
          className="w-16 h-1 bg-neon-red mx-auto mt-6 shadow-[0_0_10px_rgba(255,42,42,0.6)]"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          style={{ transformOrigin: 'center' }}
        />
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l border-neutral-800 ml-4 md:ml-12 pl-8 space-y-10">
        {experiences.map((exp, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <motion.div
              key={idx}
              custom={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Timeline node */}
              <motion.div
                className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-2"
                animate={
                  isHovered
                    ? { scale: 1.35, boxShadow: '0 0 18px rgba(255,42,42,0.8)', backgroundColor: 'rgb(255,42,42)', borderColor: 'rgb(255,42,42)' }
                    : { scale: 1,    boxShadow: '0 0 0px rgba(255,42,42,0)',    backgroundColor: '#020202',         borderColor: 'rgb(82,82,82)' }
                }
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              />

              {/*
                Layout: [left-spacer] [info] [desc]
                Spacer width = desc width = 30%
                → When NOT hovered: info is centered  (spacer 30% | info flex-1≈40% | desc-invisible 30%)
                → When hovered:     spacer collapses 0 | info flex-1≈70% | desc-visible 30%
                All elements always in DOM → zero mounting glitch when switching items.
              */}
              <div className="flex items-start overflow-hidden">

                {/* Left spacer — creates centering when not hovered */}
                <motion.div
                  className="flex-shrink-0 hidden md:block"
                  animate={{ width: isHovered ? '0%' : '30%' }}
                  transition={spring}
                />

                {/* Info block */}
                <motion.div
                  className="flex-1 min-w-0"
                  animate={{ x: isHovered ? 0 : 0 }} // position handled by spacer
                  transition={spring}
                >
                  <motion.span
                    className="text-[10px] sm:text-xs text-neon-red font-bold uppercase tracking-widest font-mono mb-1 block"
                    animate={{ opacity: isHovered ? 1 : 0.75 }}
                    transition={{ duration: 0.2 }}
                  >
                    {exp.date}
                  </motion.span>

                  <motion.h3
                    className="text-lg md:text-xl font-bold leading-snug"
                    animate={{ color: isHovered ? '#ffffff' : '#d4d4d4' }}
                    transition={{ duration: 0.22 }}
                  >
                    {exp.role}
                  </motion.h3>

                  <motion.span
                    className="text-sm font-medium tracking-wide mt-1 block"
                    animate={{ color: isHovered ? 'rgb(163,163,163)' : 'rgb(115,115,115)' }}
                    transition={{ duration: 0.22 }}
                  >
                    {exp.company}
                  </motion.span>
                </motion.div>

                {/* Description — always in DOM, only opacity + x animated (no layout impact) */}
                <div className="hidden md:block flex-shrink-0 overflow-hidden" style={{ width: '30%' }}>
                  <motion.div
                    className="pl-4 border-l border-neon-red/35"
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      x: isHovered ? 0 : 16,
                    }}
                    transition={spring}
                    style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
                  >
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {exp.desc}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Mobile — description expands below */}
              <motion.div
                className="md:hidden overflow-hidden"
                animate={{
                  height: isHovered ? 'auto' : 0,
                  opacity: isHovered ? 1 : 0,
                  marginTop: isHovered ? 10 : 0,
                }}
                transition={{ height: spring, opacity: { duration: 0.2 }, marginTop: { duration: 0.2 } }}
              >
                <p className="text-sm text-neutral-400 leading-relaxed pl-3 border-l border-neon-red/35">
                  {exp.desc}
                </p>
              </motion.div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
