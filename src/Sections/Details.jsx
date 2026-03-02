import Reveal from "../Subcomponents/Reveal";
import Ladies from "../assets/Ladies.png"
import Gentlemen from "../assets/Gentlemen.png"

export default function Details() {
  const topCards = [
    {
      icon: "📍",
      title: "Location",
      text: "CRC Events Place, Lingga",
    },
    {
      icon: "🕒",
      title: "Call Time",
      text: "The ceremony starts at 4:00 PM. We encourage you to arrive by 3:30 PM, as the main gate will close at 3:40 PM to prepare for the ceremony.",
    },
  ];

  const dresscode = {
    icon: "👗",
    title: "Dress Code",
    theme: "Semi-Formal — inspired by the sky's transition from day to night.",
    color: ["#ffbc99", "#d28861", "#fbc380", "#f9e2d1", "#e4bcc4", "#e88e5a"],
    ladies: {
      label: "Ladies",
      text: "Comfortable yet chic garden party dresses in sunset shades. Plain and flowy pieces are lovely. Floral prints and textured fabrics are highly encouraged.",
      src: Ladies
    },
    gents: {
      label: "Gentlemen",
      text: "Clean and elevated looks in light fabrics like linen or cotton. Button-down shirts (long or short sleeves) paired with light trousers are perfect.",
      src: Gentlemen
    },
    avoid: "Kindly avoid wearing white, coats, or blazers.",
    closing: "We can't wait to see you in your sunset best! 🌅",
  };

  const cardStyle = {
    background: "rgba(253,246,238,0.6)",
    backdropFilter: "blur(10px)",
  };

  return (
    <section
      id="details"
      className="py-24 px-6 md:px-14 relative overflow-hidden"
      style={{ background: "#ffbc99" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%,rgba(210,136,97,0.4) 0%,transparent 60%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal>
          <p className="text-xs tracking-widest uppercase text-amber-800 mb-3">
            What to Know
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="mb-14"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 300,
              color: "#2d1f14",
            }}
          >
            Useful Details
          </h2>
        </Reveal>

        {/* Top row — Location & Call Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {topCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div
                className="p-8 relative h-full transition-transform duration-300 hover:-translate-y-2"
                style={cardStyle}
              >
                <div
                  className="absolute top-0 left-0 w-10 h-0.5"
                  style={{ background: "#d28861" }}
                />
                <span className="text-3xl mb-5 block">{c.icon}</span>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    color: "#2d1f14",
                  }}
                >
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed text-amber-800">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom row — Dress Code full width */}
        <Reveal delay={0.2}>
          <div
            className="p-8 md:p-12 relative transition-transform duration-300 hover:-translate-y-2"
            style={cardStyle}
          >
            <div
              className="absolute top-0 left-0 w-10 h-0.5"
              style={{ background: "#d28861" }}
            />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2 pb-[20px] ">
              <div className="flex items-center gap-[20px]">
                <span className="text-3xl">{dresscode.icon}</span>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    color: "#2d1f14",
                  }}
                >
                  {dresscode.title}
                </h3>
              </div>
              <div className="flex gap-[5px] md:gap-[20px] md:pl-[20px]">
                {dresscode.color.map(i => (
                  <div style={{backgroundColor: i}} className={`h-[35px] md:h-[50px] min-w-[35px] md:w-[50px] rounded-full shadow-md`}></div>
                ))}
              </div>
            </div>

            <p
              className="text-sm italic text-amber-700 mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
            >
              {dresscode.theme}
            </p>

            {/* Two columns for ladies / gents */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {[dresscode.ladies, dresscode.gents].map((g) => (
                <div
                  key={g.label}
                  className="p-5 rounded-sm"
                  style={{
                    background: "rgba(210,136,97,0.1)",
                    borderLeft: "2px solid #d28861",
                  }}
                >
                  <div className={`px-[50px]`}>
                    <img className="" src={g.src} alt="" />
                  </div>
                  <p
                    className="text-xs tracking-widest uppercase text-amber-700 mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {g.label}
                  </p>
                  <p className="text-sm leading-relaxed text-amber-800">{g.text}</p>
                </div>
              ))}
            </div>

            {/* Avoid note */}
            <div
              className="flex items-start gap-3 p-4 rounded-sm mb-5"
              style={{ background: "rgba(210,136,97,0.08)", border: "1px dashed rgba(210,136,97,0.4)" }}
            >
              <span className="text-base mt-0.5">🚫</span>
              <p className="text-sm leading-relaxed text-amber-800">{dresscode.avoid}</p>
            </div>

            {/* Closing */}
            <p
              className="text-sm italic text-amber-700 text-center"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
            >
              {dresscode.closing}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}