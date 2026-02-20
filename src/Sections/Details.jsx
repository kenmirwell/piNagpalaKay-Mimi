import Reveal from "../Subcomponents/Reveal";

export default function Details() {
  const cards = [
    { icon: "📍", title: "Location", text: "The venue details will be shared with confirmed guests. Please RSVP to receive the full address and directions." },
    { icon: "🏨", title: "Accommodation", text: "We've arranged accommodation options at special rates for our guests. Details will be shared upon RSVP confirmation." },
    { icon: "👗", title: "Dress Code", text: "Formal attire. Ladies: elegant gowns or cocktail dresses. Gentlemen: suit and tie. Kindly avoid white and ivory." },
  ];
  return (
    <section id="details" className="py-24 px-6 md:px-14 relative overflow-hidden" style={{background:"#ffbc99"}}>
      <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse at 80% 50%,rgba(210,136,97,0.4) 0%,transparent 60%)"}} />
      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal><p className="text-xs tracking-widest uppercase text-amber-800 mb-3">What to Know</p></Reveal>
        <Reveal delay={0.05}><h2 className="mb-14" style={{fontFamily:"'Cormorant Garamond', serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:300, color:"#2d1f14"}}>Useful Details</h2></Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="p-10 relative transition-transform duration-300 hover:-translate-y-2" style={{background:"rgba(253,246,238,0.6)", backdropFilter:"blur(10px)"}}>
                <div className="absolute top-0 left-0 w-10 h-0.5" style={{background:"#d28861"}} />
                <span className="text-3xl mb-5 block">{c.icon}</span>
                <h3 className="mb-4" style={{fontFamily:"'Cormorant Garamond', serif", fontSize:"1.5rem", color:"#2d1f14"}}>{c.title}</h3>
                <p className="text-sm leading-relaxed text-amber-800">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}