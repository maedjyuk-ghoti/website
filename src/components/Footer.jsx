import React from 'react';
import { Music, Heart } from 'lucide-react';

export default function Footer() {
  // Use Vite's BASE_URL at runtime so the image path respects the configured base (e.g. "/website/")
  const logoSrc = import.meta.env.BASE_URL + 'celtic_causeway-logo-no_background.png';

  return (
    <footer className="bg-celtic-dark text-celtic-cream border-t border-celtic-gold/20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">

          {/* Brand Info */}
          <div className="flex items-center gap-4">
            <img
              src={logoSrc}
              alt="Celtic Causeway Logo"
              className="h-12 w-auto object-contain filter drop-shadow-[0_2px_4px_rgba(200,157,82,0.3)]"
            />
            <div>
              <span className="font-serif text-lg font-bold text-celtic-cream block">
                CELTIC CAUSEWAY
              </span>
              <span className="text-xs text-celtic-gold tracking-widest uppercase block">
                Instrumental Irish Traditional Music
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider text-celtic-sand">
            <a href="#home" className="hover:text-celtic-gold transition-colors">Home</a>
            <a href="#members" className="hover:text-celtic-gold transition-colors">Band Members</a>
            <a href="#gigs" className="hover:text-celtic-gold transition-colors">Gigs</a>
            <a href="#media" className="hover:text-celtic-gold transition-colors">Media</a>
            <a href="#contact" className="hover:text-celtic-gold transition-colors">Contact</a>
          </div>

          {/* Social / Contact short note */}
          <div className="text-xs text-celtic-sand/70">
            <p>Direct Contact: <a href="mailto:info@celticcauseway.com" className="text-celtic-gold hover:underline">info@celticcauseway.com</a></p>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-celtic-green/60 flex flex-col sm:flex-row items-center justify-between text-xs text-celtic-sand/60 gap-4">
          <p>© {new Date().getFullYear()} Celtic Causeway. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Featuring Ben Greniven & Rebekah Greniven
          </p>
        </div>
      </div>
    </footer>
  );
}
