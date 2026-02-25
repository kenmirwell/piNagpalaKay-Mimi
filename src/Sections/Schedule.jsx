import Reveal from "../Subcomponents/Reveal";

export default function Schedule() {
  const items = [
    { time: "4:00 PM", name: "Ceremony", desc: "We say “I do’ and begin forever." },
    { time: "5:30 PM", name: "Cocktail Hour", desc: "Sip, Mingle and celebrate with us." },
    { time: "6:30 PM", name: "Dinner", desc: "Good food. Full hearts. Joyful toasts" },
    { time: "8:30 PM", name: "Shower of Blessings", desc: "Prayers, love, and words over our marriage." },
  ];
  return (
    <section id="schedule" className="py-24 px-6 md:px-14" style={{background:"#2d1f14", position:"relative", overflow:"hidden"}}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{background:"radial-gradient(circle,rgba(210,136,97,0.15) 0%,transparent 70%)"}} />
      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal><p className="text-xs tracking-widest uppercase text-amber-600 mb-3">Wedding Day</p></Reveal>
        <Reveal delay={0.05}><h2 className="mb-16" style={{fontFamily:"'Cormorant Garamond', serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:300, color:"#fdf6ee"}}>Our Schedule</h2></Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
          <div className="absolute top-3 left-0 right-0 h-px hidden md:block" style={{background:"rgba(255,188,153,0.2)"}} />
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1}>
              <div>
                <div className="w-2.5 h-2.5 rounded-full mb-7 relative z-10" style={{background:"#d28861"}} />
                <span className="block mb-2" style={{fontFamily:"'Cormorant Garamond', serif", fontSize:"2rem", color:"#f5c380", fontWeight:300}}>{item.time}</span>
                <span className="block text-xs tracking-widest uppercase mb-3" style={{color:"#ffbc99"}}>{item.name}</span>
                <p className="text-sm leading-relaxed" style={{color:"rgba(253,246,238,0.5)"}}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}