import Reveal from "../Subcomponents/Reveal";

export default function MapGuide() {
  return (
    <section
      id="map"
      className="scroll-mt-24 py-24 px-6 md:px-14 relative overflow-hidden"
      style={{ background: "#ffbc99" }}
    >

      {/* Radial gradient overlay — matches Details section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 50%,rgba(210,136,97,0.4) 0%,transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">

        {/* Section label + heading */}
        <Reveal>
          <p className="text-xs tracking-widest uppercase text-amber-800 mb-2 text-center">Find Your Way</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 300,
              color: "#2d1f14",
            }}
          >
            Map Guide
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex justify-center mb-12">
            <div style={{ width: "48px", height: "1px", background: "#d4a35a" }} />
          </div>
        </Reveal>

        {/* Two-column layout: map left, description right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left — Map */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: "4/3" }}>
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1JnSDtFPQQzRrZwfyzT84V_u-dasC0B0&ehbc=2E312F"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Map Guide"
              />
            </div>
          </Reveal>

          {/* Right — Description */}
          <Reveal delay={0.15}>
            <div
              className="p-8 relative"
              style={{
                background: "rgba(253,246,238,0.6)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="absolute top-0 left-0 w-10 h-0.5"
                style={{ background: "#d28861" }}
              />

              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.4rem,3vw,1.8rem)",
                  fontWeight: 300,
                  color: "#2d1f14",
                }}
              >
                Getting There
              </h3>

              <p
                className="mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem",
                  color: "#2d1f14",
                  lineHeight: 1.8,
                }}
              >
                We've pinned all the key locations on this map to help you navigate the day with ease — from the ceremony venue to the reception and nearby accommodations.
              </p>

              <p
                className="mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem",
                  color: "#2d1f14",
                  lineHeight: 1.8,
                }}
              >
                Tap or click on each pin for directions, parking info, and helpful notes. We want to make sure you arrive stress-free and ready to celebrate!
              </p>

              <div
                className="px-4 py-3 rounded-sm"
                style={{
                  background: "rgba(210,136,97,0.1)",
                  borderLeft: "2px solid #d28861",
                }}
              >
                <p
                  className="italic text-sm text-amber-800"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    margin: 0,
                  }}
                >
                  Tip: Open the map in Google Maps for turn-by-turn navigation.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
