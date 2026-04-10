"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen" style={{ background: "oklch(0.97 0.02 95)", color: "oklch(0.18 0.02 50)" }}>
      {/* ── Navigation ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "oklch(0.18 0.02 50 / 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid oklch(1 0 0 / 0.1)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            {/* Monastery symbol */}
            <div
              className="w-9 h-9 flex items-center justify-center rounded-full"
              style={{ background: "oklch(0.72 0.12 80)", color: "oklch(0.18 0.02 50)" }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L10 6M6 8H14M5 18H15M5 18V10M15 18V10M5 10L10 6L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="13" r="1.5" fill="currentColor"/>
              </svg>
            </div>
            <span
              className="text-xl tracking-widest uppercase font-serif font-bold"
              style={{ color: scrolled ? "oklch(0.93 0.03 90)" : "oklch(0.97 0.02 95)", letterSpacing: "0.15em" }}
            >
              Gabud
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Programs", "Retreats", "Community", "Visit"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
                style={{ color: scrolled ? "oklch(0.78 0.05 75)" : "oklch(0.97 0.02 95 / 0.85)", letterSpacing: "0.12em" }}
              >
                {item}
              </a>
            ))}
            <a
              href="#retreats"
              className="px-5 py-2 text-sm uppercase tracking-widest transition-all hover:opacity-90"
              style={{
                background: "oklch(0.72 0.12 80)",
                color: "oklch(0.18 0.02 50)",
                borderRadius: "2px",
                letterSpacing: "0.1em",
                fontWeight: 600,
              }}
            >
              Book a Retreat
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: scrolled ? "oklch(0.93 0.03 90)" : "oklch(0.97 0.02 95)" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round"/>
              ) : (
                <>
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-6" style={{ background: "oklch(0.18 0.02 50)" }}>
            {["About", "Programs", "Retreats", "Community", "Visit"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm uppercase tracking-widest border-b"
                style={{ color: "oklch(0.78 0.05 75)", borderColor: "oklch(1 0 0 / 0.08)", letterSpacing: "0.12em" }}
              >
                {item}
              </a>
            ))}
            <a
              href="#retreats"
              onClick={() => setMenuOpen(false)}
              className="block mt-4 px-5 py-3 text-sm uppercase tracking-widest text-center font-semibold"
              style={{ background: "oklch(0.72 0.12 80)", color: "oklch(0.18 0.02 50)", borderRadius: "2px" }}
            >
              Book a Retreat
            </a>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, oklch(0.31 0.07 160 / 0.4) 0%, transparent 60%),
            linear-gradient(180deg, oklch(0.13 0.03 50) 0%, oklch(0.20 0.04 50) 50%, oklch(0.16 0.04 155 / 0.8) 100%)
          `,
        }}
      >
        {/* Decorative arch / texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 48px, oklch(0.97 0.02 95 / 0.3) 48px, oklch(0.97 0.02 95 / 0.3) 49px),
              repeating-linear-gradient(90deg, transparent, transparent 48px, oklch(0.97 0.02 95 / 0.15) 48px, oklch(0.97 0.02 95 / 0.15) 49px)
            `,
          }}
        />

        {/* Monastery illustration */}
        <div className="relative mb-10">
          <div
            className="w-28 h-28 mx-auto flex items-center justify-center rounded-full"
            style={{
              background: "oklch(0.72 0.12 80 / 0.15)",
              border: "1px solid oklch(0.72 0.12 80 / 0.4)",
            }}
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ color: "oklch(0.72 0.12 80)" }}>
              <path d="M32 6L32 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M20 28H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 56H52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 56V32M52 56V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 32L32 14L52 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="24" y="40" width="16" height="16" rx="1" stroke="currentColor" strokeWidth="2"/>
              <path d="M18 40V56M46 40V56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="32" cy="34" r="3" fill="currentColor" opacity="0.7"/>
              <path d="M28 10 Q32 4 36 10" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <div
            className="absolute -inset-6 rounded-full opacity-20 blur-2xl"
            style={{ background: "oklch(0.72 0.12 80)" }}
          />
        </div>

        <p
          className="text-xs uppercase tracking-[0.4em] mb-4"
          style={{ color: "oklch(0.72 0.12 80)" }}
        >
          Founded 1247 · Mountain Region
        </p>

        <h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6"
          style={{ color: "oklch(0.97 0.02 95)", letterSpacing: "-0.01em" }}
        >
          Gabud
          <br />
          <span style={{ color: "oklch(0.72 0.12 80)" }}>Monastery</span>
        </h1>

        <p
          className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10"
          style={{ color: "oklch(0.78 0.05 75 / 0.85)" }}
        >
          A sanctuary of silence, prayer, and contemplation — where seekers
          find stillness and the ancient rhythms of monastic life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#retreats"
            className="px-8 py-4 text-sm uppercase tracking-widest font-semibold transition-all hover:scale-105"
            style={{
              background: "oklch(0.72 0.12 80)",
              color: "oklch(0.13 0.03 50)",
              borderRadius: "2px",
              letterSpacing: "0.12em",
            }}
          >
            Plan Your Retreat
          </a>
          <a
            href="#about"
            className="px-8 py-4 text-sm uppercase tracking-widest transition-all hover:opacity-80"
            style={{
              border: "1px solid oklch(0.72 0.12 80 / 0.5)",
              color: "oklch(0.97 0.02 95)",
              borderRadius: "2px",
              letterSpacing: "0.12em",
            }}
          >
            Our Story
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest" style={{ color: "oklch(0.62 0.05 80)" }}>
            Scroll
          </span>
          <div
            className="w-px h-12 animate-pulse"
            style={{ background: "linear-gradient(to bottom, oklch(0.72 0.12 80 / 0.6), transparent)" }}
          />
        </div>
      </section>

      {/* ── Scripture Banner ── */}
      <section
        className="py-8 px-6 text-center"
        style={{ background: "oklch(0.72 0.12 80)", color: "oklch(0.18 0.02 50)" }}
      >
        <p className="font-serif text-lg md:text-xl italic font-medium tracking-wide">
          &ldquo;Be still and know that I am God.&rdquo;
        </p>
        <p className="text-xs mt-1 uppercase tracking-widest opacity-70">Psalm 46:10</p>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "oklch(0.72 0.12 80)" }}>
              Our History
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "oklch(0.18 0.02 50)" }}>
              Eight Centuries of<br />Sacred Life
            </h2>
            <p className="text-base leading-loose mb-6" style={{ color: "oklch(0.42 0.03 60)" }}>
              Gabud Monastery was founded in 1247 by a small community of contemplative monks seeking
              solitude in the mountain highlands. Over eight centuries, the monastery has grown into
              a living center of prayer, hospitality, and the arts — while remaining anchored to the
              ancient Rule that shaped its founding vision.
            </p>
            <p className="text-base leading-loose mb-8" style={{ color: "oklch(0.42 0.03 60)" }}>
              Today, our community of forty monks welcomes thousands of guests each year — pilgrims,
              artists, scholars, and those simply longing for rest and renewal in a world of noise.
              The guest house, library, herb garden, and scriptorium remain central to our life together.
            </p>
            <div className="flex gap-10">
              {[
                { n: "40+", label: "Resident Monks" },
                { n: "777", label: "Years of History" },
                { n: "3,000+", label: "Annual Retreatants" },
              ].map(({ n, label }) => (
                <div key={label}>
                  <p className="font-serif text-3xl font-bold" style={{ color: "oklch(0.31 0.07 160)" }}>{n}</p>
                  <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "oklch(0.52 0.03 60)" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative monastery illustration */}
          <div className="relative">
            <div
              className="aspect-[3/4] rounded-sm overflow-hidden relative"
              style={{ background: "linear-gradient(135deg, oklch(0.26 0.05 50) 0%, oklch(0.31 0.07 160) 100%)" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="220" height="280" viewBox="0 0 220 280" fill="none" opacity="0.15" style={{ color: "oklch(0.97 0.02 95)" }}>
                  <rect x="10" y="150" width="200" height="130" stroke="currentColor" strokeWidth="2"/>
                  <rect x="30" y="170" width="40" height="60" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="90" y="190" width="40" height="90" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="150" y="170" width="40" height="60" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 150 L110 40 L210 150" stroke="currentColor" strokeWidth="2"/>
                  <path d="M80 150 L110 90 L140 150" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="110" y1="20" x2="110" y2="40" stroke="currentColor" strokeWidth="2"/>
                  <line x1="100" y1="28" x2="120" y2="28" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="110" cy="80" r="8" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M50 200 Q50 215 50 230" stroke="currentColor" strokeWidth="1"/>
                  <path d="M170 200 Q170 215 170 230" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 p-8"
                style={{ background: "linear-gradient(to top, oklch(0.18 0.02 50 / 0.9), transparent)" }}
              >
                <p className="font-serif text-lg font-semibold" style={{ color: "oklch(0.97 0.02 95)" }}>
                  Founded in the tradition of<br />contemplative monasticism
                </p>
                <p className="text-xs uppercase tracking-widest mt-2" style={{ color: "oklch(0.72 0.12 80)" }}>
                  Est. 1247 · Mountain Highlands
                </p>
              </div>
            </div>
            {/* Gold border accent */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 border-2 rounded-sm -z-10"
              style={{ borderColor: "oklch(0.72 0.12 80 / 0.4)" }}
            />
          </div>
        </div>
      </section>

      {/* ── Daily Life ── */}
      <section
        id="programs"
        className="py-24 px-6"
        style={{ background: "oklch(0.22 0.04 50)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "oklch(0.72 0.12 80)" }}>
              The Rhythm of Our Days
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: "oklch(0.93 0.03 90)" }}>
              Life at Gabud
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-1">
            {[
              {
                time: "5:00 AM",
                title: "Vigils",
                desc: "The great silence breaks with chanted prayer as the community gathers in the dark church.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M14 4a10 10 0 1 0 0 20A10 10 0 0 0 14 4z"/>
                    <path d="M14 8v6l4 2"/>
                  </svg>
                ),
              },
              {
                time: "7:00 AM",
                title: "Lauds & Mass",
                desc: "Morning prayer and the Eucharist unite the community in gratitude for the new day.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="14" cy="14" r="5"/>
                    <path d="M14 2v3M14 23v3M2 14h3M23 14h3M5.6 5.6l2.1 2.1M20.3 20.3l2.1 2.1M5.6 22.4l2.1-2.1M20.3 7.7l2.1-2.1"/>
                  </svg>
                ),
              },
              {
                time: "9:00 AM",
                title: "Work & Lectio",
                desc: "Monks tend the garden, workshop, and scriptorium — ora et labora — prayer and labor intertwined.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M6 20l4-12 4 8 4-6 4 10"/>
                    <path d="M4 24h20"/>
                  </svg>
                ),
              },
              {
                time: "7:30 PM",
                title: "Compline",
                desc: "The day closes in sung prayer and total silence descends on the monastery until dawn.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                ),
              },
            ].map(({ time, title, desc, icon }) => (
              <div
                key={title}
                className="p-8 border-t-2 transition-all hover:border-t-amber-400"
                style={{ background: "oklch(0.26 0.04 50)", borderTopColor: "oklch(0.72 0.12 80 / 0.3)" }}
              >
                <div className="mb-6" style={{ color: "oklch(0.72 0.12 80)" }}>
                  {icon}
                </div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "oklch(0.52 0.04 80)" }}>{time}</p>
                <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "oklch(0.93 0.03 90)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.62 0.03 70)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Retreats ── */}
      <section id="retreats" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "oklch(0.72 0.12 80)" }}>
            Upcoming Programmes
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight" style={{ color: "oklch(0.18 0.02 50)" }}>
            Retreats & Pilgrimages
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "oklch(0.52 0.03 60)" }}>
            Gabud welcomes guests of all traditions for days of silence, guided retreats, and
            pilgrim hospitality. All are welcome at our table.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: "Silent Retreat",
              title: "The Great Silence",
              dates: "May 12–18, 2026",
              spots: 8,
              desc: "Six days of guided silent retreat following the monastic rhythm — prayer, reading, walking the ancient paths.",
              color: "oklch(0.31 0.07 160)",
            },
            {
              tag: "Pilgrimage",
              title: "The Mountain Way",
              dates: "June 3–7, 2026",
              spots: 14,
              desc: "A five-day walking pilgrimage through the highland villages, culminating in the monastery chapel.",
              color: "oklch(0.62 0.08 100)",
              featured: true,
            },
            {
              tag: "Creative Arts",
              title: "Icons & Illumination",
              dates: "July 7–12, 2026",
              spots: 10,
              desc: "A workshop in the scriptorium tradition — learning iconography and manuscript illumination under monastic guidance.",
              color: "oklch(0.72 0.12 80)",
            },
          ].map(({ tag, title, dates, spots, desc, color, featured }) => (
            <div
              key={title}
              className="rounded-sm overflow-hidden border transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{
                borderColor: featured ? "oklch(0.72 0.12 80)" : "oklch(0.88 0.03 80)",
                boxShadow: featured ? "0 0 0 1px oklch(0.72 0.12 80)" : "none",
              }}
            >
              <div className="h-2" style={{ background: color }} />
              <div className="p-8">
                <span
                  className="text-xs uppercase tracking-widest px-2 py-1 rounded-sm"
                  style={{ background: `${color}20`, color }}
                >
                  {tag}
                </span>
                <h3 className="font-serif text-2xl font-bold mt-4 mb-2" style={{ color: "oklch(0.18 0.02 50)" }}>
                  {title}
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <p className="text-xs uppercase tracking-widest" style={{ color: "oklch(0.52 0.03 60)" }}>
                    {dates}
                  </p>
                  <span className="text-xs" style={{ color: "oklch(0.72 0.12 80)" }}>
                    {spots} spots left
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.42 0.03 60)" }}>
                  {desc}
                </p>
                <a
                  href="#visit"
                  className="text-sm uppercase tracking-widest font-semibold underline underline-offset-4 transition-opacity hover:opacity-70"
                  style={{ color }}
                >
                  Enquire &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm" style={{ color: "oklch(0.52 0.03 60)" }}>
          Private retreats and group bookings available year-round.{" "}
          <a href="#visit" className="underline underline-offset-2" style={{ color: "oklch(0.31 0.07 160)" }}>
            Contact the guestmaster.
          </a>
        </p>
      </section>

      {/* ── Community ── */}
      <section
        id="community"
        className="py-24 px-6"
        style={{
          background: `linear-gradient(135deg, oklch(0.31 0.07 160) 0%, oklch(0.26 0.05 50) 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "oklch(0.72 0.12 80)" }}>
              Pillars of Our Life
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold" style={{ color: "oklch(0.97 0.02 95)" }}>
              What We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M18 4v28M10 10 Q18 4 26 10"/>
                    <path d="M10 18 Q18 12 26 18"/>
                    <path d="M10 26 Q18 20 26 26"/>
                  </svg>
                ),
                title: "Liturgy of the Hours",
                desc: "The entire community gathers seven times daily in the ancient chanted offices — the heartbeat of monastic life. Guests are always welcome to join.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <rect x="6" y="8" width="24" height="22" rx="2"/>
                    <path d="M12 8V6a2 2 0 0 1 4 0v2M20 8V6a2 2 0 0 1 4 0v2"/>
                    <path d="M6 16h24"/>
                    <path d="M12 24h12"/>
                  </svg>
                ),
                title: "Scriptorium & Library",
                desc: "Our library holds over 14,000 volumes spanning theology, philosophy, natural science, and the arts. The scriptorium offers workspace for scholars and writers.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="18" cy="10" r="5"/>
                    <path d="M8 32c0-5.52 4.48-10 10-10s10 4.48 10 10"/>
                    <path d="M26 14c2.21 0 4 1.79 4 4s-1.79 4-4 4"/>
                    <path d="M10 14c-2.21 0-4 1.79-4 4s1.79 4 4 4"/>
                  </svg>
                ),
                title: "Oblate Community",
                desc: "Nearly 200 oblates around the world live the Gabud charism in their daily lives — joining our community from a distance through prayer, study, and annual gatherings.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M18 4C11 4 6 9 6 16c0 10 12 18 12 18s12-8 12-18c0-7-5-12-12-12z"/>
                    <circle cx="18" cy="16" r="4"/>
                  </svg>
                ),
                title: "Herb Garden & Farm",
                desc: "Our three-acre walled garden and highland farm provide food for the community and medicinal herbs for our apothecary. Guests may assist in the garden during their stay.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M6 28 L12 10 L18 22 L24 6 L30 28"/>
                    <path d="M6 28h24"/>
                  </svg>
                ),
                title: "Gregorian Chant",
                desc: "Monks trained in the Solesmes method sing the ancient chant that has filled these stone walls for centuries. Recordings are available from the monastery shop.",
              },
              {
                icon: (
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M6 6h24v24H6z"/>
                    <path d="M6 12h24M12 6v24"/>
                    <path d="M18 12v18M6 18h24"/>
                  </svg>
                ),
                title: "Spiritual Direction",
                desc: "Several of our monks are trained spiritual directors, available to guests by appointment for personal accompaniment and discernment.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="p-8 rounded-sm"
                style={{ background: "oklch(1 0 0 / 0.05)", border: "1px solid oklch(1 0 0 / 0.1)" }}
              >
                <div className="mb-5" style={{ color: "oklch(0.72 0.12 80)" }}>{icon}</div>
                <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "oklch(0.97 0.02 95)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.78 0.05 75 / 0.8)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 px-6" style={{ background: "oklch(0.93 0.03 90)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "oklch(0.72 0.12 80)" }}>
              From Our Guests
            </p>
            <h2 className="font-serif text-4xl font-bold" style={{ color: "oklch(0.18 0.02 50)" }}>
              Words from Pilgrims
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "A week at Gabud gave me more than a year of ordinary life. The silence was not empty — it was full.",
                name: "Elena M.",
                from: "Prague, Czech Republic",
              },
              {
                quote: "The monks welcomed me without question and showed me, by example, what it means to live intentionally. I will return.",
                name: "James O.",
                from: "Lagos, Nigeria",
              },
              {
                quote: "The chant, the garden, the library — there is a wholeness to life at Gabud that the world beyond the walls seems to have forgotten.",
                name: "Miriam K.",
                from: "Seattle, USA",
              },
            ].map(({ quote, name, from }) => (
              <div
                key={name}
                className="p-8 rounded-sm"
                style={{ background: "oklch(0.97 0.02 95)", border: "1px solid oklch(0.88 0.03 80)" }}
              >
                <div className="text-2xl mb-4" style={{ color: "oklch(0.72 0.12 80)" }}>&ldquo;</div>
                <p className="text-sm leading-relaxed italic mb-6" style={{ color: "oklch(0.32 0.03 60)" }}>
                  {quote}
                </p>
                <div className="border-t pt-4" style={{ borderColor: "oklch(0.88 0.03 80)" }}>
                  <p className="text-sm font-semibold" style={{ color: "oklch(0.18 0.02 50)" }}>{name}</p>
                  <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "oklch(0.52 0.03 60)" }}>{from}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visit ── */}
      <section id="visit" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "oklch(0.72 0.12 80)" }}>
              Find Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{ color: "oklch(0.18 0.02 50)" }}>
              Plan Your Visit
            </h2>
            <p className="text-base leading-loose mb-8" style={{ color: "oklch(0.42 0.03 60)" }}>
              Gabud Monastery sits at 1,840 metres above sea level in the highland region,
              accessible by road or a half-day mountain walk. Accommodation in our guest house
              is offered on a donation basis for those on personal retreat.
            </p>

            <div className="space-y-6">
              {[
                {
                  label: "Address",
                  value: "Gabud Monastery, Mountain Highlands\nRegion of St. Columbanus, Est. 1247",
                },
                {
                  label: "Guestmaster",
                  value: "Brother Anatolius\nguest@gabud-monastery.org",
                },
                {
                  label: "Guest House",
                  value: "24 single rooms · Open year-round\nMeals shared with the community",
                },
                {
                  label: "Visiting Hours",
                  value: "Chapel open daily 5:30 AM – 9:00 PM\nShop: Mon–Sat, 9 AM – 5 PM",
                },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-6 pb-6 border-b" style={{ borderColor: "oklch(0.88 0.03 80)" }}>
                  <div className="w-24 flex-shrink-0">
                    <p className="text-xs uppercase tracking-widest" style={{ color: "oklch(0.72 0.12 80)" }}>{label}</p>
                  </div>
                  <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "oklch(0.32 0.03 60)" }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "oklch(0.72 0.12 80)" }}>
              Write to Us
            </p>
            <h2 className="font-serif text-4xl font-bold mb-6" style={{ color: "oklch(0.18 0.02 50)" }}>
              Enquire About a Retreat
            </h2>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                {["First name", "Last name"].map((ph) => (
                  <div key={ph}>
                    <input
                      type="text"
                      placeholder={ph}
                      className="w-full px-4 py-3 text-sm bg-transparent border rounded-sm outline-none focus:ring-1 transition-all"
                      style={{
                        borderColor: "oklch(0.78 0.03 80)",
                        color: "oklch(0.18 0.02 50)",
                        borderRadius: "2px",
                        "--tw-ring-color": "oklch(0.72 0.12 80)",
                      } as React.CSSProperties}
                    />
                  </div>
                ))}
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 text-sm bg-transparent border rounded-sm outline-none focus:ring-1 transition-all"
                style={{ borderColor: "oklch(0.78 0.03 80)", color: "oklch(0.18 0.02 50)", borderRadius: "2px" } as React.CSSProperties}
              />
              <select
                className="w-full px-4 py-3 text-sm bg-transparent border outline-none focus:ring-1 transition-all"
                style={{ borderColor: "oklch(0.78 0.03 80)", color: "oklch(0.52 0.03 60)", borderRadius: "2px" } as React.CSSProperties}
              >
                <option value="">Interest — select a programme</option>
                <option>The Great Silence (May 12–18, 2026)</option>
                <option>The Mountain Way (June 3–7, 2026)</option>
                <option>Icons & Illumination (July 7–12, 2026)</option>
                <option>Private retreat</option>
                <option>Other enquiry</option>
              </select>
              <textarea
                rows={4}
                placeholder="Tell us a little about yourself and what you are seeking..."
                className="w-full px-4 py-3 text-sm bg-transparent border rounded-sm outline-none focus:ring-1 transition-all resize-none"
                style={{ borderColor: "oklch(0.78 0.03 80)", color: "oklch(0.18 0.02 50)", borderRadius: "2px" } as React.CSSProperties}
              />
              <button
                type="submit"
                className="w-full py-4 text-sm uppercase tracking-widest font-semibold transition-all hover:opacity-90 hover:shadow-md"
                style={{
                  background: "oklch(0.31 0.07 160)",
                  color: "oklch(0.97 0.02 95)",
                  borderRadius: "2px",
                  letterSpacing: "0.12em",
                }}
              >
                Send Enquiry
              </button>
              <p className="text-xs text-center" style={{ color: "oklch(0.62 0.03 70)" }}>
                The guestmaster responds within three working days. All guests are
                welcome regardless of faith background.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section
        className="py-16 px-6 text-center"
        style={{ background: "oklch(0.97 0.02 95)", borderTop: "1px solid oklch(0.88 0.03 80)" }}
      >
        <div className="max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "oklch(0.72 0.12 80)" }}>
            Stay Connected
          </p>
          <h3 className="font-serif text-3xl font-bold mb-3" style={{ color: "oklch(0.18 0.02 50)" }}>
            The Monastery Letter
          </h3>
          <p className="text-sm mb-6" style={{ color: "oklch(0.52 0.03 60)" }}>
            Receive our seasonal newsletter — reflections from the community, programme announcements,
            and the quiet news of life at Gabud.
          </p>
          <form className="flex gap-3 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 text-sm bg-transparent border outline-none"
              style={{ borderColor: "oklch(0.78 0.03 80)", color: "oklch(0.18 0.02 50)", borderRadius: "2px" } as React.CSSProperties}
            />
            <button
              type="submit"
              className="px-5 py-3 text-xs uppercase tracking-widest font-semibold transition-opacity hover:opacity-80"
              style={{ background: "oklch(0.72 0.12 80)", color: "oklch(0.13 0.03 50)", borderRadius: "2px" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="py-12 px-6"
        style={{ background: "oklch(0.13 0.03 50)", color: "oklch(0.62 0.03 70)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-10 pb-10 border-b" style={{ borderColor: "oklch(1 0 0 / 0.08)" }}>
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-full"
                  style={{ background: "oklch(0.72 0.12 80 / 0.2)", color: "oklch(0.72 0.12 80)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L10 6M6 8H14M5 18H15M5 18V10M15 18V10M5 10L10 6L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="10" cy="13" r="1.5" fill="currentColor"/>
                  </svg>
                </div>
                <span className="font-serif text-xl font-bold tracking-widest uppercase" style={{ color: "oklch(0.93 0.03 90)" }}>
                  Gabud
                </span>
              </div>
              <p className="text-sm leading-loose max-w-xs" style={{ color: "oklch(0.52 0.03 65)" }}>
                A community of contemplative monks living the ancient Rule in the mountain highlands,
                open to all who seek silence and renewal.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "oklch(0.72 0.12 80)" }}>Visit</p>
              <ul className="space-y-2 text-sm">
                {["Guest House", "Chapel", "Library & Shop", "Herb Garden", "Getting Here"].map((l) => (
                  <li key={l}>
                    <a href="#visit" className="hover:opacity-70 transition-opacity">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "oklch(0.72 0.12 80)" }}>Community</p>
              <ul className="space-y-2 text-sm">
                {["About Gabud", "Our History", "Oblates", "Retreats", "Contact"].map((l) => (
                  <li key={l}>
                    <a href="#about" className="hover:opacity-70 transition-opacity">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p style={{ color: "oklch(0.42 0.03 60)" }}>
              © 2026 Gabud Monastery. Pray and work — <em>ora et labora.</em>
            </p>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Accessibility"].map((l) => (
                <a key={l} href="#" className="hover:opacity-70 transition-opacity" style={{ color: "oklch(0.42 0.03 60)" }}>
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
