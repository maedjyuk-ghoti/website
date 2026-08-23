import React, { useState, useEffect } from 'react';
import { Menu, X, Music, Calendar, Video, Mail, User } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Music },
    { name: 'Band Members', href: '#members', icon: User },
    { name: 'Upcoming Gigs', href: '#gigs', icon: Calendar },
    { name: 'Videos & Media', href: '#media', icon: Video },
    { name: 'Contact & Booking', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-celtic-dark/95 backdrop-blur-md shadow-lg border-b border-celtic-gold/20 py-3'
          : 'bg-gradient-to-b from-celtic-dark/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/website/celtic_causeway-logo.png"
            alt="Celtic Causeway Logo"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_4px_rgba(200,157,82,0.3)]"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-celtic-cream group-hover:text-celtic-gold transition-colors">
              CELTIC CAUSEWAY
            </span>
            <span className="text-[10px] sm:text-xs tracking-widest text-celtic-gold uppercase font-sans">
              Instrumental Irish Tradition
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 rounded-md text-sm font-medium text-celtic-cream/90 hover:text-celtic-gold hover:bg-celtic-green/40 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-celtic-dark bg-celtic-gold hover:bg-celtic-goldHover rounded shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Book Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-celtic-cream hover:text-celtic-gold hover:bg-celtic-green/50 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-celtic-dark/98 border-b border-celtic-gold/20 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2 shadow-2xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-celtic-cream hover:text-celtic-gold hover:bg-celtic-green/50 transition-colors"
              >
                <Icon size={18} className="text-celtic-gold" />
                {link.name}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 text-sm font-semibold uppercase tracking-wider text-celtic-dark bg-celtic-gold hover:bg-celtic-goldHover rounded shadow-md"
            >
              Book Band / Inquire
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
