import Navbar from '@/components/Navbar'
import NFTCard from '@/components/NFTCard'
import FeaturedNFT from '@/components/FeaturedNFT'
import NFTCardGrid from '@/components/NFTCardGrid'
import PopularArtists from '@/components/PopularArtists'
import JoinCommunity from '@/components/JoinCommunity'
import Footer from '@/components/Footer'

export default function Home() {
  const trendingItems = [
    { artist: 'Sebastian', title: 'Golden Flower', price: '2.3' },
    { artist: 'Ferhat Deniz', title: 'Golden Flower', price: '2.3' },
    { artist: 'Polina Kondrashova', title: 'Golden Flower', price: '2.3' },
    { artist: 'Javier Miranda', title: 'Golden Flower', price: '2.3' },
  ]

  const popularArtists = [
    { name: 'Ferhat Deniz', image: '/artist-1.jpg' },
    { name: 'Sebastian', image: '/artist-2.jpg' },
    { name: 'Javier Miranda', image: '/artist-3.jpg' },
    { name: 'Erick Butler', image: '/artist-4.jpg' },
  ]

  return (
    <main className="min-h-screen bg-gradient-purple overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" style={{ paddingLeft: '120px', paddingRight: '120px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="relative z-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-clash font-medium text-white mb-6" style={{ lineHeight: '125%', letterSpacing: '0.2px' }}>
                Discover Rare Collections
                <span className="block">Of Art & NFT&apos;s</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-lg">
                Create, Explore, & Collect Digital Art NFTs
              </p>
              <button 
                className="bg-gradient-button text-white px-8 py-4 rounded-[10px] font-semibold hover:opacity-90 transition-opacity shadow-lg"
                style={{ width: '224px', height: '59px' }}
              >
                EXPLORE
              </button>

              {/* Stats Section */}
              <div className="mt-12 lg:mt-16 flex gap-8 flex-wrap">
                <div style={{ width: '118px', minHeight: '73px' }}>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2" style={{ color: '#FFFFFF' }}>
                    32k+
                  </div>
                  <div className="text-white/70 text-sm sm:text-base">Artwork</div>
                </div>
                <div style={{ width: '120px', minHeight: '73px' }}>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2" style={{ color: '#FFFFFF' }}>
                    20k+
                  </div>
                  <div className="text-white/70 text-sm sm:text-base">Auctions</div>
                </div>
                <div style={{ width: '107px', minHeight: '73px' }}>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2" style={{ color: '#FFFFFF' }}>
                    10k+
                  </div>
                  <div className="text-white/70 text-sm sm:text-base">Artists</div>
                </div>
              </div>
            </div>

            {/* Right Side - NFT Cards */}
            <div className="relative hidden lg:block h-[600px]">
              <div className="relative h-full">
                {/* Back NFT Card */}
                <div className="absolute left-0 bottom-0 transform rotate-[-8deg] opacity-70 z-0 w-56 xl:w-64">
                  <NFTCard
                    image="/nft-1.jpg"
                    name="labore"
                    bid="2.4"
                    time="16h 57m"
                  />
                </div>
                
                {/* Front NFT Card */}
                <div className="absolute right-0 top-0 transform rotate-[8deg] z-10 w-56 xl:w-64">
                  <NFTCard
                    image="/nft-2.jpg"
                    name="labore"
                    bid="2.8"
                    time="1h 51m 14s"
                  />
                </div>
              </div>
            </div>

            {/* Mobile NFT Preview */}
            <div className="lg:hidden mt-8 flex justify-center">
              <div className="w-full max-w-sm">
                <NFTCard
                  image="/nft-1.jpg"
                  name="labore"
                  bid="2.8"
                  time="1h 51m 14s"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Background Gradient Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-3xl -z-0" />
      </section>

      {/* Featured Bitcoin Art Work Section */}
      <FeaturedNFT
        title="Bitcoin Art Work"
        creator="Jonathan Borba"
        currentBid="1.09"
        currentBidUSD="1,835"
        hours="18"
        minutes="57"
        seconds="14"
        image="/bitcoin-art.jpg"
      />

      {/* Trending This Week Section */}
      <NFTCardGrid
        title="Trending This Week"
        description="Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        items={trendingItems}
      />

      {/* Popular Artists Section */}
      <PopularArtists artists={popularArtists} />

      {/* Join Community Section */}
      <JoinCommunity />

      {/* Footer */}
      <Footer />
    </main>
  )
}
