"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="py-6 flex items-center justify-between">
      <Link href="/" className="text-lg font-medium">
        Bartosz
      </Link>

      {/* Mobile menu button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="#Projects" className="text-zinc-200  hover:text-teal-500 transition-colors">
          Work
        </Link>
        <Link href="#About" className="text-zinc-200  hover:text-teal-500 transition-colors">
          About
        </Link>
        <Link href="#Contact" className="text-zinc-200  hover:text-teal-500 transition-colors">
          Contact
        </Link>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-20 bg-black p-4 md:hidden z-50">
          <div className="flex flex-col space-y-4 py-4">
            <Link
              href="#"
              className="text-zinc-400 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="#"
              className="text-zinc-400 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-zinc-400 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

