'use client';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/career-guide', label: 'Career Guide' },
  { href: '/blog', label: 'Blog' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black leading-none">
            <span className="text-blue-600">Code</span><span className="text-gray-800">Lab</span>
          </span>
          <span className="text-sm font-semibold bg-blue-600 text-white px-2 py-0.5 rounded-full">Hisar</span>
        </Link>

        <div className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-700">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-blue-600 transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Book Demo Class
          </Link>
        </div>

        <button className="md:hidden p-2 rounded-md" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className={`w-6 h-0.5 bg-gray-800 transition-all mb-1.5 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-gray-800 transition-all mb-1.5 ${open ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-gray-800 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3 text-sm font-medium text-gray-700">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="py-1 hover:text-blue-600 border-b border-gray-50" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="mt-1 px-4 py-3 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 font-semibold" onClick={() => setOpen(false)}>
            Book Demo Class
          </Link>
        </div>
      )}
    </nav>
  );
}
