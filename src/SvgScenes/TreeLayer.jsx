export default function TreeLayer() {
  return (
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full" fill="none">
      <path d="M0 820 Q200 720 400 760 Q600 700 800 750 Q1000 700 1200 740 Q1350 710 1440 730 L1440 900 L0 900 Z" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" fill="rgba(180,110,70,0.25)"/>
      {/* Left pines */}
      <line x1="55" y1="820" x2="55" y2="710" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <polygon points="55,710 35,775 75,775" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" fill="none"/>
      <polygon points="55,730 30,790 80,790" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none"/>
      <polygon points="55,752 25,810 85,810" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" fill="none"/>
      <line x1="110" y1="820" x2="110" y2="680" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>
      <polygon points="110,680 85,760 135,760" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none"/>
      <polygon points="110,700 80,775 140,775" stroke="rgba(255,255,255,0.45)" strokeWidth="1" fill="none"/>
      <polygon points="110,725 75,800 145,800" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none"/>
      {/* Left oak */}
      <line x1="240" y1="820" x2="240" y2="730" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5"/>
      <ellipse cx="240" cy="710" rx="40" ry="32" stroke="rgba(255,255,255,0.45)" strokeWidth="1" fill="none"/>
      <ellipse cx="218" cy="722" rx="22" ry="18" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none"/>
      <ellipse cx="262" cy="718" rx="20" ry="16" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none"/>
      {/* Right pines */}
      <line x1="1330" y1="820" x2="1330" y2="690" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>
      <polygon points="1330,690 1305,765 1355,765" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none"/>
      <polygon points="1330,712 1300,780 1360,780" stroke="rgba(255,255,255,0.45)" strokeWidth="1" fill="none"/>
      <polygon points="1330,735 1295,800 1365,800" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none"/>
      <line x1="1395" y1="820" x2="1395" y2="720" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <polygon points="1395,720 1372,785 1418,785" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" fill="none"/>
      <polygon points="1395,742 1368,800 1422,800" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none"/>
      {/* Right oak */}
      <line x1="1200" y1="820" x2="1200" y2="730" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5"/>
      <ellipse cx="1200" cy="710" rx="42" ry="34" stroke="rgba(255,255,255,0.45)" strokeWidth="1" fill="none"/>
      <ellipse cx="1178" cy="720" rx="24" ry="19" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none"/>
      <ellipse cx="1222" cy="716" rx="22" ry="17" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none"/>
    </svg>
  );
}