interface FeaturedNFTProps {
  title: string
  creator: string
  currentBid: string
  currentBidUSD: string
  hours: string
  minutes: string
  seconds: string
  image: string
}

export default function FeaturedNFT({
  title,
  creator,
  currentBid,
  currentBidUSD,
  hours,
  minutes,
  seconds,
  image,
}: FeaturedNFTProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingLeft: '120px', paddingRight: '120px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* NFT Image */}
          <div className="w-full">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600/20 to-pink-600/20" style={{ width: '396px', height: '646px' }}>
              {/* Placeholder for astronaut NFT artwork */}
              <div className="w-full h-full bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Abstract astronaut-like figure with Bitcoin symbol */}
                  <div className="relative w-3/4 h-3/4">
                    {/* Cosmic background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-50" />
                    {/* Bitcoin symbol on chest */}
                    <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl">
                      <span className="text-6xl font-bold text-yellow-600">₿</span>
                    </div>
                    {/* Additional glow effects */}
                    <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-white/20 rounded-full blur-xl" />
                    <div className="absolute bottom-1/3 right-1/4 w-1/4 h-1/4 bg-pink-400/30 rounded-full blur-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full">
            <h2 className="text-6xl lg:text-[72px] font-clash font-medium text-white mb-6" style={{ lineHeight: '125%', letterSpacing: '0.2px' }}>
              {title}
            </h2>
            <p className="text-white/80 text-base mb-8 font-poppins font-medium" style={{ width: '230px', height: '20px', lineHeight: '20px' }}>
              Created by {creator}
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* Current Bid */}
              <div>
                <p className="text-white/70 text-sm mb-2">Current Bid</p>
                <p className="text-white text-4xl font-bold mb-1">{currentBid} ETH</p>
                <p className="text-white/70 text-lg">${currentBidUSD}</p>
              </div>

              {/* Auction Timer */}
              <div>
                <p className="text-white/70 text-sm mb-2">Auction Ends in</p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" style={{ width: '239px', height: '98px' }}>
                  <div className="flex flex-col gap-1">
                    <div className="text-white text-lg font-semibold">{hours} Hours</div>
                    <div className="text-white text-lg font-semibold">{minutes} Minutes</div>
                    <div className="text-white text-lg font-semibold">{seconds} Seconds</div>
                  </div>
                </div>
              </div>
            </div>

            {/* View Art Work Button */}
            <button 
              className="bg-gradient-button text-white font-semibold hover:opacity-90 transition-opacity flex items-center"
              style={{ paddingTop: '15px', paddingRight: '24px', paddingBottom: '15px', paddingLeft: '24px', borderRadius: '4px', gap: '10px' }}
            >
              View Art Work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
