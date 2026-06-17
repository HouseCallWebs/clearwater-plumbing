import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-electric flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 5.5C3 3.6 4.6 2 6.5 2H18a2 2 0 0 1 2 2v10.5c0 2.2-1.8 4-4 4H9.5C6.5 18.5 3 16 3 12V5.5z"/>
                  <path d="M12 18.5v3"/><path d="M9 21h6"/>
                  <path d="M7 12h10"/><path d="M7 8h5"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">Clearwater Plumbing Co.</div>
                <div className="text-electric text-xs font-semibold tracking-widest uppercase -mt-0.5">Fast. Clean. Done Right.</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Boise's most trusted plumbing team. Licensed, insured, and built on a reputation for doing it right the first time.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:2085550187" className="flex items-center gap-2 text-slate-300 hover:text-electric transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.14-1.14a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                (208) 555-0187
              </a>
              <a href="mailto:service@clearwaterplumbing.com" className="flex items-center gap-2 text-slate-300 hover:text-electric transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                service@clearwaterplumbing.com
              </a>
              <span className="flex items-center gap-2 text-slate-400">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Boise, ID
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-electric mb-5">Services</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              {[
                'Emergency Plumbing',
                'Drain Cleaning',
                'Water Heater Installation',
                'Leak Detection & Repair',
                'Pipe Repair & Replacement',
                'Sewer Line Services',
                'Bathroom Remodel Plumbing',
                'Kitchen Plumbing',
                'Water Softeners',
                'Backflow Prevention',
              ].map((s) => (
                <li key={s}>
                  <Link href="/services" className="hover:text-white transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-electric mb-5">Service Areas</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-400">
              {[
                'Boise',
                'Meridian',
                'Nampa',
                'Caldwell',
                'Eagle',
                'Star',
                'Kuna',
                'Garden City',
                'Middleton',
                'Mountain Home',
              ].map((city) => (
                <li key={city}>
                  <Link href="/service-areas" className="hover:text-white transition-colors">{city}, ID</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency + Trust */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-electric mb-5">24/7 Emergency</h3>
            <div className="bg-navy-800 border border-navy-700 rounded-2xl p-5 mb-5">
              <div className="text-white font-bold text-lg mb-1">Burst pipe? Flooding?</div>
              <p className="text-slate-400 text-sm mb-4">We answer every call, every hour of the day. No voicemail, no wait lists.</p>
              <a href="tel:2085550187" className="block text-center py-3 gradient-electric text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity">
                Call Now — (208) 555-0187
              </a>
            </div>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0"></div>
                Licensed & Insured — Idaho Lic. #PL-48291
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0"></div>
                5-Star Rated on Google & BBB
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0"></div>
                Upfront Pricing — No Surprises
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0"></div>
                Workmanship Guarantee
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Clearwater Plumbing Co. All rights reserved. Boise, ID</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-electric inline-block"></span>
            Serving the Treasure Valley since 2009
          </span>
        </div>
      </div>
    </footer>
  )
}
