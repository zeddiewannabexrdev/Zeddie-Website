import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

// Reusable easing curve — smooth deceleration
const ease = [0.25, 0.46, 0.45, 0.94];

// Hover: gentle lift + glow border (no x-shift)
const cardHover = {
  y: -4,
  boxShadow: '0 0 24px rgba(255,42,42,0.12), 0 8px 32px rgba(0,0,0,0.4)',
  transition: { type: 'spring', stiffness: 280, damping: 22 },
};
const cardTap = {
  y: -1,
  transition: { type: 'spring', stiffness: 400, damping: 28 },
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10 space-y-6 md:space-y-8">

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-neutral-100">
          {t('about.title')}
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Overview card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.65, delay: 0.15, ease }}
          whileHover={cardHover}
          whileTap={cardTap}
          className="lg:col-span-5 bento-box flex flex-col justify-center cursor-default"
        >
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest font-mono border-b border-neutral-800 pb-4">
            {t('about.overview')}
          </h3>
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-medium">
            {t('about.overviewText')}
          </p>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.65, delay: 0.28, ease }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Code snippet card */}
          <motion.div
            className="bento-box font-mono text-xs md:text-sm leading-7 cursor-default"
            whileHover={cardHover}
            whileTap={cardTap}
          >
            <div className="flex gap-2 mb-4 border-b border-neutral-800 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="overflow-x-auto whitespace-pre">
              <span className="text-purple-400">interface</span>{' '}
              <span className="text-blue-400">Developer</span> {'{'}
              <div className="pl-6 border-l border-neutral-800/50 ml-2 mt-2 mb-2">
                <span className="text-neutral-400">{t('about.role')}:</span>{' '}
                <span className="text-green-300">{t('about.roleValue')}</span>;<br />
                <span className="text-neutral-400">{t('about.born')}:</span>{' '}
                <span className="text-orange-300">2004</span>;<br />
                <span className="text-neutral-400">{t('about.location')}:</span>{' '}
                <span className="text-green-300">{t('about.locationValue')}</span>;<br />
                <span className="text-neutral-400">{t('about.education')}:</span>{' '}
                <span className="text-green-300">{t('about.educationValue')}</span>;<br />
                <span className="text-neutral-400">{t('about.company')}:</span>{' '}
                <span className="text-green-300">{t('about.companyValue')}</span>;<br />
                <span className="text-neutral-400">{t('about.currentFocus')}:</span> [
                <span className="text-green-300 mt-1 block pl-4">"Unity",</span>
                <span className="text-green-300 block pl-4">"XR/VR/AR",</span>
                <span className="text-green-300 block pl-4 pb-1">"Malware Analysis"</span>
                ];
              </div>
              {'}'}
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            className="bento-box flex flex-col justify-center cursor-default"
            whileHover={cardHover}
            whileTap={cardTap}
          >
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest font-mono border-b border-neutral-800 pb-4">
              {t('about.stats')}
            </h3>
            <ul className="space-y-4 text-xs md:text-sm text-neutral-300 font-medium">
              {[
                t('about.stat1'),
                t('about.stat2'),
                t('about.stat3'),
                t('about.stat4'),
                t('about.stat5'),
              ].map((stat, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.07, ease }}
                >
                  <motion.div
                    className="w-2 h-2 bg-neon-red mt-1.5 rounded-sm shrink-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.38 + i * 0.07 }}
                  />
                  <span className="leading-snug">{stat}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
