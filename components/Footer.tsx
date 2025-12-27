import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full" style={{ minHeight: '278px' }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ paddingLeft: '120px', paddingRight: '120px' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo */}
          <div className="col-span-1">
            <h3 className="text-3xl font-bold mb-4 font-clash">NFTme</h3>
          </div>

          {/* Navigation Links */}
          <div className="col-span-2">
            <nav className="flex gap-8">
              <Link href="/explore" className="text-white/80 hover:text-white transition-colors text-base font-medium">
                Explore
              </Link>
              <Link href="/marketplace" className="text-white/80 hover:text-white transition-colors text-base font-medium">
                Marketplace
              </Link>
              <Link href="/artists" className="text-white/80 hover:text-white transition-colors text-base font-medium">
                Artists
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-white transition-colors text-base font-medium">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Icons */}
          <div className="col-span-1 flex justify-end gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center cursor-pointer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center cursor-pointer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/60 text-sm text-center">
            Privacy policy | Copyright @ Kartik Bansol 2022. All Rights Reserved. | Terms of service
          </p>
        </div>
      </div>
    </footer>
  )
}
