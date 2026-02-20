import { useState, useEffect, useRef } from "react";
import LandscapeDivider from "./SvgScenes/LandscapeDivider";
import Nav from "./Sections/Nav";
import Hero from "./Sections/Hero";
import Intro from "./Sections/Intro";
import ParallaxQuote from "./Sections/ParallaxQoute";
import Countdown from "./Sections/CountDown";
import Schedule from "./Sections/Schedule";
import Gallery from "./Sections/Gallery";
import Details from "./Sections/Details";
import Footer from "./Sections/Footer";

// ── QR Code effect (runs after DOM ready) ────────────────────
function QREffect() {
  useEffect(() => {
    const el = document.getElementById("qrcode-react");
    if (!el || el.children.length > 0) return;
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";
    script.onload = () => {
      if (window.QRCode && el && el.children.length === 0) {
        new window.QRCode(el, {
          text: window.location.href.split("#")[0] + "#rsvp",
          width: 140, height: 140,
          colorDark: "#2d1f14",
          colorLight: "#fdf6ee",
          correctLevel: window.QRCode.CorrectLevel.M,
        });
      }
    };
    document.head.appendChild(script);
  }, []);
  return null;
}

// ── Sunlight effect ───────────────────────────────────────────
function Sunlight() {
  const rays = [
    {left:"8%",   width:"10px",  height:"35vh", delay:"0s",   duration:"4s",  opacity:0.18, angle:"-12deg"},
    {left:"18%",  width:"1px",  height:"50vh", delay:"0.8s", duration:"5s",  opacity:0.12, angle:"-8deg"},
    {left:"28%",  width:"3px",  height:"28vh", delay:"1.5s", duration:"6s",  opacity:0.15, angle:"-5deg"},
    {left:"42%",  width:"1px",  height:"60vh", delay:"0.3s", duration:"4.5s",opacity:0.10, angle:"0deg"},
    {left:"50%",  width:"4px",  height:"45vh", delay:"2s",   duration:"7s",  opacity:0.20, angle:"3deg"},
    {left:"58%",  width:"1px",  height:"38vh", delay:"1s",   duration:"5.5s",opacity:0.12, angle:"6deg"},
    {left:"68%",  width:"2px",  height:"55vh", delay:"0.5s", duration:"4s",  opacity:0.16, angle:"9deg"},
    {left:"78%",  width:"1px",  height:"30vh", delay:"1.8s", duration:"6.5s",opacity:0.10, angle:"12deg"},
    {left:"88%",  width:"3px",  height:"42vh", delay:"0.2s", duration:"5s",  opacity:0.18, angle:"15deg"},
  ];

  // Floating dust motes
  const motes = [
    {left:"15%", top:"20%", size:18, delay:"0s",   duration:"8s"},
    {left:"32%", top:"40%", size:10, delay:"1.2s", duration:"11s"},
    {left:"48%", top:"15%", size:15, delay:"3s",   duration:"9s"},
    {left:"63%", top:"55%", size:8, delay:"0.5s", duration:"13s"},
    {left:"77%", top:"30%", size:3, delay:"2s",   duration:"7s"},
    {left:"90%", top:"45%", size:2, delay:"4s",   duration:"10s"},
    {left:"22%", top:"65%", size:13, delay:"1.5s", duration:"12s"},
    {left:"55%", top:"70%", size:2, delay:"0.8s", duration:"8s"},
    {left:"70%", top:"10%", size:30, delay:"2.5s", duration:"14s"},
    {left:"38%", top:"80%", size:2, delay:"3.5s", duration:"9s"},
    {left:"85%", top:"75%", size:3, delay:"1s",   duration:"11s"},
    {left:"5%",  top:"50%", size:20, delay:"4.5s", duration:"10s"},
  ];

  return (
    <>
      <style>{`
        @keyframes rayPulse {
          0%,100% { opacity: 0; transform-origin: top center; transform: scaleY(0.6); }
          50%      { opacity: 0.5; transform-origin: top center; transform: scaleY(1); }
        }
        @keyframes moteDrift {
          0%   { transform: translate(0, 0) scale(1);   opacity: 0; }
          15%  { opacity: 1; }
          50%  { transform: translate(1px, -100px) scale(1.3); }
          85%  { opacity: 1; }
          100% { transform: translate(-8px, -35px) scale(0.7); opacity: 0; }
        }
        .sun-ray {
          position: fixed;
          top: 0;
          background: linear-gradient(to bottom, rgba(255,220,140,0.9) 0%, rgba(255,200,100,0.4) 40%, rgba(255,180,80,0) 100%);
          pointer-events: none;
          z-index: 998;
          transform-origin: top center;
          animation: rayPulse ease-in-out infinite;
          border-radius: 0 0 50% 50%;
        }
        .sun-mote {
          position: fixed;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,230,150,0.9) 0%, rgba(255,210,100,0.4) 60%, transparent 100%);
          pointer-events: none;
          z-index: 997;
          animation: moteDrift ease-in-out infinite;
        }
      `}</style>

      {rays.map((r, i) => (
        <div
          key={i}
          className="sun-ray"
          style={{
            left: r.left,
            width: r.width,
            height: r.height,
            opacity: 0,
            transform: `rotate(${r.angle})`,
            animationDelay: r.delay,
            animationDuration: r.duration,
          }}
        />
      ))}

      {motes.map((m, i) => (
        <div
          key={i}
          className="sun-mote"
          style={{
            left: m.left,
            top: m.top,
            width: m.size,
            height: m.size,
            opacity: 0,
            animationDelay: m.delay,
            animationDuration: m.duration,
          }}
        />
      ))}
    </>
  );
}

// ── App ───────────────────────────────────────────────────────
export default function WeddingApp() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Sunlight />
      <Nav scrolled={scrolled} />
      <Hero />
      <Intro />
      <LandscapeDivider />
      <ParallaxQuote />
      <Countdown />
      <Schedule />
      <Gallery />
      <Details />
      <Footer />
      <QREffect />
    </>
  );
}