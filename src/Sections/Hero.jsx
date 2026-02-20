import { useState, useEffect, useRef } from "react";
import useParallax from "../Helpers/useParallax";
import SunLayer from "../SvgScenes/SunLayer";
import CloudLayer from "../SvgScenes/CloudLayer";
import MountainLayer from "../SvgScenes/MountainLayer";
import TreeLayer from "../SvgScenes/TreeLayer";

export default function Hero() {
  const sunRef    = useRef(null);
  const cloudRef  = useRef(null);
  const mountRef  = useRef(null);
  const treeRef   = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (sunRef.current)   sunRef.current.style.transform   = `translateY(${y*0.20}px)`;
      if (cloudRef.current) cloudRef.current.style.transform  = `translateY(${y*0.30}px)`;
      if (mountRef.current) mountRef.current.style.transform  = `translateY(${y*0.45}px)`;
      if (treeRef.current)  treeRef.current.style.transform   = `translateY(${y*0.62}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const layerStyle = {
    position:"absolute", inset:0, width:"100%", height:"140%", top:"-20%",
    pointerEvents:"none", willChange:"transform"
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Sky */}
      <div className="absolute inset-0" style={{background:"linear-gradient(180deg,#d4735a 0%,#e8956d 15%,#f2aa7a 30%,#f8c28a 48%,#f5b87a 65%,#e09060 85%,#c47050 100%)"}} />
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse at 50% 30%,rgba(255,220,150,0.25) 0%,transparent 60%)", zIndex:5}} />

      <div ref={sunRef} style={{...layerStyle, zIndex:1}}><SunLayer /></div>
      <div ref={cloudRef} style={{...layerStyle, zIndex:2}}><CloudLayer /></div>
      <div ref={mountRef} style={{...layerStyle, zIndex:3}}><MountainLayer /></div>
      <div ref={treeRef} style={{...layerStyle, zIndex:4}}><TreeLayer /></div>

      {/* Content */}
      <div className="relative text-center text-amber-50 z-10">
        <p className="text-xs tracking-widest uppercase mb-5 opacity-90">April 9, 2026 · Philippines</p>
        <div style={{fontFamily:"'Great Vibes', cursive", fontSize:"clamp(4rem,10vw,8rem)", lineHeight:1, textShadow:"0 4px 30px rgba(45,31,20,0.3)"}}>
          Michelle
          <span className="block opacity-70" style={{fontSize:"0.4em", margin:"-10px 0"}}>&</span>
          Ken
        </div>
        <p className="mt-5 tracking-widest opacity-85" style={{fontFamily:"'Cormorant Garamond', serif", fontStyle:"italic", fontSize:"1.1rem"}}>
          Together Forever
        </p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-70">
        <div className="w-px bg-amber-50 animate-pulse" style={{height:50}} />
        <span className="text-amber-50 text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}