interface NFTCardProps {
  image: string
  name: string
  bid: string
  time: string
  className?: string
}

export default function NFTCard({ image, name, bid, time, className = '' }: NFTCardProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
        {/* NFT Image - Abstract geometric pattern */}
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          {/* Colorful geometric abstract art */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-yellow-400 to-red-500 opacity-80" />
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-black/40" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-white/20" />
            <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-red-500 rounded-full transform rotate-45" />
            <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-blue-500 rounded-full" />
          </div>
        </div>
        
        {/* Overlay Card */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-4 rounded-b-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-gray-900 text-sm font-medium truncate">{name}</p>
            </div>
          </div>
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-gray-500 text-xs">Current Bid</p>
              <p className="text-gray-900 font-semibold">+ {bid} ETH</p>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-xs">Time Left</p>
              <p className="text-gray-900 font-semibold text-sm">{time}</p>
            </div>
          </div>
          <button className="w-full bg-gradient-button text-white py-2.5 px-4 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
            PLACE A BID
          </button>
        </div>
      </div>
    </div>
  )
}
