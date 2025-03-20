"use client"

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-zinc-900">
    <div className="flex flex-col md:flex-row justify-items-end w-screen items-start md:items-center">
      
      <div className="flex space-x-6 mt-4 md:mt-0">
        <Link href="#" className="text-zinc-200  hover:text-teal-500  transition-colors">
          LinkedIn
        </Link>
        <Link href="#" className="text-zinc-200 hover:text-teal-500  transition-colors">
          GitHub
        </Link>
      </div>
    </div>
  </footer>
  )
};

