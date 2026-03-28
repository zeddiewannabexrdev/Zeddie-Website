export default function Skills() {
  const icons = "unity,cs,python,react,tailwind,vite,github,ai,ps,linux";
  const iconList = icons.split(',');

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-10 mb-32 relative">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-neutral-100">
          Vũ Khí <span className="text-neon-red text-glow-red">Công Nghệ</span>
        </h2>
        <div className="w-24 h-1 bg-neon-red mt-6 mb-4 shadow-glow-red" />
      </div>

      {/* Lưới phân bổ Icon: grid chuẩn theo yêu cầu */}
      <div className="grid grid-cols-5 md:grid-cols-10 gap-6 justify-items-center bg-neutral-900/40 p-10 rounded border border-neutral-800 backdrop-blur-sm">
        {iconList.map((icon) => (
          <div key={icon} className="relative group w-14 h-14 md:w-16 md:h-16 shrink-0">
            <div className="w-full h-full bg-neutral-900 border border-neutral-700 rounded flex items-center justify-center p-2 relative z-10 transition-transform group-hover:-translate-y-2 duration-300">
              <img 
                src={`https://skillicons.dev/icons?i=${icon}&theme=dark`} 
                alt={`${icon} icon`} 
                className="w-full h-full object-contain filter drop-shadow" 
                loading="lazy"
              />
            </div>
            {/* Hiệu ứng LED Glow phía sau icon khi hover */}
            <div className="absolute inset-0 rounded -z-0 opacity-0 group-hover:opacity-100 led-glow-hover" />
          </div>
        ))}
      </div>
    </section>
  );
}
