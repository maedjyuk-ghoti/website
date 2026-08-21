import React from 'react';
import { Music, Disc, Sparkles } from 'lucide-react';

export default function Members() {
  const members = [
    {
      name: 'Ben Greniven',
      role: 'Guitar & Concertina',
      bio: 'Ben brings dynamic driving rhythms and expressive melodic sensitivity to Celtic Causeway. With a deep passion for traditional tunes, his rhythmic guitar backings and intricate concertina ornamentation lay down the heart and groove of the duo\'s signature sound.',
      instruments: ['Acoustic Guitar', 'Anglo Concertina'],
      iconColor: 'from-amber-700/30 to-emerald-950',
    },
    {
      name: 'Rebekah Greniven',
      role: 'Fiddle',
      bio: 'Rebekah\'s fiddle playing embodies the soul and energy of traditional Irish music. Known for her expressive phrasing, crisp bowing technique, and infectious ornamentation, she weaves intricate reels, jigs, and slow airs with effortless elegance.',
      instruments: ['Fiddle / Violin'],
      iconColor: 'from-emerald-800/30 to-emerald-950',
    },
  ];

  return (
    <section id="members" className="py-24 bg-celtic-creamDark text-celtic-dark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-celtic-green/10 text-celtic-green text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles size={14} className="text-celtic-gold" />
            <span>The Musicians</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-celtic-dark tracking-tight mb-4">
            Meet <span className="text-celtic-emerald">Celtic Causeway</span>
          </h2>
          <div className="w-24 h-1 bg-celtic-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-celtic-slate font-sans leading-relaxed">
            Rooted in tradition and crafted with passion, Celtic Causeway brings together the rich sounds of fiddle, concertina, and guitar for unforgettable instrumental performances.
          </p>
        </div>

        {/* Member Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {members.map((member, index) => (
            <div
              key={member.name}
              className="bg-celtic-cream rounded-2xl p-8 sm:p-10 shadow-xl border border-celtic-gold/20 hover:border-celtic-gold/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-celtic-emerald via-celtic-gold to-celtic-emerald"></div>

              <div>
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-celtic-dark flex items-center justify-center text-celtic-gold shadow-md group-hover:scale-105 transition-transform duration-300 border border-celtic-gold/30">
                    <Music size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-celtic-dark group-hover:text-celtic-emerald transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-celtic-gold uppercase tracking-wider mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-celtic-slate leading-relaxed font-sans text-base mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Instruments list tags */}
              <div className="pt-4 border-t border-celtic-sand/60">
                <span className="text-xs uppercase font-semibold text-celtic-slate/70 tracking-wider block mb-2">
                  Primary Instruments
                </span>
                <div className="flex flex-wrap gap-2">
                  {member.instruments.map((inst) => (
                    <span
                      key={inst}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-celtic-green/10 text-celtic-emerald font-medium text-xs border border-celtic-emerald/20"
                    >
                      <Disc size={12} className="text-celtic-gold" />
                      {inst}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
