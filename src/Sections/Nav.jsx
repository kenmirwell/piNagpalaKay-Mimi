import { useState, useEffect, useRef } from "react";

export default function Nav({ scrolled }) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-14 py-6 transition-all duration-500 ${scrolled ? "bg-amber-950/80 backdrop-blur-md" : ""}`}>
      <div style={{fontFamily:"'Great Vibes', cursive", fontSize:"2rem", color:"#fdf6ee", textShadow:"0 1px 3px rgba(0,0,0,0.3)"}}>
        K&M
      </div>
      <ul className="hidden md:flex gap-10 list-none">
        {["story","schedule","details"].map(s => (
          <li key={s}>
            <a href={`#${s}`} className="text-amber-50 no-underline tracking-widest uppercase text-xs opacity-90 hover:opacity-60 transition-opacity" style={{textShadow:"0 1px 3px rgba(0,0,0,0.3)"}}>
              {s === "story" ? "Our Story" : s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}