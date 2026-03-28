import { useEffect, useRef } from 'react';

const Quest3Icon = () => (
  <svg width="40" height="30" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 0px 8px rgba(0,255,255,0.6))' }}>
    <rect x="10" y="10" width="80" height="40" rx="20" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
    <rect x="25" y="20" width="8" height="20" rx="4" fill="#111" />
    <rect x="46" y="20" width="8" height="20" rx="4" fill="#111" />
    <rect x="67" y="20" width="8" height="20" rx="4" fill="#111" />
  </svg>
);

export default function InteractiveCursor() {
  const dotsRef = useRef([]);
  const mousePosRef = useRef({ x: -100, y: -100 });
  
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const onMouseMove = (e) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove);

    const tailSpots = Array(15).fill().map(() => ({ x: -100, y: -100 }));
    let animationFrameId;

    const animate = () => {
      let { x, y } = mousePosRef.current;
      tailSpots[0].x = x;
      tailSpots[0].y = y;

      const dots = dotsRef.current;
      
      for (let i = 1; i < tailSpots.length; i++) {
        tailSpots[i].x += (tailSpots[i - 1].x - tailSpots[i].x) * 0.4;
        tailSpots[i].y += (tailSpots[i - 1].y - tailSpots[i].y) * 0.4;
      }

      tailSpots.forEach((spot, index) => {
        if (dots[index]) {
          dots[index].style.transform = `translate(${spot.x}px, ${spot.y}px)`;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {Array.from({ length: 15 }).map((_, index) => {
         const size = Math.max(20 - index * 1.5, 4);
         const opacity = 1 - index * 0.05;

         return (
           <div
             key={index}
             ref={(el) => (dotsRef.current[index] = el)}
             className="absolute top-0 left-0 rounded-full flex items-center justify-center mix-blend-screen"
             style={{
               width: `${size}px`,
               height: `${size}px`,
               backgroundColor: index === 0 ? 'transparent' : '#00ffff',
               opacity: index === 0 ? 1 : opacity,
               marginLeft: `-${size / 2}px`,
               marginTop: `-${size / 2}px`,
               boxShadow: index !== 0 ? '0 0 10px rgba(0,255,255,0.8)' : 'none',
               willChange: 'transform'
             }}
           >
             {index === 0 && (
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-3 ml-3">
                 <Quest3Icon />
               </div>
             )}
           </div>
         );
      })}
    </div>
  );
}
