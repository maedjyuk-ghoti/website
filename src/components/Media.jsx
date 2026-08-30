import React, { useState } from 'react';
import { Video, Play, Music, X, ChevronUp, ChevronDown } from 'lucide-react';

export default function Media() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoList = [
    {
      id: 'bZYpOPPh1X4',
      title: 'Fish Shop - Olympus Mons, Time will End',
      duration: '4:15',
      category: 'Live Performance',
      description: 'An set of slip jigs and reels featuring fiddle, guitar, piano and percussion.',
      thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
      isPlaceholder: false,
    },
    {
      id: '7CuA8VE3-U0',
      title: 'Fish Shop - Fox Hunter\'s, Maudabawn Chapel, Far From Home',
      duration: '6:41',
      category: 'Live Performance',
      description: 'Ben and Rebekah performing a driving set of Irish slip jigs and reels at the Fish Shop.',
      thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
      isPlaceholder: false,
    },
    {
      id: 'KBlAN40ROs4',
      title: 'Fish Shop - Ballinamore, Horseshoes & Rainbows',
      duration: '3:09',
      category: 'Acoustic Studio Session',
      description: 'Ben and Rebekah performing a set of Irish reels with friends at the Fish Shop.',
      thumbnail: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80',
      isPlaceholder: false,
    },
  ];

  const currentVideoIndex = selectedVideo ? videoList.findIndex(v => v.id === selectedVideo.id) : -1;

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handlePrevious = () => {
    if (currentVideoIndex > 0) {
      setSelectedVideo(videoList[currentVideoIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentVideoIndex < videoList.length - 1) {
      setSelectedVideo(videoList[currentVideoIndex + 1]);
    }
  };

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

        {/* Video Playlist */}
        <div className="max-w-4xl mx-auto space-y-4">
          {videoList.map((video, index) => (
            <button
              key={video.id}
              onClick={() => handleVideoClick(video)}
              className={`w-full text-left rounded-xl overflow-hidden border transition-all duration-300 flex flex-col sm:flex-row gap-4 p-4 group ${
                selectedVideo?.id === video.id
                  ? 'bg-celtic-gold/10 border-celtic-gold ring-2 ring-celtic-gold/30'
                  : 'bg-white border-celtic-gold/20 hover:border-celtic-gold/60 hover:shadow-md'
              }`}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video sm:aspect-auto sm:w-40 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-celtic-dark">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-celtic-dark/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-celtic-gold/90 text-celtic-dark flex items-center justify-center shadow-lg">
                    <Play size={24} className="fill-celtic-dark ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="flex-1 flex flex-col justify-start">
                <span className="text-[10px] font-bold uppercase tracking-wider text-celtic-emerald block mb-1">
                  {video.category}
                </span>
                <h4 className="font-serif font-bold text-celtic-dark text-base sm:text-lg line-clamp-2 group-hover:text-celtic-emerald transition-colors mb-2">
                  {video.title}
                </h4>
                <p className="text-sm text-celtic-slate line-clamp-1 mb-3">
                  {video.description}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-celtic-gold bg-celtic-dark/10 px-2 py-1 rounded">
                    {video.duration}
                  </span>
                  {selectedVideo?.id === video.id && (
                    <span className="text-xs font-bold text-celtic-gold uppercase tracking-wider">
                      Selected
                    </span>
                  )}
                </div>
              </div>

              {/* Mobile play indicator */}
              <div className="sm:hidden flex items-center justify-end">
                <div className="text-celtic-gold font-bold">›</div>
              </div>
            </button>
          ))}
        </div>

        {/* Note about clicking to play */}
        <div className="max-w-4xl mx-auto mt-8 text-center text-sm text-celtic-slate">
          <p>Click any video above to watch in full screen</p>
        </div>
      </div>

      {/* Video Modal/Lightbox */}
      {isModalOpen && selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-celtic-dark rounded-2xl overflow-hidden shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 flex items-center justify-between border-b border-celtic-gold/20 bg-celtic-dark">
              <div className="flex-1 pr-4">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-celtic-cream line-clamp-2">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-shrink-0 w-10 h-10 rounded-lg bg-celtic-gold/20 hover:bg-celtic-gold/30 text-celtic-cream flex items-center justify-center transition-colors"
                aria-label="Close video"
              >
                <X size={24} />
              </button>
            </div>

            {/* Video Player */}
            <div className="flex-1 bg-black flex items-center justify-center overflow-hidden">
              <div className="w-full aspect-video">
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
                    src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>

            {/* Modal Footer with Navigation */}
            <div className="p-4 sm:p-6 border-t border-celtic-gold/20 bg-celtic-dark">
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {/* Previous Button */}
                <button
                  onClick={handlePrevious}
                  disabled={currentVideoIndex <= 0}
                  className={`py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    currentVideoIndex <= 0
                      ? 'bg-celtic-gold/10 text-celtic-gold/50 cursor-not-allowed'
                      : 'bg-celtic-gold/20 hover:bg-celtic-gold/30 text-celtic-gold'
                  }`}
                >
                  <ChevronUp size={20} />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                {/* Video Counter */}
                <div className="py-2 sm:py-3 px-3 sm:px-4 rounded-lg bg-celtic-gold/10 text-celtic-gold text-center font-bold text-sm sm:text-base">
                  {currentVideoIndex + 1} / {videoList.length}
                </div>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  disabled={currentVideoIndex >= videoList.length - 1}
                  className={`py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    currentVideoIndex >= videoList.length - 1
                      ? 'bg-celtic-gold/10 text-celtic-gold/50 cursor-not-allowed'
                      : 'bg-celtic-gold/20 hover:bg-celtic-gold/30 text-celtic-gold'
                  }`}
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronDown size={20} />
                </button>
              </div>

              {/* Video Description */}
              <div className="mt-4 p-4 bg-celtic-green/20 rounded-lg border border-celtic-gold/20">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-celtic-gold block mb-2">
                  {selectedVideo.category}
                </p>
                <p className="text-sm sm:text-base text-celtic-cream">
                  {selectedVideo.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}