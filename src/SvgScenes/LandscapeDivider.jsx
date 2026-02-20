export default function LandscapeDivider() {
  return (
    <div className="w-full overflow-hidden bg-amber-50 pt-4">
      <svg viewBox="0 0 1440 220" preserveAspectRatio="none" className="block w-full h-40" fill="none">
        <path d="M0 180 Q180 80 360 140 Q540 200 720 100 Q900 20 1080 120 Q1260 200 1440 130 L1440 220 L0 220 Z" stroke="#d28861" strokeWidth="1.2" fill="rgba(255,188,153,0.12)"/>
        <path d="M0 200 Q200 130 400 165 Q600 195 800 145 Q1000 90 1200 155 Q1350 195 1440 170 L1440 220 L0 220 Z" stroke="#d28861" strokeWidth="0.8" fill="rgba(245,195,128,0.1)"/>
        {/* Left pines */}
        <line x1="80" y1="185" x2="80" y2="118" stroke="#d28861" strokeWidth="1.2"/>
        <polygon points="80,118 60,155 100,155" stroke="#d28861" strokeWidth="1" fill="none"/>
        <polygon points="80,135 58,168 102,168" stroke="#d28861" strokeWidth="1" fill="none"/>
        <polygon points="80,152 55,182 105,182" stroke="#d28861" strokeWidth="0.8" fill="none"/>
        <line x1="46" y1="188" x2="46" y2="138" stroke="#d28861" strokeWidth="0.9"/>
        <polygon points="46,138 30,168 62,168" stroke="#d28861" strokeWidth="0.7" fill="none"/>
        <polygon points="46,155 28,180 64,180" stroke="#d28861" strokeWidth="0.7" fill="none"/>
        {/* Left oak */}
        <line x1="190" y1="192" x2="190" y2="155" stroke="#d28861" strokeWidth="1.3"/>
        <ellipse cx="190" cy="140" rx="30" ry="24" stroke="#d28861" strokeWidth="1" fill="none"/>
        <ellipse cx="173" cy="150" rx="16" ry="13" stroke="#d28861" strokeWidth="0.7" fill="none"/>
        {/* Right pines */}
        <line x1="1360" y1="185" x2="1360" y2="118" stroke="#d28861" strokeWidth="1.2"/>
        <polygon points="1360,118 1340,155 1380,155" stroke="#d28861" strokeWidth="1" fill="none"/>
        <polygon points="1360,135 1338,168 1382,168" stroke="#d28861" strokeWidth="1" fill="none"/>
        <polygon points="1360,152 1335,182 1385,182" stroke="#d28861" strokeWidth="0.8" fill="none"/>
        <line x1="1395" y1="188" x2="1395" y2="130" stroke="#d28861" strokeWidth="1"/>
        <polygon points="1395,130 1376,162 1414,162" stroke="#d28861" strokeWidth="0.8" fill="none"/>
        <polygon points="1395,148 1374,175 1416,175" stroke="#d28861" strokeWidth="0.8" fill="none"/>
        {/* Right oak */}
        <line x1="1250" y1="192" x2="1250" y2="152" stroke="#d28861" strokeWidth="1.3"/>
        <ellipse cx="1250" cy="136" rx="32" ry="25" stroke="#d28861" strokeWidth="1" fill="none"/>
        <ellipse cx="1268" cy="143" rx="16" ry="12" stroke="#d28861" strokeWidth="0.7" fill="none"/>
        {/* Mid trees */}
        <line x1="680" y1="188" x2="680" y2="128" stroke="#d28861" strokeWidth="1"/>
        <polygon points="680,128 662,162 698,162" stroke="#d28861" strokeWidth="0.8" fill="none"/>
        <polygon points="680,146 659,176 701,176" stroke="#d28861" strokeWidth="0.8" fill="none"/>
        <polygon points="680,164 657,188 703,188" stroke="#d28861" strokeWidth="0.7" fill="none"/>
        {/* Birds */}
        <path d="M320 60 Q325 55 330 60" stroke="#d28861" strokeWidth="1" fill="none"/>
        <path d="M335 52 Q341 47 347 52" stroke="#d28861" strokeWidth="1" fill="none"/>
        <path d="M950 55 Q956 49 962 55" stroke="#d28861" strokeWidth="1" fill="none"/>
        <path d="M970 44 Q977 38 984 44" stroke="#d28861" strokeWidth="0.9" fill="none"/>
        {/* Mini sun */}
        <circle cx="1380" cy="35" r="18" stroke="#d28861" strokeWidth="1" fill="none"/>
        <circle cx="1380" cy="35" r="12" stroke="#d28861" strokeWidth="0.6" fill="none"/>
        {[0,45,90,135,180,225,270,315].map((deg,i) => {
          const r2 = Math.PI*deg/180;
          const x1=1380+Math.cos(r2)*22, y1=35+Math.sin(r2)*22;
          const x2=1380+Math.cos(r2)*27, y2=35+Math.sin(r2)*27;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#d28861" strokeWidth="0.8"/>;
        })}
      </svg>
    </div>
  );
}
