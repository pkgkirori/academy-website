import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 pt-14 pb-6">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl font-black leading-none">
              <span className="text-white">Code</span><span className="text-blue-400">Lab</span>
            </span>
            <span className="text-xs font-semibold bg-blue-600 text-white px-2 py-0.5 rounded-full">Hisar</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            A coding coaching centre in Hisar, Haryana. We teach real skills that get you hired.
          </p>
          <a
            href="https://instagram.com/codelabhisar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm hover:text-pink-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @codelabhisar
          </a>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Courses</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/courses" className="hover:text-blue-400 transition-colors">Full-Stack Web Dev</Link></li>
            <li><Link href="/courses" className="hover:text-blue-400 transition-colors">DSA & Competitive Coding</Link></li>
            <li><Link href="/courses" className="hover:text-blue-400 transition-colors">Python / AI / ML</Link></li>
            <li><Link href="/courses" className="hover:text-blue-400 transition-colors">C / C++ / Java Programming</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Learn More</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/career-guide" className="hover:text-blue-400 transition-colors">Career Guide</Link></li>
            <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
            <li><Link href="/success-stories" className="hover:text-blue-400 transition-colors">Success Stories</Link></li>
            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">📞</span>
              <span>+91 9992233434</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">✉️</span>
              <span>info@codelabhisar.com</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">📍</span>
              <span>Hisar, Haryana, India</span>
            </li>
          </ul>
          <a
            href="https://wa.me/919992233434"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CodeLab Hisar. All rights reserved. | Hisar, Haryana
      </div>
    </footer>
  );
}
