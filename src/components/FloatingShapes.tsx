import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export default function FloatingShapes() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const smoothX = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });
  const smoothY = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });

  useEffect(() => {
    smoothX.set(mousePos.x);
    smoothY.set(mousePos.y);
  }, [mousePos, smoothX, smoothY]);

  // Transform layers for parallax depth
  const transform1X = useTransform(smoothX, (v) => v * 0.4);
  const transform1Y = useTransform(smoothY, (v) => v * 0.4);

  const transform2X = useTransform(smoothX, (v) => v * -0.6);
  const transform2Y = useTransform(smoothY, (v) => v * -0.6);

  const transform3X = useTransform(smoothX, (v) => v * 0.8);
  const transform3Y = useTransform(smoothY, (v) => v * 0.8);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background ambient lighting mesh */}
      <div className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] rounded-full glow-glow-magenta" />
      <div className="absolute top-[40%] right-[5%] w-[40vw] h-[40vw] rounded-full glow-glow-orange" />
      <div className="absolute bottom-[10%] left-[20%] w-[35vw] h-[35vw] rounded-full glow-glow-magenta opacity-40" />

      {/* Layer 1: Slower Floating Shapes */}
      <motion.div
        style={{ x: transform1X, y: transform1Y }}
        className="absolute inset-0 z-0"
      >
        {/* Large abstract gradient torus wireframe or circle */}
        <div className="absolute top-[12%] right-[10%] w-72 h-72 rounded-full border-2 border-white/[0.04] p-3 animate-float-3d">
          <div className="w-full h-full rounded-full border border-dashed border-[#D1008F]/25 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#D1008F]/10 to-transparent blur-md" />
          </div>
        </div>

        {/* Diagonal floating acrylic bar */}
        <div
          className="absolute bottom-[20%] left-[8%] w-56 h-12 rounded-full glass-panel opacity-45 rotate-[32deg] animate-float-delayed flex items-center justify-between px-4 shimmer-border"
          style={{ transformStyle: 'preserve-3d', transform: 'rotateX(30deg) rotateY(15deg)' }}
        >
          <div className="w-3 h-3 rounded-full bg-[#F5D400]" />
          <div className="w-16 h-1 bg-[#D1008F]/30 rounded" />
          <div className="w-2 h-2 rounded-full bg-[#F02AA6]" />
        </div>
      </motion.div>

      {/* Layer 2: Medium Depth Shapes */}
      <motion.div
        style={{ x: transform2X, y: transform2Y }}
        className="absolute inset-0 z-0"
      >
        {/* Floating Glowing Glass Triangle/Pyramid Silhouette inspired by logo loops */}
        <svg
          className="absolute top-[45%] left-[12%] w-48 h-48 animate-float-delayed drop-shadow-[0_0_25px_rgba(240,42,166,0.15)] opacity-40"
          viewBox="0 0 100 100"
          fill="none"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D1008F" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#7A0058" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FFA52F" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M 50,10 L 90,85 L 10,85 Z"
            fill="url(#grad1)"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.5"
          />
        </svg>

        {/* Transparent glassy circle ring with logo color gradient */}
        <div
          className="absolute top-[28%] left-[45%] w-60 h-60 rounded-full border border-white/[0.08] shimmer-border animate-float-3d flex items-center justify-center p-8 opacity-70"
          style={{ transformStyle: 'preserve-3d', transform: 'rotateY(25deg) rotateX(15deg)' }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#D1008F]/2 y-10% to-[#FFA52F]/1 blur-[1px] border border-[#F02AA6]/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-slate-900 border border-white/[0.12] shadow-inner" />
          </div>
        </div>
      </motion.div>

      {/* Layer 3: Dynamic Foreground glass crystals */}
      <motion.div
        style={{ x: transform3X, y: transform3Y }}
        className="absolute inset-0 z-10"
      >
        {/* Small floating prism diamond */}
        <div
          className="absolute bottom-[15%] right-[15%] w-24 h-24 glass-panel shimmer-border rounded-2xl rotate-[15deg] animate-float-3d flex items-center justify-center overflow-hidden"
          style={{ transformStyle: 'preserve-3d', transform: 'rotateX(35deg) rotateY(-20deg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D1008F]/30 via-transparent to-[#FFA52F]/20 opacity-40 mix-blend-overlay" />
          <div className="w-4 h-4 rounded-full bg-[#F5D400] animate-pulse" />
        </div>

        {/* Abstract mini curved loop representing the siltawi logo connections */}
        <div className="absolute top-[65%] left-[40%] w-32 h-32 animate-float-delayed opacity-30">
          <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none">
            <path
              d="M30 50 C30 30, 70 30, 70 50 C70 70, 30 70, 30 50 Z"
              stroke="url(#sub-grad)"
              strokeWidth="4"
              strokeLinecap="round"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="sub-grad" x1="0%" y1="0%" x2="100%" y2="150%">
                <stop offset="0%" stopColor="#D1008F" />
                <stop offset="50%" stopColor="#F02AA6" />
                <stop offset="100%" stopColor="#FFA52F" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
