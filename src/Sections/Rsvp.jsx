import { useState, useEffect, useRef } from "react";
import useParallax from "../Helpers/useParallax";

export default function RSVP() {
  const bgRef = useParallax(0.25);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="rsvp" className="relative overflow-hidden flex items-center justify-center" style={{minHeight:"80vh"}}>
      <div ref={bgRef} className="absolute" style={{inset:"-20%", background:"linear-gradient(160deg,#f5c380 0%,#d28861 50%,#8a4a2a 100%)", willChange:"transform"}} />
      <div className="relative z-10 text-center px-6 py-20 w-full max-w-5xl">
        <p className="text-xs tracking-widest uppercase mb-4" style={{color:"rgba(253,246,238,0.7)"}}>Kindly Reply By</p>
        <h2 className="mb-5" style={{fontFamily:"'Cormorant Garamond', serif", fontSize:"clamp(2.5rem,5vw,4rem)", fontWeight:300, color:"#fdf6ee"}}>Will you join us?</h2>
        <p className="mb-8 text-sm leading-relaxed max-w-lg mx-auto" style={{color:"rgba(253,246,238,0.8)"}}>
          Please let us know if you'll be celebrating with us by March 1st, 2026.
        </p>

        {!submitted ? (
          <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
            {/* Form */}
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <div className="grid grid-cols-2 gap-4">
                <input className="px-4 py-4 text-xs tracking-wide outline-none w-full" placeholder="First Name" style={{background:"rgba(253,246,238,0.15)", border:"1px solid rgba(253,246,238,0.3)", color:"#fdf6ee"}} />
                <input className="px-4 py-4 text-xs tracking-wide outline-none w-full" placeholder="Last Name" style={{background:"rgba(253,246,238,0.15)", border:"1px solid rgba(253,246,238,0.3)", color:"#fdf6ee"}} />
              </div>
              <input type="email" className="px-4 py-4 text-xs tracking-wide outline-none w-full" placeholder="Email Address" style={{background:"rgba(253,246,238,0.15)", border:"1px solid rgba(253,246,238,0.3)", color:"#fdf6ee"}} />
              <select className="px-4 py-4 text-xs tracking-wide outline-none w-full appearance-none" style={{background:"rgba(253,246,238,0.15)", border:"1px solid rgba(253,246,238,0.3)", color:"#fdf6ee"}}>
                <option value="">Attending?</option>
                <option>Joyfully Accept</option>
                <option>Accept with a Guest</option>
                <option>Regretfully Decline</option>
              </select>
              <input className="px-4 py-4 text-xs tracking-wide outline-none w-full" placeholder="Any dietary requirements or notes?" style={{background:"rgba(253,246,238,0.15)", border:"1px solid rgba(253,246,238,0.3)", color:"#fdf6ee"}} />
              <button onClick={() => setSubmitted(true)} className="py-5 text-xs tracking-widest uppercase font-medium transition-all cursor-pointer" style={{background:"#fdf6ee", color:"#d28861", border:"none"}}>
                Send RSVP
              </button>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-sm shadow-2xl" style={{background:"rgba(253,246,238,0.95)"}}>
                <div style={{width:140,height:140,background:"#fdf6ee",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:8}}>
                  {/* QR placeholder - real QR needs DOM so rendered via effect below */}
                  <div id="qrcode-react" />
                </div>
              </div>
              <p className="text-xs tracking-widest uppercase text-center leading-loose" style={{color:"rgba(253,246,238,0.65)"}}>Scan to RSVP<br/>on your phone</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-px" style={{background:"rgba(253,246,238,0.25)"}} />
                <div className="w-1.5 h-1.5 rotate-45" style={{background:"#ffbc99"}} />
                <div className="w-8 h-px" style={{background:"rgba(253,246,238,0.25)"}} />
              </div>
            </div>
          </div>
        ) : (
          <p style={{fontFamily:"'Cormorant Garamond', serif", fontSize:"1.5rem", fontStyle:"italic", color:"#fdf6ee"}}>
            Thank you! We can't wait to celebrate with you. 🤍
          </p>
        )}
      </div>
    </section>
  );
}