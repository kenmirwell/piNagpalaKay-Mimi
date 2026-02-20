import { useState, useEffect, useRef } from "react";
import Reveal from "../Subcomponents/Reveal";

export default function Countdown() {
  const [time, setTime] = useState({ days:"000", hours:"00", minutes:"00", seconds:"00" });
  useEffect(() => {
    const tick = () => {
      const diff = new Date("2026-04-09T15:00:00") - new Date();
      if (diff <= 0) return;
      setTime({
        days:  String(Math.floor(diff/86400000)).padStart(3,"0"),
        hours: String(Math.floor(diff%86400000/3600000)).padStart(2,"0"),
        minutes: String(Math.floor(diff%3600000/60000)).padStart(2,"0"),
        seconds: String(Math.floor(diff%60000/1000)).padStart(2,"0"),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { val: time.days, label: "Days" },
    { val: time.hours, label: "Hours" },
    { val: time.minutes, label: "Minutes" },
    { val: time.seconds, label: "Seconds" },
  ];

  return (
    <section id="countdown" className="py-24 px-6 text-center" style={{background:"#fdf6ee"}}>
      <Reveal><p className="text-xs tracking-widest uppercase text-amber-600 mb-3">Counting Down To</p></Reveal>
      <Reveal delay={0.05}><h2 style={{fontFamily:"'Cormorant Garamond', serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:300, color:"#2d1f14", marginBottom:"3rem"}}>Our Wedding Day</h2></Reveal>
      <div className="flex justify-center gap-6 md:gap-14 flex-wrap">
        {units.map((u, i) => (
          <div key={u.label} className="flex flex-col items-center">
            <span style={{fontFamily:"'Cormorant Garamond', serif", fontSize:"clamp(3rem,6vw,5rem)", fontWeight:300, color:"#d28861", lineHeight:1}}>{u.val}</span>
            <span className="text-xs tracking-widest uppercase text-amber-700 mt-2">{u.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}