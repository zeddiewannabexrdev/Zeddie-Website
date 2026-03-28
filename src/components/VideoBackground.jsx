export default function VideoBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      {/* 
        Hack CSS cho Iframe để video luôn phủ kín màn hình (cover) 
        tỷ lệ 16:9 
      */}
      <iframe 
        className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.7vh] -translate-x-1/2 -translate-y-1/2 opacity-30 mix-blend-screen"
        src="https://www.youtube.com/embed/Hgg7M3kSqyE?autoplay=1&mute=1&controls=0&showinfo=0&autohide=1&loop=1&playlist=Hgg7M3kSqyE" 
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Tech Looped Background"
      ></iframe>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/80 via-[#020202]/50 to-[#020202]/90 z-10" />
    </div>
  );
}
