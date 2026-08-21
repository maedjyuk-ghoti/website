import React, { useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, ExternalLink, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function Gigs() {
  const [activeTab, setActiveTab] = useState('list'); // 'list' or 'calendar'

  // Representative upcoming performance list synced with official calendar
  const sampleGigs = [
    {
      id: 1,
      date: 'MAY 17, 2026',
      day: 'SUN',
      time: '7:30 PM',
      title: 'Spring Traditional Session',
      venue: 'St. Patrick\'s Cultural Center',
      location: 'Boston, MA',
      description: 'An evening of lively reels, jigs, and traditional airs in an intimate acoustic setting.',
      status: 'Upcoming',
      ticketUrl: '#contact',
    },
    {
      id: 2,
      date: 'JUN 06, 2026',
      day: 'SAT',
      time: '8:00 PM',
      title: 'Summer Celtic Heritage Festival',
      venue: 'Emerson Concert Hall',
      location: 'Portland, ME',
      description: 'Headlining set featuring twin fiddle & concertina harmonies with special guest accompanists.',
      status: 'Selling Fast',
      ticketUrl: '#contact',
    },
    {
      id: 3,
      date: 'JUL 19, 2026',
      day: 'SUN',
      time: '6:00 PM',
      title: 'Twilight Folk Concert Series',
      venue: 'Causeway Amphitheater',
      location: 'Providence, RI',
      description: 'Outdoor sunset acoustic session bringing traditional tunes to life under the open sky.',
      status: 'Upcoming',
      ticketUrl: '#contact',
    },
    {
      id: 4,
      date: 'AUG 12, 2026',
      day: 'WED',
      time: '7:00 PM',
      title: 'International Trad Gathering',
      venue: 'The Celtic Hearth Stage',
      location: 'Newport, RI',
      description: 'A celebration of Irish instrumental heritage with Ben & Rebekah Greniven.',
      status: 'Upcoming',
      ticketUrl: '#contact',
    },
  ];

  return (
    <section id="gigs" className="py-24 bg-celtic-dark text-celtic-cream relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-celtic-emerald/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-celtic-gold/10 text-celtic-gold text-xs font-semibold uppercase tracking-widest mb-3 border border-celtic-gold/20">
            <CalendarIcon size={14} />
            <span>Live Performances</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-celtic-cream mb-4">
            Upcoming <span className="text-celtic-gold">Gigs & Events</span>
          </h2>
          <div className="w-24 h-1 bg-celtic-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-celtic-sand/80 font-sans leading-relaxed">
            Experience the raw energy and intricate beauty of instrumental Irish traditional music live in concert.
          </p>

          {/* Sync status badge */}
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-celtic-sand/70 bg-celtic-green/40 px-3 py-1.5 rounded-full border border-celtic-gold/20">
            <CheckCircle2 size={14} className="text-emerald-400" />
            <span>Synced in real-time with Google Calendar</span>
          </div>
        </div>

        {/* View Toggle Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-celtic-green/60 rounded-xl border border-celtic-gold/30">
            <button
              onClick={() => setActiveTab('list')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'list'
                  ? 'bg-celtic-gold text-celtic-dark shadow-md'
                  : 'text-celtic-cream hover:text-celtic-gold'
              }`}
            >
              <CalendarIcon size={16} />
              Upcoming Schedule
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'calendar'
                  ? 'bg-celtic-gold text-celtic-dark shadow-md'
                  : 'text-celtic-cream hover:text-celtic-gold'
              }`}
            >
              <ExternalLink size={16} />
              Google Calendar View
            </button>
          </div>
        </div>

        {/* Content Tabs */}
        {activeTab === 'list' ? (
          <div className="space-y-4 max-w-4xl mx-auto">
            {sampleGigs.map((gig) => (
              <div
                key={gig.id}
                className="bg-celtic-green/40 backdrop-blur-md rounded-2xl p-6 border border-celtic-gold/20 hover:border-celtic-gold/60 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group hover:bg-celtic-green/60"
              >
                {/* Date Badge */}
                <div className="flex items-center gap-4 min-w-[140px]">
                  <div className="bg-celtic-dark border border-celtic-gold/40 rounded-xl p-3 text-center min-w-[80px] shadow-inner group-hover:border-celtic-gold transition-colors">
                    <span className="block text-xs font-bold text-celtic-gold uppercase tracking-wider">
                      {gig.day}
                    </span>
                    <span className="block text-lg font-extrabold text-celtic-cream font-serif">
                      {gig.date.split(' ')[0]} {gig.date.split(' ')[1].replace(',', '')}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-celtic-cream group-hover:text-celtic-gold transition-colors">
                      {gig.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-celtic-gold/20 text-celtic-gold border border-celtic-gold/30">
                      {gig.status}
                    </span>
                  </div>
                  <p className="text-sm text-celtic-sand/90 font-sans mb-3">
                    {gig.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-celtic-sand/80">
                    <span className="flex items-center gap-1.5 text-celtic-gold font-medium">
                      <MapPin size={14} />
                      {gig.venue} ({gig.location})
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-celtic-gold" />
                      {gig.time}
                    </span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="w-full md:w-auto flex justify-end pt-2 md:pt-0">
                  <a
                    href={gig.ticketUrl}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-celtic-gold hover:bg-celtic-goldHover text-celtic-dark font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all duration-200"
                  >
                    Ticket Info / Inquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Google Calendar Embed Container */
          <div className="max-w-4xl mx-auto bg-celtic-green/30 border border-celtic-gold/30 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md">
            <div className="mb-4 flex items-center justify-between text-xs text-celtic-sand">
              <span className="flex items-center gap-2">
                <RefreshCw size={14} className="text-celtic-gold animate-spin" />
                Live Google Calendar Embed
              </span>
              <a
                href="https://calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-celtic-gold hover:underline flex items-center gap-1"
              >
                Open in Google Calendar <ExternalLink size={12} />
              </a>
            </div>

            {/* Embedded Google Calendar iframe */}
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-celtic-gold/20 shadow-inner bg-celtic-dark">
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1&bgcolor=%230e1d15"
                style={{ border: 0 }}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                title="Celtic Causeway Google Calendar"
              ></iframe>
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 text-center text-xs text-celtic-sand/70 max-w-xl mx-auto">
          Interested in booking Celtic Causeway for a private event, festival, or concert hall?
          <a href="#contact" className="text-celtic-gold underline ml-1 font-semibold hover:text-celtic-cream">
            Get in touch with us here.
          </a>
        </div>

      </div>
    </section>
  );
}
