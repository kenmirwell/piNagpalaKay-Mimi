import useParallax from "../Helpers/useParallax";

export default function ParallaxQuote() {
  const bgRef = useParallax(0.3);
  return (
    <div className="relative overflow-hidden" style={{height:"60vh"}}>
      <div ref={bgRef} className="absolute" style={{inset:"-30%", background:"linear-gradient(135deg,#d28861 0%,#8a4a2a 50%,#2d1f14 100%)", willChange:"transform", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <p className="text-center px-14 max-w-4xl opacity-95" style={{fontFamily:"'Cormorant Garamond', serif", fontSize:"clamp(2rem,5vw,4rem)", fontStyle:"italic", color:"#fdf6ee", lineHeight:1.4}}>
          To love and be loved is to feel the sun from both sides.
        </p>
      </div>
    </div>
  );
}