import { useState, useMemo, useEffect, useRef } from "react";
import Reveal from "../Subcomponents/Reveal";

const TABLES = [
  {
    name: "VIPs 1",
    vip: true,
    guests: [
      "Mr. Herminigildo Gecale", "Mrs. Lolita Gecale",
      "Mr. Ariel Tenorio", "Mrs. Janneth Tenorio",
      "Mr. Marlon Natividad", "Mrs. Aurea Natividad",
      "Mr. Poly Christian Cabral", "Mrs. Rea Cabral",
      "Ms. Lolita Garcia", "Ms. Cynthia Buen",
    ],
  },
  {
    name: "VIPs 2",
    vip: true,
    guests: [
      "Mrs. Miriam Nagpala", "Lola Mila Ordoñez",
      "Mrs. Corazon Villar", "Mr. Linberg Villar",
      "Ms. Lolita Garcia", "Mr. Joshua Gamboa",
      "Mrs. Anne Jane Gamboa", "Mrs. Marie Mylitt Lim",
      "Mr. Edward Cedric Lim", "Mr. Eric Barrion",
      "Mrs. Daisy Barrion"
    ],
  },
  {
    name: "Table 1",
    guests: [
      "Gina Nagpala", "Kierr Nagpala", "Gian Nagpala",
      "Kyd Nagpala", "Giro Dejan", "Kim Dia",
      "Tita Malou Dia", "Tito Berting Dia", "Tito Mar Dejan",
    ],
  },
  {
    name: "Table 2",
    guests: [
      "May Gecale", "Marvin Gecale", "Markjohn Gecale",
      "Rachelle Manaig", "Bianca Escosura",
      "Cristine Faye Anne Gecale", "Chamylle Jerica Gecale",
      "Cyrus Dave Gecale",
    ],
  },
  {
    name: "Table 3",
    guests: [
      "John Tomas", "Shien Dullavin", 
      "Nikka Suasba", "Julianne Dawn Paje",
      "Ally Tenorio", "Angelo Del Rosario",
      "Patty Leocario", "Cyndy Buen",
    ],
  },
  {
    name: "Table 4",
    guests: [
      "Mary Dian Diaz", "Darlene Diaz", "Jade Lian Gecale", "Darwin Diaz", 
      "Ruwel Gecale", "Ruwana Joy Gecale"
    ],
  },
  {
    name: "Table 5",
    guests: [
      "Hermie Barit", "Jhoanna Barit", "Dave Barit",
      "Cherry Portales", "Gilbert Portales", "Hanna Portales",
      "AJ De Guzman", "Martin De Guzman",
    ],
  },
  {
    name: "Table 6",
    guests: [
      "Malen Celeste", "Kenneth Celeste", "Kayler Celeste",
      "Mike Holgado", "Princess Holgado",
      "Katrina Reyes", "Angelo Reyes",
      "Marvin Saturno", "Lukas Saturno", "Anna Mae Saturno",
    ],
  },
  {
    name: "Table 7",
    guests: [
      "Love Galvan", "Jae Galvan", "Bong Flores", "Joy Flores",
      "Anjenneth Tumamak", "Christian Tumamak",
      "Raquel Barerra", "Moses Barrera"
    ],
  },
  {
    name: "Table 8",
    guests: [
      "Gia Esther Gamboa", "Daniel Natividad",
      "Julia Michaila Cabral", "Jansen Flores",
      "Janiel Annaiah Faith Tenorio", "Alyanna Yzabel Tenorio",
      "Chloe Barrion", "Ethan Cabral",
    ],
  },
  {
    name: "Table 9",
    guests: [
      "Kinjo Joaquin", "Ronald Gacosta", "Rochelle Mentino",
      "Rheg Verano", "Tin Guerrero", "Joseph Samonte",,
      "Lenard Visaya",
    ],
  },
  {
    name: "Table 10",
    guests: [
      "Angelo Sarmiento", "Ten Sandoval", 
      "Marlein Montierro", "Ella Tinio",
      "Sandy Leocario", "Jen Natividad", 
      "Jana Tenorio", "Hannah Gamboa"
    ],
  },
  {
    name: "Table 11",
    guests: [
      "Aprilyn Etorma", "Xhiane F. Esagre",
      "Raymond Gimutao", "Joy Gimutao", "John Miguel JM Hondo",
      "Albert Tan", "Abraham Koko Capacete",
      "Angelo Agapito", "Rhea Agapito",
    ],
  },
  {
    name: "Kids Table",
    kids: true,
    guests: [
      "Coleen", "Claire", "Hadassah", "Elianna",
      "Thea", "Massey", "Kelsey",
      "Nigel", "Gab", "Mattias", "Lukas", "Kayler", "Gian"
    ],
  },
];

