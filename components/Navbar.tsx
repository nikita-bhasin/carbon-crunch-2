'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-transparent fixed w-full top-0 z-50">
      <div className="w-full relative" style={{ maxWidth: '1440px', margin: '0 auto' }}>
        {/* Navbar Container */}
        <div 
          className="flex items-center relative"
          style={{ 
            height: '48px',
            paddingTop: '45px', 
            paddingLeft: '120px', 
            paddingRight: '120px'
          }}
        >
          {/* Logo - Stylized C - Positioned at left: 120px */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xl lg:text-2xl font-bold">C</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - All items: About us, Store, Games, Connect Wallet */}
          {/* Nav links container: 491px x 48px (from Figma: left: 829px, top: 45px) */}
          <div className="hidden md:block" style={{ marginLeft: 'auto' }}>
            <div 
              className="flex items-center"
              style={{ width: '491px', height: '48px', gap: '32px', maxWidth: '491px' }}
            >
              <Link
                href="/about"
                className="text-white hover:text-purple-300 text-base font-medium transition-colors"
                style={{ height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                About us
              </Link>
              <Link
                href="/store"
                className="text-white hover:text-purple-300 text-base font-medium transition-colors"
                style={{ height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Store
              </Link>
              <Link
                href="/games"
                className="text-white hover:text-purple-300 text-base font-medium transition-colors"
                style={{ height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Games
              </Link>
              <button
                className="bg-white text-gray-900 hover:bg-gray-100 text-base font-medium transition-colors rounded-lg"
                style={{ 
                  height: '48px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  paddingLeft: '24px',
                  paddingRight: '24px',
                  borderRadius: '8px'
                }}
              >
                Connect Wallet
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-white/10" style={{ paddingLeft: '120px', paddingRight: '120px' }}>
            <Link
              href="/about"
              className="text-white hover:text-purple-300 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About us
            </Link>
            <Link
              href="/store"
              className="text-white hover:text-purple-300 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Store
            </Link>
            <Link
              href="/games"
              className="text-white hover:text-purple-300 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Games
            </Link>
            <button
              className="w-full bg-white text-gray-900 hover:bg-gray-100 text-base font-medium transition-colors rounded-lg py-2 px-4 mt-2"
              onClick={() => setIsOpen(false)}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
