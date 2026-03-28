export default function XRBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020202]">
      
      {/* 3D Holodeck VR Floor */}
      <div className="absolute bottom-0 left-[-50%] w-[200%] h-[70vh] origin-bottom [transform:perspective(1000px)_rotateX(75deg)_translateY(50px)] [mask-image:linear-gradient(to_top,#000_10%,transparent_100%)] opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,42,42,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,42,42,0.25)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Các điểm neo không gian (AR Spatial Point Cloud) */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_20%,transparent_100%)] opacity-80" />

      {/* LiDAR Scanning Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-red-500/30 shadow-[0_0_30px_3px_rgba(255,42,42,0.8)] animate-ar-scan z-10" />

      {/* Vignette Blur overlay để text rõ chữ hơn */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/80 via-transparent to-[#020202]/90 z-20" />
    </div>
  );
}
