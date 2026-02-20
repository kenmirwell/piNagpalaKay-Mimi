export default function SunLayer() {
  return (
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full" fill="none">
      <circle cx="720" cy="200" r="70" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
      <circle cx="720" cy="200" r="55" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
      {[0,45,90,135,180,225,270,315].map((deg,i) => {
        const r = Math.PI * deg / 180;
        const x1 = 720 + Math.cos(r)*78, y1 = 200 + Math.sin(r)*78;
        const x2 = 720 + Math.cos(r)*95, y2 = 200 + Math.sin(r)*95;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>;
      })}
      <path d="M80 260 Q100 240 130 245 Q140 225 165 230 Q180 215 200 225 Q215 215 225 228 Q245 218 255 235 Q268 228 278 242 Q285 238 290 248 Q295 255 280 260 Z" stroke="rgba(255,255,255,0.45)" strokeWidth="1"/>
      <path d="M1150 220 Q1175 200 1210 207 Q1222 188 1252 195 Q1270 182 1292 194 Q1308 183 1320 198 Q1342 188 1355 207 Q1370 200 1380 215 Q1388 222 1370 228 Z" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <path d="M480 170 Q495 158 515 162 Q523 150 538 155 Q550 145 562 155 Q572 148 580 160 Q590 154 596 165 Q600 170 586 174 Z" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8"/>
      <path d="M870 190 Q888 176 910 180 Q918 167 937 172 Q950 161 963 172 Q975 164 984 177 Q995 170 1002 183 Q1007 190 990 194 Z" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
    </svg>
  );
}