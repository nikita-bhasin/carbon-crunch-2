export default function JoinCommunity() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingLeft: '120px', paddingRight: '120px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Abstract Image */}
          <div className="w-full flex justify-center lg:justify-start">
            <div 
              className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-purple-500 to-blue-800"
              style={{ width: '550px', height: '550px', borderRadius: '20px', maxWidth: '100%' }}
            >
              {/* Abstract blue wave pattern */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 opacity-80" />
                {/* Wave patterns */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 550 550" fill="none">
                  <path 
                    d="M0,200 Q137.5,150 275,200 T550,200 L550,550 L0,550 Z" 
                    fill="rgba(147, 51, 234, 0.3)"
                  />
                  <path 
                    d="M0,250 Q137.5,200 275,250 T550,250 L550,550 L0,550 Z" 
                    fill="rgba(59, 130, 246, 0.3)"
                  />
                  <path 
                    d="M0,300 Q137.5,250 275,300 T550,300 L550,550 L0,550 Z" 
                    fill="rgba(147, 51, 234, 0.2)"
                  />
                  <path 
                    d="M0,350 Q137.5,300 275,350 T550,350 L550,550 L0,550 Z" 
                    fill="rgba(59, 130, 246, 0.2)"
                  />
                </svg>
                {/* Additional abstract shapes */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/30 rounded-full blur-2xl" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/30 rounded-full blur-2xl" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full">
            <h2 className="text-4xl lg:text-5xl font-clash font-medium text-white mb-8 leading-tight" style={{ lineHeight: '125%', letterSpacing: '0.2px' }}>
              Join The Community And Get The Best NFT Collection
            </h2>
            <button 
              className="bg-gradient-button text-white font-semibold hover:opacity-90 transition-opacity w-full lg:w-[541px]"
              style={{ 
                height: '59px', 
                borderRadius: '10px',
                fontSize: '18px'
              }}
            >
              JOIN COMMUNITY
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

