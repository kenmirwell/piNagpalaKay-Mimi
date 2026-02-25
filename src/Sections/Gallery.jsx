import Reveal from "../Subcomponents/Reveal";
import familyPic from "../assets/family.png"
import firstPhoto from "../assets/first_photo.jpg"
import gfbfFinally from "../assets/rides.png"
import weddingPlanning from "../assets/planning.png"
import proposal from "../assets/proposal.jpg"


export default function Gallery() {
  const photos = [
    {
      src: firstPhoto,
      label: "11 October 2014",
      caption: "First photo together — it was Ken's birthday, at the wedding of one of our now principal sponsors.",
      position: "center 30%",
      colSpan: true,
    },
    {
      src: gfbfFinally,
      label: "1 August 2024",
      caption: "Boyfriend. Girlfriend. Finally.",
      position: "center top",
    },
    {
      src: weddingPlanning,
      label: "18 October 2025",
      caption: "We pre-planned our wedding… before the proposal even happened.",
      position: "center 20%",
    },
    {
      src: proposal,
      label: "15 December 2025",
      caption: "The Proposal.",
      position: "center top",
    },
    {
      src: familyPic,
      label: "27 December 2025",
      caption: `"Our families met, and the "YES" became official."`,
      position: "center bottom",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-14">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4">
          <div>
            <Reveal>
              <p className="text-xs tracking-widest uppercase text-amber-600 mb-2">Moments</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, color: "#2d1f14" }}>
                A Journey of Love
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-sm leading-relaxed text-amber-700 max-w-xs md:text-right">
              From our early adventures to the moment everything changed — a life beautifully built together.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3" style={{ gridTemplateRows: "clamp(220px, 45vw, 420px) clamp(180px, 38vw, 350px)" }}>
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${i === 0 ? "row-span-2" : ""}`}
            >
              {/* Photo */}
              <img
                src={p.src}
                alt={p.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: p.position }}
              />

              {/* Overlay — always visible on mobile, hover-only on desktop */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 opacity-100 md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100"
                style={{
                  background: "linear-gradient(to top, rgba(30,14,5,0.85) 0%, rgba(30,14,5,0.25) 55%, transparent 100%)",
                }}
              >
                <div
                  className="mb-2 md:mb-3"
                  style={{ width: "24px", height: "1px", background: "#d4a35a" }}
                />
                <p
                  className="text-xs text-amber-400 mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.12em", fontWeight: 600 }}
                >
                  {p.label}
                </p>
                <p
                  className="text-xs md:text-sm text-amber-100 leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300 }}
                >
                  {p.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}