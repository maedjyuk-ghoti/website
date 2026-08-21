import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Members from './components/Members';
import Gigs from './components/Gigs';
import Media from './components/Media';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-celtic-cream font-sans text-celtic-dark">
      <Navbar />
      <main>
        <Hero />
        <Members />
        <Gigs />
        <Media />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
