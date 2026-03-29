import React, { useEffect, useRef } from 'react';

export default function RippleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Adjust high DPI screens for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    // But setting dpr might complicate simple logic, so standard drawing is fine for ripples.
    // If we want it crisp:
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', handleResize);

    // Animation Phases:
    // 1: Dropping (waiting to hit surface)
    // 2: Explosive Shockwave
    // 3: Settled interactive state
    let phase = 1; 
    let dropY = -60;
    let dropVy = 0;
    const gravity = 0.06; // Very slow, cinematic drop
    let dropTrail = []; // Store trailing positions for the tail effect
    
    let shockwaveRadius = 0;
    let maxShockwaveRadius = Math.sqrt(width * width + height * height);
    
    let ripples = [];
    
    // Background Color Interpolation
    // Starts as black (2, 2, 2), ends as very deep neon red (15, 2, 2)
    let bgProgress = 0; // 0 to 1

    // Scanning beam state
    let scanX = 0;          // current X position of the vertical scan beam
    let scanDir = 1;        // 1 = moving right, -1 = moving left
    const scanSpeed = 1.2;  // pixels per frame (slow sweep)
    const scanBeamWidth = 120; // width of the glow spread

    let scanY = 0;           // current Y position of the horizontal scan beam
    let scanYDir = 1;        // 1 = moving down, -1 = moving up
    const scanYSpeed = 0.8;  // slightly slower than X for visual variety
    const scanBeamHeight = 100; // height of the horizontal glow spread

    let animationFrameId;
    let lastMousePosition = { x: -100, y: -100 };

    const animate = () => {
      // Clear canvas with transitioning color
      const r = Math.floor(2 + (15 - 2) * bgProgress);
      const g = 2;
      const b = 2;
      
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(0, 0, width, height);

      // Phase 1: Wait for Drop to Hit Center
      if (phase === 1) {
        dropVy += gravity;
        dropY += dropVy;

        // Store trail positions (keep last 28 for a longer tail)
        dropTrail.push({ y: dropY, vy: dropVy });
        if (dropTrail.length > 28) dropTrail.shift();

        // Draw the glowing tail (fade out older positions)
        for (let i = 0; i < dropTrail.length; i++) {
          const t = dropTrail[i];
          const tailAlpha = (i / dropTrail.length) * 0.6; // fade from transparent to semi-opaque
          const tailRadius = 2 + (i / dropTrail.length) * 3; // grow towards the drop
          ctx.beginPath();
          ctx.arc(width / 2, t.y, tailRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 42, 42, ${tailAlpha})`;
          ctx.shadowBlur = tailAlpha * 20;
          ctx.shadowColor = '#ff2a2a';
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Draw the elongated teardrop body (stretched ellipse based on velocity)
        const stretchY = Math.min(dropVy * 1.6, 22); // how elongated is the drop
        ctx.beginPath();
        ctx.ellipse(width / 2, dropY - stretchY / 2, 5, 5 + stretchY / 2, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#ff2a2a';
        ctx.shadowBlur = 40;
        ctx.shadowColor = '#ff0000';
        ctx.fill();

        // Bright glowing core
        ctx.beginPath();
        ctx.arc(width / 2, dropY, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 200, 200, 0.9)';
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#ffffff';
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // When it hits the vertical center
        if (dropY >= height / 2) {
          dropY = height / 2;
          dropTrail = []; // clear tail on impact
          phase = 2; // trigger shockwave
        }
      }

      // Phase 2: Massive Fast Shockwave & Bg Transition
      if (phase === 2) {
        shockwaveRadius += 7.5; // Even slower expansion speed
        bgProgress += 0.007; // Even slower fade
        if (bgProgress > 1) bgProgress = 1;

        ctx.beginPath();
        ctx.arc(width / 2, height / 2, shockwaveRadius, 0, Math.PI * 2);
        ctx.lineWidth = 6;
        const alpha = Math.max(0, 1 - (shockwaveRadius / maxShockwaveRadius));
        ctx.strokeStyle = `rgba(255, 42, 42, ${alpha})`;
        ctx.shadowBlur = 30;
        ctx.shadowColor = '#ff2a2a';
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Optionally, spawn a few secondary shockwaves
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, Math.max(0, shockwaveRadius - 100), 0, Math.PI * 2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = `rgba(255, 100, 100, ${alpha * 0.5})`;
        ctx.stroke();

        if (shockwaveRadius >= maxShockwaveRadius) {
          phase = 3; 
        }
      }

      // Phase 3 & Ripples + Scanning Beam
      if (phase >= 2) {
         if (bgProgress < 1) {
             bgProgress += 0.005;
             if (bgProgress > 1) bgProgress = 1;
         }
      }

      // Scanning Beam only in Phase 3
      if (phase === 3) {
        // Move the scan X position back and forth
        scanX += scanSpeed * scanDir;
        if (scanX > width + scanBeamWidth) scanDir = -1;
        if (scanX < -scanBeamWidth) scanDir = 1;

        // Draw the glowing beam as a vertical gradient stripe
        const beamGrad = ctx.createLinearGradient(scanX - scanBeamWidth, 0, scanX + scanBeamWidth, 0);
        beamGrad.addColorStop(0,   'rgba(255, 0, 0, 0)');
        beamGrad.addColorStop(0.3, 'rgba(255, 30, 30, 0.15)');
        beamGrad.addColorStop(0.5, 'rgba(255, 42, 42, 0.40)');
        beamGrad.addColorStop(0.7, 'rgba(255, 30, 30, 0.15)');
        beamGrad.addColorStop(1,   'rgba(255, 0, 0, 0)');

        ctx.fillStyle = beamGrad;
        ctx.fillRect(scanX - scanBeamWidth, 0, scanBeamWidth * 2, height);

        // Bright thin leading edge line
        const edgeX = scanDir > 0 ? scanX + 15 : scanX - 15;
        ctx.beginPath();
        ctx.moveTo(edgeX, 0);
        ctx.lineTo(edgeX, height);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(255, 60, 60, 0.7)';
        ctx.shadowBlur = 25;
        ctx.shadowColor = '#ff2a2a';
        ctx.stroke();
        ctx.shadowBlur = 0;

        // --- Horizontal Scan Beam (sweeps up and down) ---
        scanY += scanYSpeed * scanYDir;
        if (scanY > height + scanBeamHeight) scanYDir = -1;
        if (scanY < -scanBeamHeight) scanYDir = 1;

        const beamGradH = ctx.createLinearGradient(0, scanY - scanBeamHeight, 0, scanY + scanBeamHeight);
        beamGradH.addColorStop(0,   'rgba(255, 0, 0, 0)');
        beamGradH.addColorStop(0.3, 'rgba(255, 30, 30, 0.10)');
        beamGradH.addColorStop(0.5, 'rgba(255, 42, 42, 0.28)');
        beamGradH.addColorStop(0.7, 'rgba(255, 30, 30, 0.10)');
        beamGradH.addColorStop(1,   'rgba(255, 0, 0, 0)');

        ctx.fillStyle = beamGradH;
        ctx.fillRect(0, scanY - scanBeamHeight, width, scanBeamHeight * 2);

        // Bright thin leading edge for horizontal beam
        const edgeY = scanYDir > 0 ? scanY + 12 : scanY - 12;
        ctx.beginPath();
        ctx.moveTo(0, edgeY);
        ctx.lineTo(width, edgeY);
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = 'rgba(255, 60, 60, 0.55)';
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#ff2a2a';
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Render interactive ripples continually
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i];
        ripple.radius += 0.6; // Even slower expansion 
        ripple.opacity -= 0.004; // Even slower fade out
        
        if (ripple.opacity <= 0) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = `rgba(255, 42, 42, ${ripple.opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(255, 42, 42, ${ripple.opacity})`;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const addRipple = (x, y) => {
      // Manage array size
      if (ripples.length > 30) {
         ripples.shift(); 
      }
      ripples.push({
        x,
        y,
        radius: 0,
        opacity: 0.8
      });
    };

    // Use Window event listeners so we don't interfere with standard DOM routing
    const handleMouseMove = (e) => {
      if (phase < 2) return; 
      const dx = e.clientX - lastMousePosition.x;
      const dy = e.clientY - lastMousePosition.y;
      // Only emit ripples if moved significantly to prevent performance clog
      if (Math.sqrt(dx * dx + dy * dy) > 25) {
         addRipple(e.clientX, e.clientY);
         lastMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (phase < 2) return;
      const touch = e.touches[0];
      const dx = touch.clientX - lastMousePosition.x;
      const dy = touch.clientY - lastMousePosition.y;
      if (Math.sqrt(dx * dx + dy * dy) > 25) {
         addRipple(touch.clientX, touch.clientY);
         lastMousePosition = { x: touch.clientX, y: touch.clientY };
      }
    };

    const handleClick = (e) => {
       if (phase < 2) return;
       // Burst multiple localized ripples on click!
       addRipple(e.clientX, e.clientY);
       setTimeout(() => addRipple(e.clientX, e.clientY), 100);
       setTimeout(() => addRipple(e.clientX, e.clientY), 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
       <canvas 
          ref={canvasRef} 
          className="w-full h-full opacity-60" 
       />
       {/* Retain the gradient layer to ensure readable content depth */}
       <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/80 via-[#020202]/30 to-[#020202]/90 z-10 pointer-events-none" />
    </div>
  );
}
