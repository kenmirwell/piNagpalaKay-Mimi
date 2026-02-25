import Reveal from "../Subcomponents/Reveal";
import Ornament from "../Subcomponents/Ornament";
import venue from "../assets/venue.png";

export default function Intro() {
  return (
    <section
      id="story"
      className="max-w-6xl mx-auto px-6 md:px-14 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start"
    >
      {/* Left column — photo + filler card beneath */}
      <div className="flex flex-col gap-8 md:sticky md:top-28">
        <Reveal>
          <div className="relative">
            <div
              className="relative overflow-hidden border border-amber-200/40"
              style={{ aspectRatio: "3/4" }}
            >
              <div className="absolute inset-4 border border-white/30 z-10 pointer-events-none" />
              <img
                src={venue}
                alt="Ken & Mimi"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div
              className="absolute -bottom-8 right-0 w-28 h-28 flex flex-col items-center justify-center"
              style={{ background: "#f5c380" }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2rem",
                  fontWeight: 600,
                  color: "#2d1f14",
                }}
              >
                9
              </span>
              <span className="text-xs tracking-widest uppercase text-amber-800">
                April
              </span>
            </div>
          </div>
        </Reveal>

        {/* Filler card — fills white space below photo on desktop */}
        <Reveal delay={0.1}>
          <div
            className="mt-8 p-8 hidden md:flex flex-col items-center justify-center text-center"
            style={{
              background: "rgba(212,163,90,0.07)",
              border: "1px solid rgba(212,163,90,0.2)",
            }}
          >
            <div style={{ width: "32px", height: "1px", background: "#d4a35a", marginBottom: "1.25rem" }} />
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.2rem",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#2d1f14",
                lineHeight: 1.8,
              }}
            >
              "He has made everything beautiful in its time."
            </p>
            <p className="text-xs tracking-widest uppercase text-amber-600 mt-4">
              Ecclesiastes 3:11
            </p>
            <div style={{ width: "32px", height: "1px", background: "#d4a35a", marginTop: "1.25rem" }} />
          </div>
        </Reveal>
      </div>

      {/* Text */}
      <div>
        <Reveal>
          <Ornament />
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-xs tracking-widest uppercase text-amber-600 mb-4">
            Our Story
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem,4vw,3.2rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              color: "#2d1f14",
              marginBottom: "1.5rem",
            }}
          >
            A Decade{" "}
            <em style={{ fontStyle: "italic", color: "#d28861" }}>
              in the Making.
            </em>
          </h2>
        </Reveal>

        {/* Story body */}
        <Reveal delay={0.15}>
          <p className="text-sm leading-relaxed text-amber-800 mb-5 max-w-md">
            Our love story started in late 2015. We were young, carefree, and
            full of ideals — and a little <em>pasaway</em>, a little{" "}
            <em>mapusok</em>. 🫣 We were both part of the student and youth
            group in our church, serving, growing, and living. Somewhere between
            ministry meetings, shared laughs, and spontaneous fellowship,
            something special began to bloom.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="text-sm leading-relaxed text-amber-800 mb-5 max-w-md">
            As much as there was something between us, our story didn't quite
            push through back then. We were still being rooted in our personal
            walk with Jesus — so instead of forcing our own timeline, we chose
            to abide in God's plan. It wasn't easy, and it felt sad at first.
            But there were no regrets. We embraced the call, and we are forever
            grateful for how God sustained and used us in that season.
          </p>
        </Reveal>

        <Reveal delay={0.21}>
          <p className="text-sm leading-relaxed text-amber-800 mb-8 max-w-md">
            Fast forward to late 2023 — after a mission trip in Mindanao, we
            found ourselves reconnecting. We were no longer the same young souls
            from 2015. We were older. Surer. We knew what we wanted.
          </p>
        </Reveal>

        {/* Key milestone callout */}
        <Reveal delay={0.24}>
          <div
            className="relative pl-5 mb-8 max-w-md"
            style={{ borderLeft: "2px solid #d28861" }}
          >
            <p className="text-sm leading-relaxed text-amber-800 mb-2">
              As 2024 came in, Ken finally pursued Mimi — steady, certain, and
              intentional.
            </p>
            <p
              className="text-sm font-semibold text-amber-900"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}
            >
              On <strong>August 1, 2024</strong>, we became official.
            </p>
            <p className="text-sm leading-relaxed text-amber-800 mt-2">
              Then on <strong>December 15, 2025</strong>, Ken got down on his
              knees — and Mimi said yes. 💍
            </p>
          </div>
        </Reveal>

        {/* Exclamatory closing lines */}
        <Reveal delay={0.27}>
          <div className="mb-8 max-w-md space-y-1">
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.1rem,2vw,1.3rem)",
                fontWeight: 300,
                color: "#2d1f14",
                lineHeight: 1.6,
              }}
            >
              What once felt like a closed chapter turned out to be a beautiful
              pause.
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.2rem,2.5vw,1.5rem)",
                fontWeight: 400,
                color: "#d28861",
                fontStyle: "italic",
                lineHeight: 1.6,
              }}
            >
              Because this love story? Jesus authored it.
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1rem,2vw,1.2rem)",
                fontWeight: 300,
                color: "#2d1f14",
                lineHeight: 1.6,
              }}
            >
              It was always meant to be — simply a decade in the making.
              All by God's grace.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-sm leading-relaxed text-amber-800 mb-10 max-w-md">
            And as we begin this new chapter, our hearts are full of
            anticipation — trusting how He will use our story to lead others
            into knowing Jesus. All for His glory.
          </p>
        </Reveal>

        {/* Verse shown in left column card on desktop; show inline only on mobile */}
        <Reveal delay={0.33}>
          <blockquote
            className="relative max-w-md pl-6 py-5 pr-5 md:hidden"
            style={{
              borderLeft: "3px solid #d4a35a",
              background: "rgba(212,163,90,0.07)",
            }}
          >
            <span
              className="absolute -top-3 -left-1 text-amber-300 select-none"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "4rem",
                lineHeight: 1,
                opacity: 0.5,
              }}
            >
              "
            </span>
            <p
              className="relative"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1rem,2vw,1.2rem)",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#2d1f14",
                lineHeight: 1.8,
              }}
            >
              He has made everything beautiful in its time. He has also set
              eternity in the human heart.
            </p>
            <footer className="mt-3 text-xs tracking-widest uppercase text-amber-600">
              — Ecclesiastes 3:11
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}