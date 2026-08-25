import React from 'react';
import { ChevronDown, Music, Calendar, Radio } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-celtic-dark text-celtic-cream">
      {/* Background Decorative Pattern & Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-celtic-emerald/30 via-celtic-dark/90 to-celtic-dark z-0"></div>

      {/* Subtle Celtic Motif Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 z-0 pointer-events-none bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c89d52' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">

        {/* Emblem/Logo Container */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-celtic-gold via-celtic-emerald to-celtic-gold opacity-50 blur-lg group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div className="relative bg-celtic-dark/80 p-4 rounded-2xl border border-celtic-gold/30 shadow-2xl backdrop-blur-sm">
            <img
              src="/celtic_causeway-logo.png"
              alt="Celtic Causeway Emblem"
              className="w-44 sm:w-56 md:w-64 h-auto mx-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-celtic-green/60 border border-celtic-gold/40 text-celtic-gold text-xs sm:text-sm font-medium uppercase tracking-widest mb-4 shadow-inner">
          <Radio size={14} className="animate-pulse text-celtic-gold" />
          <span>Authentic Instrumental Traditional Irish Music</span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-celtic-cream mb-4 drop-shadow-md">
          CELTIC <span className="text-celtic-gold">CAUSEWAY</span>
        </h1>

        {/* Subtitle / Description */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-celtic-sand/90 font-sans leading-relaxed mb-8">
          Captivating melodies and rhythmic mastery featuring <span className="text-celtic-cream font-semibold">Ben Greniven</span> on Guitar & Concertina and <span className="text-celtic-cream font-semibold">Rebekah Greniven</span> on Fiddle.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#gigs"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-celtic-gold hover:bg-celtic-goldHover text-celtic-dark font-bold text-sm uppercase tracking-wider rounded-lg shadow-lg hover:shadow-celtic-gold/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Calendar size={18} />
            Upcoming Gigs
          </a>
          <a
            href="#media"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-celtic-emerald/40 hover:bg-celtic-emerald text-celtic-cream border border-celtic-gold/30 font-semibold text-sm uppercase tracking-wider rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-celtic-gold"
          >
            <Music size={18} className="text-celtic-gold" />
            Listen & Watch
          </a>
        </div>

        {/* Bottom Scroll Cue */}
        <div className="mt-16 animate-bounce text-celtic-gold/70">
          <a href="#members" aria-label="Scroll Down">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
