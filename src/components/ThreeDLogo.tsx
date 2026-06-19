import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import LucideIcon from './LucideIcon';

interface MousePosition {
  x: number;
  y: number;
}

export default function ThreeDLogo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate coordinates relative to container center
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Normalize to a range of -1 to 1
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      
      setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: 0, y: 0 });
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const container = containerRef.current;
    if (container) {
      window.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (container) {
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('mouseenter', handleMouseEnter);
      }
    };
  }, []);

  // Soft spring motion system for cinematic weightiness
  const tiltX = useSpring(useMotionValue(0), { stiffness: 40, damping: 15 });
  const tiltY = useSpring(useMotionValue(0), { stiffness: 40, damping: 15 });

  useEffect(() => {
    // Slower rotation on mouse moves for classy feel
    tiltX.set(mousePos.y * -35); // Max X tilt: 35deg
    tiltY.set(mousePos.x * 35);  // Max Y tilt: 35deg
  }, [mousePos, tiltX, tiltY]);

  // Infinite slow rotation offset to ensure the logo constant moves even if mouse is static
  const [rotationOffset, setRotationOffset] = useState(0);
  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      setRotationOffset((prev) => (prev + 0.3) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Combined rotation: continuous slow base rotation + spring-loaded mouse tilt
  const transformStyle = useTransform(
    [tiltX, tiltY],
    ([tx, ty]) => `rotateX(${tx}deg) rotateY(${ty + rotationOffset}deg)`
  );

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-[480px] aspect-square flex items-center justify-center perspective-1000 z-10 cursor-grab active:cursor-grabbing select-none"
    >
      {/* Absolute Hologram pedestal glow light source */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-10 bg-gradient-to-t from-[#D1008F]/25 to-transparent blur-xl rounded-full scale-y-50 pointer-events-none" />
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-20 h-4 bg-gradient-to-t from-[#F5D400]/20 to-transparent blur-md rounded-full scale-y-50 pointer-events-none" />

      {/* Main 3D Space Container */}
      <motion.div
        style={{ 
          transform: transformStyle,
          transformStyle: 'preserve-3d'
        }}
        className="w-80 h-80 relative flex items-center justify-center"
      >
        {/* Outer Tech Ring 1 (Yaw Axis) */}
        <div 
          className="absolute w-full h-full rounded-full border border-[#D1008F]/15 flex items-center justify-center p-3"
          style={{ transform: 'rotateX(75deg)', transformStyle: 'preserve-3d' }}
        >
          <div className="w-full h-full rounded-full border border-dashed border-[#F5D400]/20 animate-[spin_40s_linear_infinite]" />
          
          {/* Glowing node on outer ring */}
          <div 
            className="absolute w-3 h-3 rounded-full bg-[#FFA52F] shadow-[0_0_12px_#FFA52F] top-0 left-1/2 -translate-x-1/2"
            style={{ transform: 'rotateX(-75deg)' }}
          />
        </div>

        {/* Mid Ring 2 (Pitch Axis) */}
        <div 
          className="absolute w-[85%] h-[85%] rounded-full border border-white/[0.04] p-3 flex items-center justify-center"
          style={{ transform: 'rotateY(75deg)', transformStyle: 'preserve-3d' }}
        >
          <div className="w-full h-full rounded-full border-2 border-dotted border-[#F02AA6]/10 animate-[spin_30s_linear_infinite_reverse]" />
          
          {/* Glowing nodes on mid ring */}
          <div 
            className="absolute w-2 h-2 rounded-full bg-[#F02AA6] shadow-[0_0_10px_#F02AA6] top-1/2 left-0 -translate-y-1/2"
            style={{ transform: 'rotateY(-75deg)' }}
          />
          <div 
            className="absolute w-2 h-2 rounded-full bg-[#D1008F] shadow-[0_0_10px_#D1008F] top-1/2 right-0 translate-y-1/2"
            style={{ transform: 'rotateY(-75deg)' }}
          />
        </div>

        {/* Ring 3: Diagonal Orbit (Roll Axis) */}
        <div 
          className="absolute w-[70%] h-[70%] rounded-full border border-[#FFA52F]/20 p-2"
          style={{ transform: 'rotateX(45deg) rotateY(45deg)', transformStyle: 'preserve-3d' }}
        >
          <div className="w-full h-full rounded-full border border-dashed border-white/[0.08] animate-[spin_20s_linear_infinite]" />
        </div>

        {/* Core Double-Sided Glass Hologram Plates containing the Siltawi Logo */}
        {/* Plate A - Front */}
        <div 
          className="absolute w-44 h-44 rounded-2xl glass-panel-heavy border border-white/[0.12] shimmer-border p-5 flex flex-col items-center justify-between shadow-2xl backface-hidden"
          style={{ transform: 'translateZ(12px)', transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D1008F]/10 via-transparent to-[#FFA52F]/10 opacity-60 rounded-2xl pointer-events-none" />
          
          {/* Floating brand chip inside the card */}
          <div className="flex items-center justify-between w-full pb-2 border-b border-white/[0.06] text-[8px] tracking-widest font-mono text-slate-400">
            <span>SLTW3D // CORE</span>
            <span className="text-[#FF7BC1] animate-pulse">● LIVE</span>
          </div>

          {/* Center Logo Canvas */}
          <div className="relative flex-1 flex items-center justify-center p-4">
            <div className="absolute w-16 h-16 bg-[#D1008F]/10 rounded-full blur-md" />
            
            <img
              src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg"
              alt="Siltawi Logo"
              className="w-14 h-14 object-contain brightness-125 contrast-125 relative z-10 filter drop-shadow-[0_0_10px_rgba(209,0,143,0.6)]"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex items-center gap-1.5 text-[8px] font-black tracking-widest text-[#FFA52F] uppercase">
            <LucideIcon name="ShieldCheck" className="w-3 h-3 text-[#F5D400]" />
            SILTAWI BRAND
          </div>
        </div>

        {/* Plate B - Back (rotated 180deg to form a solid double sided 3D coin/panel) */}
        <div 
          className="absolute w-44 h-44 rounded-2xl glass-panel-heavy border border-white/[0.12] shimmer-border p-5 flex flex-col items-center justify-between shadow-2xl backface-hidden"
          style={{ transform: 'rotateY(180deg) translateZ(12px)', transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-[#FFA52F]/10 via-transparent to-[#D1008F]/10 opacity-60 rounded-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between w-full pb-2 border-b border-white/[0.06] text-[8px] tracking-widest font-mono text-slate-400">
            <span>SLTW3D // STATS</span>
            <span className="text-[#F5D400]">+480%</span>
          </div>

          {/* Simple digital counter visualization on back side */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <LucideIcon name="TrendingUp" className="w-8 h-8 text-[#FF7BC1] mb-1" />
            <span className="text-sm font-black font-display text-white">ROI ENGAGED</span>
            <span className="text-[9px] font-bold text-slate-400">ADDIS ABABA</span>
          </div>

          <div className="text-[8px] font-black tracking-widest text-white/50 uppercase">
            MARKETING CORE
          </div>
        </div>

        {/* Core Glass Connector Rods (Side supports of the 3D pane sandwich) */}
        <div 
          className="absolute w-12 h-44 border-x border-dashed border-white/20"
          style={{ transform: 'rotateY(90deg) translateZ(22px)' }}
        />
        <div 
          className="absolute w-12 h-44 border-x border-dashed border-white/20"
          style={{ transform: 'rotateY(90deg) translateZ(-22px)' }}
        />

        {/* Vertical Holographic scanned lines running across the Z-axis */}
        <div 
          className="absolute w-[2px] h-60 bg-gradient-to-t from-transparent via-[#D1008F]/60 to-transparent animate-pulse"
          style={{ transform: 'translateZ(50px)' }}
        />
        <div 
          className="absolute w-[2px] h-60 bg-gradient-to-t from-transparent via-[#FFA52F]/40 to-transparent animate-pulse"
          style={{ transform: 'translateZ(-50px)' }}
        />
      </motion.div>

      {/* Floating Sparkles absolute layout context */}
      <div className="absolute inset-x-0 bottom-4 text-center">
        <p className="text-[10px] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#D1008F] to-[#FFA52F] font-display flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F5D400] animate-ping" />
          Drag or move mouse to swivel 3D Core
        </p>
      </div>
    </div>
  );
}