export default function SeatPlan() {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  // Auto-focus search when arriving via #seat
  useEffect(() => {
    if (window.location.hash === "#seat") {
      const timer = setTimeout(() => inputRef.current?.focus(), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const results = [];
    TABLES.forEach((table) => {
      table.guests.forEach((guest) => {
        if (guest.toLowerCase().includes(q)) {
          results.push({ name: guest, table: table.name });
        }
      });
    });
    return results;
  }, [query]);

  return (
    <section id="seat" className="scroll-mt-24 py-24 px-6 md:px-14 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, rgba(45,31,20,0.97) 0%, rgba(70,42,18,0.97) 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(212,163,90,0.08) 0%, transparent 60%)" }}
      />

      <div className="max-w-md mx-auto relative z-10">

        {/* Header */}
        <Reveal>
          <p className="text-xs tracking-widest uppercase text-amber-500 mb-2 text-center">Find Your Seat</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-center mb-4" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 300,
            color: "#f5e6c8",
          }}>
            Seat Plan
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex justify-center mb-4">
            <div style={{ width: "48px", height: "1px", background: "#d4a35a" }} />
          </div>
        </Reveal>
        <Reveal delay={0.09}>
          <p className="text-center mb-10" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1rem",
            fontStyle: "italic",
            color: "#f5e6c8",
          }}>
            Search your name below to find your assigned table.
          </p>
        </Reveal>

        {/* Search */}
        <Reveal delay={0.1}>
          <div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 text-sm">&#x1F50D;</span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter your name..."
                className="w-full pl-11 pr-4 py-4 rounded-xl text-sm outline-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem",
                  background: "rgba(253,246,238,0.08)",
                  border: "1px solid rgba(212,163,90,0.3)",
                  color: "#f5e6c8",
                  caretColor: "#d4a35a",
                }}
              />
            </div>

            {/* Search results */}
            {query.trim() && (
              <div className="mt-6 space-y-4">
                {searchResults.length === 0 ? (
                  <div className="text-center py-8 rounded-xl"
                    style={{
                      background: "rgba(253,246,238,0.05)",
                      border: "1px solid rgba(212,163,90,0.15)",
                    }}
                  >
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.1rem",
                      fontStyle: "italic",
                      color: "rgba(245,230,200,0.5)",
                    }}>
                      No guest found with that name.
                    </p>
                  </div>
                ) : (
                  searchResults.map((r, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-6 text-center"
                      style={{
                        background: "rgba(212,163,90,0.1)",
                        border: "1px solid rgba(212,163,90,0.3)",
                      }}
                    >
                      <p style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.3rem",
                        color: "#f5e6c8",
                        fontWeight: 400,
                        marginBottom: "12px",
                      }}>
                        {r.name}
                      </p>
                      <div style={{ width: "24px", height: "1px", background: "#d4a35a", margin: "0 auto 12px" }} />
                      <p className="tracking-widest uppercase"
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.5rem",
                          fontWeight: 600,
                          color: "#d4a35a",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {r.table}
                      </p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
