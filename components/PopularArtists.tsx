interface Artist {
  name: string
  image: string
}

interface PopularArtistsProps {
  artists: Artist[]
}

export default function PopularArtists({ artists }: PopularArtistsProps) {
  const nameWidths: { [key: string]: string } = {
    'Ferhat Deniz': '220px',
    'Sebastian': '168px',
    'Javier Miranda': '220px',
    'Erick Butler': '200px',
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingLeft: '120px', paddingRight: '120px' }}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <h2 className="text-5xl lg:text-[64px] font-clash font-medium text-white" style={{ lineHeight: '125%', letterSpacing: '0.2px' }}>
            Popular Artists
          </h2>
          <div className="flex items-center gap-4">
            <button className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              Explore More
            </button>
            <button className="text-white/80 hover:text-white transition-colors text-sm font-medium">
              View all Artists
            </button>
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {artists.map((artist, index) => {
            const nameWidth = nameWidths[artist.name] || '168px'
            return (
              <div key={index} className="flex flex-col items-center">
                {/* Profile Image */}
                <div 
                  className="rounded-full overflow-hidden mb-4 bg-gradient-to-br from-purple-400 to-pink-400"
                  style={{ width: '160px', height: '160px' }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {artist.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                {/* Artist Name */}
                <h3 
                  className="text-white font-clash text-center"
                  style={{ 
                    width: nameWidth, 
                    height: '36px', 
                    fontSize: '36px', 
                    lineHeight: '100%', 
                    letterSpacing: '0.2px',
                    fontWeight: '400'
                  }}
                >
                  {artist.name}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

