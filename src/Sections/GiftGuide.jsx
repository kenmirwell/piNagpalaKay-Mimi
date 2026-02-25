import Reveal from "../Subcomponents/Reveal";

export default function GiftGuide() {
  const crossed = ["Kalan", "Baso", "Plato", "Rice Cooker"];

  return (
    <section className="py-24 px-6 md:px-14 relative overflow-hidden">

      {/* Soft background wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(212,163,90,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto relative">

        {/* Section label */}
        <Reveal>
          <p className="text-xs tracking-widest uppercase text-amber-600 mb-2 text-center">For Our Loved Ones</p>
        </Reveal>

        {/* Heading */}
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
            Gift Guide
          </h2>
        </Reveal>

        {/* Thin amber divider */}
        <Reveal delay={0.08}>
          <div className="flex justify-center mb-10">
            <div style={{ width: "48px", height: "1px", background: "#d4a35a" }} />
          </div>
        </Reveal>

        {/* Struck-through "already have" list */}
        <Reveal delay={0.1}>
          <div className="mb-10">
            <p
              className="text-center text-sm text-amber-700 mb-5 italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem" }}
            >
              Just a heads-up — we already have…
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {crossed.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full text-sm"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.95rem",
                    color: "#a07850",
                    background: "rgba(212,163,90,0.08)",
                    border: "1px solid rgba(212,163,90,0.25)",
                    textDecoration: "line-through",
                    textDecorationColor: "#d4a35a",
                    textDecorationThickness: "1.5px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <p
              className="text-center mt-4 text-amber-600"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontStyle: "italic" }}
            >
              Kidding aside! 😄
            </p>
          </div>
        </Reveal>

        {/* Main cash gift card */}
        <Reveal delay={0.15}>
          <div
            className="relative rounded-2xl p-8 md:p-12 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(45,31,20,0.97) 0%, rgba(70,42,18,0.97) 100%)",
              boxShadow: "0 8px 48px rgba(45,31,20,0.18), inset 0 1px 0 rgba(212,163,90,0.2)",
            }}
          >
            {/* Corner ornaments */}
            <span
              className="absolute top-4 left-5 text-amber-600 select-none"
              style={{ fontSize: "1.1rem", opacity: 0.5 }}
            >✦</span>
            <span
              className="absolute top-4 right-5 text-amber-600 select-none"
              style={{ fontSize: "1.1rem", opacity: 0.5 }}
            >✦</span>
            <span
              className="absolute bottom-4 left-5 text-amber-600 select-none"
              style={{ fontSize: "1.1rem", opacity: 0.5 }}
            >✦</span>
            <span
              className="absolute bottom-4 right-5 text-amber-600 select-none"
              style={{ fontSize: "1.1rem", opacity: 0.5 }}
            >✦</span>

            {/* Icon */}
            <div className="flex justify-center mb-5">
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: "56px",
                  height: "56px",
                  background: "rgba(212,163,90,0.15)",
                  border: "1px solid rgba(212,163,90,0.3)",
                  fontSize: "1.5rem",
                }}
              >
                🤍
              </div>
            </div>

            <h3
              className="mb-4"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.4rem,3vw,2rem)",
                fontWeight: 300,
                color: "#f5e6c8",
                letterSpacing: "0.04em",
              }}
            >
              Cash Gifts
            </h3>

            <div style={{ width: "32px", height: "1px", background: "#d4a35a", margin: "0 auto 1.25rem" }} />

            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1rem,2vw,1.15rem)",
                fontStyle: "italic",
                fontWeight: 300,
                color: "rgba(245,230,200,0.8)",
                lineHeight: 1.8,
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              If you'd like to bless us, we would truly appreciate cash gifts as we start our life together and build a family of our own.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
}