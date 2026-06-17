'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg gradient-electric flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 5.5C3 3.6 4.6 2 6.5 2H18a2 2 0 0 1 2 2v10.5c0 2.2-1.8 4-4 4H9.5C6.5 18.5 3 16 3 12V5.5z"/>
                <path d="M12 18.5v3"/>
                <path d="M9 21h6"/>
                <path d="M7 12h10"/>
                <path d="M7 8h5"/>
              </svg>
            </div>
            <div>
              <div className="text-navy font-bold text-lg leading-tight tracking-tight">Clearwater</div>
              <div className="text-electric text-xs font-semibold tracking-widest uppercase -mt-0.5">Plumbing Co.</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/services" className="px-4 py-2 text-slate-700 hover:text-navy font-medium text-sm rounded-lg hover:bg-slate-50 transition-colors">Services</Link>
            <Link href="/#why-us" className="px-4 py-2 text-slate-700 hover:text-navy font-medium text-sm rounded-lg hover:bg-slate-50 transition-colors">Why Us</Link>
            <Link href="/#reviews" className="px-4 py-2 text-slate-700 hover:text-navy font-medium text-sm rounded-lg hover:bg-slate-50 transition-colors">Reviews</Link>
            <Link href="/service-areas" className="px-4 py-2 text-slate-700 hover:text-navy font-medium text-sm rounded-lg hover:bg-slate-50 transition-colors">Service Areas</Link>
          </nav>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:2085550187" className="flex items-center gap-2 text-navy font-semibold text-sm hover:text-electric transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.14-1.14a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              (208) 555-0187
            </a>
            <Link href="/#contact" className="px-5 py-2.5 gradient-electric text-white font-semibold text-sm rounded-xl shadow-sm hover:shadow-md hover:opacity-90 transition-all">
              Request Service
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-1">
            <Link href="/services" onClick={() => setOpen(false)} className="px-4 py-3 text-slate-700 hover:text-navy font-medium rounded-lg hover:bg-slate-50 transition-colors">Services</Link>
            <Link href="/#why-us" onClick={() => setOpen(false)} className="px-4 py-3 text-slate-700 hover:text-navy font-medium rounded-lg hover:bg-slate-50 transition-colors">Why Us</Link>
            <Link href="/#reviews" onClick={() => setOpen(false)} className="px-4 py-3 text-slate-700 hover:text-navy font-medium rounded-lg hover:bg-slate-50 transition-colors">Reviews</Link>
            <Link href="/service-areas" onClick={() => setOpen(false)} className="px-4 py-3 text-slate-700 hover:text-navy font-medium rounded-lg hover:bg-slate-50 transition-colors">Service Areas</Link>
            <div className="pt-2 border-t border-slate-100 mt-2 flex flex-col gap-2">
              <a href="tel:2085550187" className="flex items-center justify-center gap-2 text-navy font-semibold py-3 bg-slate-50 rounded-xl">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.14-1.14a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                (208) 555-0187
              </a>
              <Link href="/#contact" onClick={() => setOpen(false)} className="py-3 text-center gradient-electric text-white font-semibold rounded-xl">
                Request Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
