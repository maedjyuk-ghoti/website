import React, { useState } from 'react';
import { Video, Play, Music, Radio, Volume2 } from 'lucide-react';

export default function Media() {
  const [selectedVideo, setSelectedVideo] = useState({
    id: 'bZYpOPPh1X4',
    title: 'Celtic Causeway - Live Instrumental Session',
    description: 'Featured performance showcasing authentic traditional Irish instrumental tune sets.',
  });

  const videoList = [
    {
      id: 'bZYpOPPh1X4',
      title: 'Celtic Causeway - Live Instrumental Set',
      duration: '4:15',
      category: 'Featured Performance',
      description: 'An uplifting set of jigs and reels featuring concertina, guitar, and fiddle.',
      thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'Placeholder_1',
      isPlaceholder: true,
      title: 'Reels from Clare & Galway',
      duration: '5:30',
      category: 'Stage Performance',
      description: 'Ben and Rebekah performing driving Irish reels at the Summer Folk Festival.',
      thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'Placeholder_2',
      isPlaceholder: true,
      title: 'Slow Air & Hornpipe Medley',
      duration: '6:10',
      category: 'Acoustic Studio Session',
      description: 'Intimate acoustic session featuring soulful fiddle airs transitioning into lively hornpipes.',
      thumbnail: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="media" className="py-24 bg-celtic-cream text-celtic-dark relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-celtic-green/10 text-celtic-emerald text-xs font-semibold uppercase tracking-widest mb-3">
            <Video size={14} className="text-celtic-gold" />
            <span>Audio & Video</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-celtic-dark tracking-tight mb-4">
            Videos & <span className="text-celtic-emerald">Media</span>
          </h2>
          <div className="w-24 h-1 bg-celtic-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg text-celtic-slate font-sans leading-relaxed">
            Watch live recordings and listen to tune sets played by Ben & Rebekah Greniven.
          </p>
        </div>

        {/* Featured Video Player */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-celtic-dark rounded-2xl overflow-hidden shadow-2xl border border-celtic-gold/30">
            <div className="aspect-video relative bg-black">
              {selectedVideo.isPlaceholder ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-celtic-dark via-celtic-green/60 to-celtic-dark text-celtic-cream">
                  <div className="w-20 h-20 rounded-full bg-celtic-gold/20 flex items-center justify-center border border-celtic-gold mb-4">
                    <Music size={40} className="text-celtic-gold animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif mb-2">{selectedVideo.title}</h3>
                  <p className="text-celtic-sand/80 max-w-md text-sm mb-4">{selectedVideo.description}</p>
                  <span className="px-4 py-1.5 rounded-full bg-celtic-gold text-celtic-dark text-xs font-bold uppercase tracking-wider">
                    Full Video Coming Soon
                  </span>
                </div>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=0&rel=0`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* Video Info Bar */}
            <div className="p-6 bg-celtic-dark text-celtic-cream flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-celtic-gold/20">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-celtic-gold block mb-1">
                  Currently Playing
                </span>
                <h3 className="text-xl font-serif font-bold text-celtic-cream">
                  {selectedVideo.title}
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 text-xs text-celtic-sand bg-celtic-green/50 px-3 py-1.5 rounded-full border border-celtic-gold/30">
                <Volume2 size={16} className="text-celtic-gold" />
                <span>High Quality Stereo Audio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Gallery Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {videoList.map((video) => (
            <button
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className={`text-left rounded-xl overflow-hidden border transition-all duration-300 group bg-celtic-cream shadow-md ${
                selectedVideo.id === video.id
                  ? 'border-celtic-gold ring-2 ring-celtic-gold/50 scale-[1.02]'
                  : 'border-celtic-gold/20 hover:border-celtic-gold/60 hover:-translate-y-1'
              }`}
            >
              <div className="relative aspect-video bg-celtic-dark overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-celtic-dark/90 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-celtic-gold/90 text-celtic-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={20} className="fill-celtic-dark ml-0.5" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-celtic-dark/80 text-celtic-gold text-[10px] font-bold rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-celtic-emerald block mb-1">
                  {video.category}
                </span>
                <h4 className="font-serif font-bold text-celtic-dark text-sm line-clamp-1 group-hover:text-celtic-emerald transition-colors">
                  {video.title}
                </h4>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
