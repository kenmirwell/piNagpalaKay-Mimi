import { useState } from "react";

const navItems = ["story", "schedule", "details", "gift", "map"];

function getLabel(s) {
  if (s === "story") return "Our Story";
  if (s === "gift") return "Gift Guide";
  if (s === "map") return "Map Guide";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function Nav({ scrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-amber-950/80 backdrop-blur-md" : ""
      }`}
    >
      <div className="flex justify-between items-center px-8 md:px-14 py-6">
        {/* Logo */}
        <div
          className="flex items-center gap-[10px]"
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "2rem",
            color: "#fdf6ee",
            textShadow: "0 1px 3px rgba(0,0,0,0.3)",
          }}
        >
          K
          <span className="block opacity-70" style={{ fontSize: "0.6em" }}>
            &
          </span>
          <span className="ml-[-5px]">M</span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-10 list-none">
          {navItems.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className="text-amber-50 no-underline tracking-widest uppercase text-xs opacity-90 hover:opacity-60 transition-opacity"
                style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
              >
                {getLabel(s)}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 relative z-50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-[1.5px] bg-amber-50 transition-all duration-300 origin-center"
            style={
              open
                ? { transform: "translateY(6.5px) rotate(45deg)" }
                : undefined
            }
          />
          <span
            className="block w-5 h-[1.5px] bg-amber-50 transition-all duration-300"
            style={open ? { opacity: 0 } : undefined}
          />
          <span
            className="block w-5 h-[1.5px] bg-amber-50 transition-all duration-300 origin-center"
            style={
              open
                ? { transform: "translateY(-6.5px) rotate(-45deg)" }
                : undefined
            }
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 pb-8 list-none">
          {navItems.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                onClick={() => setOpen(false)}
                className="text-amber-50 no-underline tracking-widest uppercase text-xs opacity-90 hover:opacity-60 transition-opacity"
                style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
              >
                {getLabel(s)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
