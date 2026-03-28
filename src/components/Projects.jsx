import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "VR Interactive Simulator",
      category: "XR / Unity",
      description: "Realistic physical interaction system for weapons and equipment in a virtual XR environment, featuring highly optimized particle systems.",
      tech: "Unity, C#, Oculus SDK"
    },
    {
      id: 2,
      title: "Malware Sandbox",
      category: "Cyber Security",
      description: "Automated malware behavior analysis sandbox environment, hooking system calls and visualizing intuitive reports via structural graphs.",
      tech: "Python, C++, Windows APIs"
    },
    {
      id: 3,
      title: "Real-time PBR Configurator",
      category: "WebGL / Three.js",
      description: "A versatile 3D product configurator deployed directly on the web with 360-degree interactive rotations and physically based environment lighting.",
      tech: "React, Three.js, WebGL"
    }
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
         <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-neutral-100">Projects</h2>
         <div className="w-16 h-1 bg-neon-red mx-auto mt-6 shadow-[0_0_10px_rgba(255,42,42,0.6)]" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <motion.div 
            key={p.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bento-box p-0 flex flex-col h-full group bg-neutral-900/20"
          >
             <div className="aspect-video w-full bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center border-b border-neutral-800">
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
               <div className="text-neutral-600 text-[10px] tracking-widest font-mono uppercase z-20 group-hover:scale-110 group-hover:text-neon-red transition-all duration-500">
                  [ Thumbnail: 16:9 ]
               </div>
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgyMHYyMEgwem0xMCAxMGgxMHYxMEgxMHoiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iLjE1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-20 pointer-events-none z-0" />
             </div>

             <div className="p-6 flex flex-col flex-grow">
               <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-neon-red transition-colors">{p.title}</h3>
               <p className="text-[10px] text-neon-red font-bold uppercase tracking-widest mb-4 font-mono">{p.category}</p>
               <p className="text-xs md:text-sm text-neutral-400 mb-8 flex-grow leading-relaxed font-medium">{p.description}</p>
               
               <div className="pt-5 border-t border-neutral-800/60 mt-auto flex items-center justify-between">
                 <span className="text-[9px] text-neutral-500 font-mono uppercase tracking-widest border border-neutral-800 px-2 py-1 bg-neutral-900 rounded-sm">
                   {p.tech}
                 </span>
                 <button className="text-[10px] font-bold uppercase tracking-wider text-white bg-neutral-800 px-4 py-2 flex items-center gap-2 rounded-sm border border-neutral-700 hover:bg-neon-red hover:border-transparent transition-all">
                   View Detail
                 </button>
               </div>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
