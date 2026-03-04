import { useState, useEffect, useRef } from "react";
import KMlogo from "../assets/KMlogo.png"

export default function Nav({ scrolled }) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-14 py-6 transition-all duration-500 ${scrolled ? "bg-amber-950/80 backdrop-blur-md" : ""}`}>
      <div className="flex items-center gap-[10px]" style={{fontFamily:"'Great Vibes', cursive", fontSize:"2rem", color:"#fdf6ee", textShadow:"0 1px 3px rgba(0,0,0,0.3)"}}>
        {/* <img className="w-[100px]" src={KMlogo} alt="km logo" /> */}
        K 
          <span className="block opacity-70" style={{fontSize:"0.6em"}}>&</span>
         <span className="ml-[-5px]">M</span>
      </div>
      <ul className="hidden md:flex gap-10 list-none">
        {["story","schedule", "details", "gift"].map(s => (
          <li key={s}>
            <a href={`#${s}`} className="text-amber-50 no-underline tracking-widest uppercase text-xs opacity-90 hover:opacity-60 transition-opacity" style={{textShadow:"0 1px 3px rgba(0,0,0,0.3)"}}>
              {s === "story" ? "Our Story" : s === "gift" ? "Gift Guide" : s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}