import { useMemo } from 'react';

export default function ShootingStars() {
  const stars = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen opacity-60">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-[2px] h-[70px] bg-gradient-to-b from-transparent via-white/40 to-white/80 opacity-0 rounded-full"
          style={{
            left: star.left,
            top: star.top,
            animation: `meteor ${star.animationDuration} linear infinite ${star.animationDelay}`
          }}
        />
      ))}
    </div>
  );
}
