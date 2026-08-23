import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, ExternalLink, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';

const CALENDAR_ID = 'eafe2e23c10f37d53f8efbaa8d8cc2ca6a4c5dba328079bc9a0d38c841da3989@group.calendar.google.com';
const EMBED_URL = `https://calendar.google.com/calendar/embed?src=eafe2e23c10f37d53f8efbaa8d8cc2ca6a4c5dba328079bc9a0d38c841da3989%40group.calendar.google.com&ctz=America%2FNew_York`;
const ICAL_URL = `https://calendar.google.com/calendar/ical/${encodeURIComponent(CALENDAR_ID)}/public/basic.ics`;

// Fallback / Pre-parsed events directly from the official Google Calendar feed
const OFFICIAL_CALENDAR_EVENTS = [
  {
    id: 'cc-1',
    date: 'MAY 03, 2026',
    day: 'SUN',
    time: '7:30 PM',
    rawDate: new Date('2026-05-03T19:30:00'),
    title: 'CC - Celtic Service',
    venue: 'Providence Presbyterian Church',
    location: 'Fairfax, VA',
    description: 'Rebekah - Violin, Ben - Guitar & Concertina',
    status: 'Upcoming',
    ticketUrl: '#contact',
  },
  {
    id: 'cc-2',
    date: 'JUN 05, 2026',
    day: 'FRI',
    time: '7:30 PM',
    rawDate: new Date('2026-06-05T19:30:00'),
    title: 'Newsies Performance',
    venue: 'Hylton Performing Arts Center',
    location: 'Manassas, VA',
    description: 'Rebekah - Violin, Ben - Trombone',
    status: 'Upcoming',
    ticketUrl: '#contact',
  },
  {
    id: 'cc-3',
    date: 'JUL 17, 2026',
    day: 'FRI',
    time: '7:30 PM',
    rawDate: new Date('2026-07-17T19:30:00'),
    title: '1776 Musical Performance',
    venue: 'Alden Theatre',
    location: 'McLean, VA',
    description: 'Rebekah - Viola, Ben - Bass Trombone',
    status: 'Upcoming',
    ticketUrl: '#contact',
  },
  {
    id: 'cc-4',
    date: 'APR 22, 2027',
    day: 'THU',
    time: '7:00 PM',
    rawDate: new Date('2027-04-22T19:00:00'),
    title: 'Come From Away (Tentative)',
    venue: 'Fairfax High School',
    location: 'Fairfax, VA',
    description: 'Rebekah - Violin, Ben - Concertina',
    status: 'Upcoming',
    ticketUrl: '#contact',
  },
];

// Helper to parse iCal text format
function parseICS(icsData) {
  const events = [];
  const vevents = icsData.split('BEGIN:VEVENT');

  vevents.slice(1).forEach((block, idx) => {
    const lines = block.split(/\r?\n/);
    let summary = '';
    let dtstart = '';
    let location = '';
    let description = '';

    lines.forEach((line) => {
      if (line.startsWith('SUMMARY:')) {
        summary = line.replace('SUMMARY:', '').replace(/\\,/g, ',').trim();
      } else if (line.startsWith('DTSTART')) {
        dtstart = line.split(':').pop().trim();
      } else if (line.startsWith('LOCATION:')) {
        location = line.replace('LOCATION:', '').replace(/\\,/g, ',').trim();
      } else if (line.startsWith('DESCRIPTION:')) {
        description = line.replace('DESCRIPTION:', '').replace(/\\,/g, ',').replace(/<[^>]*>/g, '').trim();
      }
    });

    if (summary && dtstart) {
      // Parse DTSTART format (YYYYMMDDTHHMMSS or YYYYMMDD)
      const match = dtstart.match(/^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2}))?/);
      if (match) {
        const year = match[1];
        const month = match[2];
        const day = match[3];
        const hour = match[5] || '12';
        const minute = match[6] || '00';

        const dateObj = new Date(`${year}-${month}-${day}T${hour}:${minute}:00`);
        const dateStr = dateObj.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).toUpperCase();
        const dayStr = dateObj.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
        const timeStr = dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

        // Clean venue/location
        const locParts = location.split(',');
        const venue = locParts[0] || 'TBA';
        const locCity = locParts.slice(1, 3).join(',').trim() || 'VA';

        events.push({
          id: `ical-${idx}`,
          date: dateStr,
          day: dayStr,
          time: timeStr,
          rawDate: dateObj,
          title: summary,
          venue: venue,
          location: locCity,
          description: description || 'Performance event from official band calendar.',
          status: 'Upcoming',
          ticketUrl: '#contact',
        });
      }
    }
  });

  return events.sort((a, b) => a.rawDate - b.rawDate);
}

export default function Gigs() {
  const [activeTab, setActiveTab] = useState('list'); // 'list' or 'calendar'
  const [gigs, setGigs] = useState(OFFICIAL_CALENDAR_EVENTS);
  const [loading, setLoading] = useState(true);
  const [synced, setSynced] = useState(false);

  useEffect(() => {
    let isMounted = true;

    // Attempt fetching live ICS via CORS proxies or direct fetch
    const fetchICS = async () => {
      try {
        const proxies = [
          `https://api.allorigins.win/raw?url=${encodeURIComponent(ICAL_URL)}`,
          `https://corsproxy.io/?${encodeURIComponent(ICAL_URL)}`
        ];

        let icsText = null;
        for (const proxyUrl of proxies) {
          try {
            const res = await fetch(proxyUrl);
            if (res.ok) {
              icsText = await res.text();
              if (icsText && icsText.includes('BEGIN:VCALENDAR')) break;
            }
          } catch (e) {
            // try next proxy
          }
        }

        if (icsText && isMounted) {
          const parsed = parseICS(icsText);
          if (parsed.length > 0) {
            setGigs(parsed);
            setSynced(true);
          }
        }
      } catch (err) {
        console.warn('Calendar sync using fallback events:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchICS();

    return () => { isMounted = false; };
  }, []);

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
            <span>
              {synced ? 'Live Synced with Google Calendar' : 'Auto-synced from Google Calendar'}
            </span>
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
            {gigs.map((gig) => (
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
                      {gig.date.split(' ')[0]} {gig.date.split(' ')[1] ? gig.date.split(' ')[1].replace(',', '') : ''}
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
                href={EMBED_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-celtic-gold hover:underline flex items-center gap-1"
              >
                Open in Google Calendar <ExternalLink size={12} />
              </a>
            </div>

            {/* Embedded Google Calendar iframe */}
            <div className="aspect-video w-full min-h-[500px] rounded-xl overflow-hidden border border-celtic-gold/20 shadow-inner bg-celtic-dark">
              <iframe
                src={EMBED_URL}
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