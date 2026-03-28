export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 relative z-10 space-y-8">
      <div className="text-center mb-16">
         <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-neutral-100">About Me</h2>
         <div className="w-16 h-1 bg-neon-red mx-auto mt-6 shadow-[0_0_10px_rgba(255,42,42,0.6)]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 bento-box flex flex-col justify-center">
          <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest font-mono border-b border-neutral-800 pb-4">Overview</h3>
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-medium">
            Bringing imagination into reality through code and 3D spaces. Specializing in Extended Reality (XR) and Unity Development. Deep interest in Malware Analysis and System Security. Always learning, always optimizing to build the future of interactive experiences.
          </p>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-6">
          
          <div className="bento-box font-mono text-xs md:text-sm leading-7">
            <div className="flex gap-2 mb-4 border-b border-neutral-800 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="overflow-x-auto whitespace-pre">
              <span className="text-purple-400">interface</span> <span className="text-blue-400">Developer</span> {'{'}
              <div className="pl-6 border-l border-neutral-800/50 ml-2 mt-2 mb-2">
                <span className="text-neutral-400">role:</span> <span className="text-green-300">"XR Unity Developer"</span>;<br/>
                <span className="text-neutral-400">born:</span> <span className="text-orange-300">2004</span>;<br/>
                <span className="text-neutral-400">location:</span> <span className="text-green-300">"Hanoi, Vietnam"</span>;<br/>
                <span className="text-neutral-400">education:</span> <span className="text-green-300">"Information Technology @ PTIT"</span>;<br/>
                <span className="text-neutral-400">company:</span> <span className="text-green-300">"VRTech"</span>;<br/>
                <span className="text-neutral-400">currentFocus:</span> [
                  <span className="text-green-300 mt-1 block pl-4">"Unity",</span>
                  <span className="text-green-300 block pl-4">"XR/VR/AR",</span>
                  <span className="text-green-300 block pl-4 pb-1">"Malware Analysis"</span>
                ];
              </div>
              {'}'}
            </div>
          </div>

          <div className="bento-box flex flex-col justify-center">
             <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest font-mono border-b border-neutral-800 pb-4">Quick Stats</h3>
             <ul className="space-y-4 text-xs md:text-sm text-neutral-300 font-medium">
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 bg-neon-red mt-1.5 rounded-sm shrink-0" />
                 <span className="leading-snug">Official XR Developer at VRTech (since Oct 2024);</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 bg-neon-red mt-1.5 rounded-sm shrink-0" />
                 <span className="leading-snug">IT student at PTIT;</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 bg-neon-red mt-1.5 rounded-sm shrink-0" />
                 <span className="leading-snug">Unity developer since Apr 2023;</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 bg-neon-red mt-1.5 rounded-sm shrink-0" />
                 <span className="leading-snug">Exploring the dark arts of Malware Analysis;</span>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-2 h-2 bg-neon-red mt-1.5 rounded-sm shrink-0" />
                 <span className="leading-snug">Ask me about C++, C#, Unity, Unreal Engine and Game Logic.</span>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
