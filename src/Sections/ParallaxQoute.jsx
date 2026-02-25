import useParallax from "../Helpers/useParallax";

export default function ParallaxQuote() {
  const bgRef = useParallax(0.3);

  return (
    <div className="relative overflow-hidden" style={{ height: "70vh" }}>
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute"
        style={{
          inset: "-30%",
          background:
            "linear-gradient(135deg, #d28861 0%, #8a4a2a 45%, #2d1f14 100%)",
          willChange: "transform",
        }}
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          opacity: 0.4,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(20,10,5,0.55) 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">

        {/* Top ornament */}
        <div className="flex items-center gap-4 mb-8">
          <div style={{ width: "40px", height: "1px", background: "rgba(245,230,200,0.4)" }} />
          <span style={{ color: "rgba(245,230,200,0.5)", fontSize: "0.55rem", letterSpacing: "0.35em" }}>✦</span>
          <div style={{ width: "40px", height: "1px", background: "rgba(245,230,200,0.4)" }} />
        </div>

        {/* Opening quote mark */}
        <div
          className="leading-none select-none mb-2"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(5rem, 10vw, 8rem)",
            color: "rgba(245,200,150,0.2)",
            lineHeight: 0.7,
          }}
        >
          "
        </div>

        {/* Verse text */}
        <p
          className="max-w-xl"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.6rem, 4vw, 3.2rem)",
            fontStyle: "italic",
            fontWeight: 300,
            color: "#fdf6ee",
            lineHeight: 1.55,
            letterSpacing: "0.01em",
          }}
        >
          He has made everything beautiful in its time.
        </p>

        {/* Divider */}
        <div
          className="my-6"
          style={{ width: "36px", height: "1px", background: "#d4a35a" }}
        />

        {/* Reference */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(245,220,180,0.7)",
            fontStyle: "normal",
          }}
        >
          Ecclesiastes 3:11
        </p>

        {/* Bottom ornament */}
        <div className="flex items-center gap-4 mt-8">
          <div style={{ width: "40px", height: "1px", background: "rgba(245,230,200,0.4)" }} />
          <span style={{ color: "rgba(245,230,200,0.5)", fontSize: "0.55rem", letterSpacing: "0.35em" }}>✦</span>
          <div style={{ width: "40px", height: "1px", background: "rgba(245,230,200,0.4)" }} />
        </div>
      </div>
    </div>
  );
}