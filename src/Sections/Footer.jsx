import FooterLandscape from "../SvgScenes/FooterLandscape";

export default function Footer() {
  const links = ["story","schedule","details","rsvp"];
  return (
    <>
      <FooterLandscape />
      <footer className="text-center px-6 py-16 relative" style={{background:"#2d1f14"}}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-14" style={{background:"#d28861"}} />
        <div className="pt-6" style={{fontFamily:"'Great Vibes', cursive", fontSize:"4rem", color:"#f5c380"}}>Michelle & Ken</div>
        <p className="text-xs tracking-widest uppercase mt-2 mb-8" style={{color:"rgba(253,246,238,0.4)"}}>Forever begins · April 9, 2026</p>
        <ul className="flex justify-center gap-10 list-none mb-8 flex-wrap">
          {links.map(l => (
            <li key={l}><a href={`#${l}`} className="text-xs tracking-widest uppercase no-underline transition-colors" style={{color:"rgba(253,246,238,0.5)"}}>{l === "story" ? "Our Story" : l.charAt(0).toUpperCase()+l.slice(1)}</a></li>
          ))}
        </ul>
        <p className="text-xs" style={{color:"rgba(253,246,238,0.2)"}}>Made with love for the most beautiful day of our lives.</p>
      </footer>
    </>
  );
}