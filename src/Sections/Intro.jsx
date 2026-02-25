import Reveal from "../Subcomponents/Reveal";
import Ornament from "../Subcomponents/Ornament";
import venue from "../assets/venue.png"

export default function Intro() {
  return (
    <section id="story" className="max-w-6xl mx-auto px-6 md:px-14 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
      {/* Photo */}
      <Reveal>
        <div className="relative">
          <div className="relative overflow-hidden border border-amber-200/40" style={{aspectRatio:"3/4"}}>
            <div className="absolute inset-4 border border-white/30 z-10 pointer-events-none" />
            <img src={venue} alt="Michelle & Ken" className="w-full h-full object-cover object-top" />
          </div>
          <div className="absolute -bottom-8 right-0 w-28 h-28 flex flex-col items-center justify-center" style={{background:"#f5c380"}}>
            <span style={{fontFamily:"'Cormorant Garamond', serif", fontSize:"2rem", fontWeight:600, color:"#2d1f14"}}>9</span>
            <span className="text-xs tracking-widest uppercase text-amber-800">April</span>
          </div>
        </div>
      </Reveal>

      {/* Text */}
      <div>
        <Reveal><Ornament /></Reveal>
        <Reveal delay={0.05}><p className="text-xs tracking-widest uppercase text-amber-600 mb-4">Our Story</p></Reveal>
        <Reveal delay={0.1}>
          <h2 style={{fontFamily:"'Cormorant Garamond', serif", fontSize:"clamp(2.2rem,4vw,3.2rem)", fontWeight:300, lineHeight:1.2, color:"#2d1f14", marginBottom:"1.5rem"}}>
            Join us as we begin our <em style={{fontStyle:"italic", color:"#d28861"}}>forever</em> together.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-sm leading-relaxed text-amber-800 mb-5 max-w-md">
            From a chance meeting to this beautiful moment — our journey has been woven with laughter, adventures, and a love that grows deeper with every passing season.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-sm leading-relaxed text-amber-800 mb-8 max-w-md">
            We are so grateful to share this milestone with the people we love most. Please join us for a day of celebration, joy, and memories that will last a lifetime.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <a href="#rsvp" className="inline-block px-10 py-4 border border-amber-600 text-amber-600 text-xs tracking-widest uppercase no-underline transition-all hover:bg-amber-600 hover:text-amber-50">
            RSVP Now
          </a>
        </Reveal>
      </div>
    </section>
  );
}