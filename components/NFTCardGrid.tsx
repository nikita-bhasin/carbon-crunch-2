interface NFTItem {
  artist: string
  title: string
  price: string
  image?: string
}

interface NFTCardGridProps {
  title: string
  description: string
  items: NFTItem[]
}

export default function NFTCardGrid({ title, description, items }: NFTCardGridProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingLeft: '120px', paddingRight: '120px' }}>
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-5xl lg:text-[64px] font-clash font-medium text-white mb-4" style={{ lineHeight: '125%', letterSpacing: '0.2px' }}>
            {title}
          </h2>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p 
            className="text-white/70 text-lg leading-relaxed font-poppins"
            style={{ width: '548px', minHeight: '81px', opacity: '80%' }}
          >
            {description}
          </p>
        </div>

        {/* NFT Cards Grid - 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '24px' }}>
          {items.map((item, index) => {
            // Exact text dimensions from Figma
            const artistNameWidths = ['137px', '178px', '210px', '277px'] // Sebastian, Ferhat Deniz, Javier Miranda, Polina Kondrashova
            const artistNameWidth = artistNameWidths[index] || '178px'
            const artistNameHeight = '28px'
            const titleWidth = '88px'
            const titleHeight = '12px'

            return (
              <div key={index} className="group cursor-pointer">
                <div className="relative">
                  {/* NFT Image */}
                  <div 
                    className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all"
                    style={{ width: '556px', height: '450px' }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 relative overflow-hidden">
                      {/* Abstract art pattern - different for each card */}
                      <div className="absolute inset-0">
                        {index === 0 && (
                          // Sebastian - Light blue/white abstract
                          <>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-100 to-orange-100" />
                            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/80 rounded-full blur-2xl" />
                            <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-blue-200/60 rounded-full blur-xl" />
                          </>
                        )}
                        {index === 1 && (
                          // Ferhat Deniz - Orange/brown flowing shapes
                          <>
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-amber-400 to-orange-500" />
                            <div className="absolute top-1/3 left-1/3 w-2/3 h-2/3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full blur-2xl transform rotate-45" />
                            <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-orange-400/50 rounded-full blur-xl" />
                          </>
                        )}
                        {index === 2 && (
                          // Javier Miranda - Dark metallic sphere with golden spheres
                          <>
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-gradient-to-br from-gray-600 to-gray-900 rounded-full shadow-2xl" />
                            <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full shadow-lg" />
                            <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full shadow-lg" />
                            <div className="absolute top-1/2 right-1/4 w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full shadow-lg" />
                          </>
                        )}
                        {index === 3 && (
                          // Polina Kondrashova - Dark bust with pink/blue elements
                          <>
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-white" />
                            <div className="absolute top-1/4 left-1/3 w-1/3 h-1/2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-full" />
                            <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full blur-sm" />
                            <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-sm" />
                            <div className="absolute bottom-1/4 left-1/2 w-12 h-12 bg-gradient-to-br from-pink-300 to-blue-400 rounded-full blur-md" />
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Info - Text elements positioned below image */}
                  <div className="mt-4">
                    {/* Artist Name */}
                    <h3 
                      className="text-white font-clash font-medium mb-2"
                      style={{ width: artistNameWidth, height: artistNameHeight, fontSize: '20px', lineHeight: '28px', fontWeight: '500' }}
                    >
                      {item.artist}
                    </h3>
                    
                    {/* Title */}
                    <p 
                      className="text-white/80 font-poppins font-normal mb-3"
                      style={{ width: titleWidth, height: titleHeight, fontSize: '12px', lineHeight: '12px', fontWeight: '400' }}
                    >
                      {item.title}
                    </p>

                    {/* Price */}
                    <p className="text-white font-semibold text-lg">
                      {item.price} ETH
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
