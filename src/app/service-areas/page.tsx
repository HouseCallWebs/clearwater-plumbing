import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Plumber Service Areas — Boise, Meridian, Nampa, Eagle & Treasure Valley',
  description:
    'Clearwater Plumbing serves Boise, Meridian, Nampa, Caldwell, Eagle, Star, Kuna, Garden City, Middleton & Mountain Home. Licensed Idaho plumber with 47-min average emergency response. Call (208) 555-0187.',
}

const areas = [
  {
    city: 'Boise',
    state: 'ID',
    slug: 'boise',
    headline: 'Plumber in Boise, ID',
    desc: "As Clearwater's home base, Boise is where we've built our reputation over 15 years. From the North End's old Craftsman bungalows with aging galvanized pipes to new construction in the Southeast Boise developments, we know this city's plumbing inside and out. Downtown lofts, West Bench single-families, East Boise — wherever you are, a tech is nearby.",
    neighborhoods: ['Downtown Boise', 'North End', 'East Boise', 'The Bench', 'Southeast Boise', 'West Boise'],
    phone: '(208) 555-0187',
  },
  {
    city: 'Meridian',
    state: 'ID',
    slug: 'meridian',
    headline: 'Plumber in Meridian, ID',
    desc: "Meridian is Idaho's fastest-growing city, and new construction brings new plumbing complexity — builder-grade water heaters that fail early, irrigation systems, PEX systems that need experienced hands. We service all Meridian neighborhoods from the established communities near Eagle Road to the new subdivisions pushing south toward the interstate.",
    neighborhoods: ['Meridian Road Corridor', 'Ten Mile District', 'Heritage Sub', 'The Landing', 'Carbonara', 'Isola Creek'],
    phone: '(208) 555-0187',
  },
  {
    city: 'Nampa',
    state: 'ID',
    slug: 'nampa',
    headline: 'Plumber in Nampa, ID',
    desc: "Nampa's blend of older homes and rapid new development keeps our Nampa-area crew busy year-round. We handle everything from replacing decades-old galvanized supply lines in historic Nampa homes to installing tankless water heaters in new construction. Canyon County homeowners can count on us for fast response times — we're not just a Boise company that happens to drive out occasionally.",
    neighborhoods: ['Downtown Nampa', 'Midland', 'Caldwell Blvd Corridor', 'Happy Valley', 'Northwest Nampa'],
    phone: '(208) 555-0187',
  },
  {
    city: 'Eagle',
    state: 'ID',
    slug: 'eagle',
    headline: 'Plumber in Eagle, ID',
    desc: "Eagle's custom homes and newer planned communities come with high expectations — and so do our clients there. Eagle homeowners investing in premium finishes deserve plumbing work that matches. We're experienced with the high-end fixtures, spa shower systems, and multi-zone water distribution that show up in Eagle's newer construction. We treat every job with the same level of care.",
    neighborhoods: ['Eagle Road Corridor', 'Floating Feather', 'Banbury Meadows', 'Linder Road Area', 'Brookfield'],
    phone: '(208) 555-0187',
  },
  {
    city: 'Caldwell',
    state: 'ID',
    slug: 'caldwell',
    headline: 'Plumber in Caldwell, ID',
    desc: "Caldwell's older housing stock means many homes still have original plumbing from the mid-20th century. We regularly find galvanized steel that's corroded to pencil-thin interior diameter, reducing water pressure to a trickle. If you've noticed low pressure or discolored water, it's worth having us take a look. Canyon County's water is also some of the hardest in the region — water softener installations are among our most common Caldwell jobs.",
    neighborhoods: ['Downtown Caldwell', 'Indian Creek area', 'Caldwell Industrial District', 'West Caldwell'],
    phone: '(208) 555-0187',
  },
  {
    city: 'Star',
    state: 'ID',
    slug: 'star',
    headline: 'Plumber in Star, ID',
    desc: "Star's growth from a small farming community into a sought-after bedroom community has accelerated in recent years. Newer subdivisions here often have well and septic systems rather than municipal connections — a different set of plumbing considerations. We work with both municipal and private well systems and can diagnose septic-related plumbing problems when they arise.",
    neighborhoods: ['Star Road Area', 'Phyllis Canal District', 'North Star', 'West Star'],
    phone: '(208) 555-0187',
  },
  {
    city: 'Kuna',
    state: 'ID',
    slug: 'kuna',
    headline: 'Plumber in Kuna, ID',
    desc: "Kuna has grown steadily as families look for more square footage without the Meridian price tags. We service Kuna regularly and understand the mix of older agricultural-era homes and the newer single-family developments on the west side of town. Kuna is within our standard service area — no surcharge, same response times, same pricing.",
    neighborhoods: ['Downtown Kuna', 'Southern Kuna Developments', 'Swan Falls Road Area'],
    phone: '(208) 555-0187',
  },
  {
    city: 'Garden City',
    state: 'ID',
    slug: 'garden-city',
    headline: 'Plumber in Garden City, ID',
    desc: "Tucked between Boise and Eagle along the Boise River, Garden City has evolved into one of the Treasure Valley's most interesting communities — a mix of light industrial, creative businesses, and residential pockets. We serve Garden City's diverse property types, from vintage homes to new-build condos along the greenbelt.",
    neighborhoods: ['Boise River District', 'Chinden Blvd Corridor', 'West Garden City', 'Garden City Greenbelt Area'],
    phone: '(208) 555-0187',
  },
  {
    city: 'Middleton',
    state: 'ID',
    slug: 'middleton',
    headline: 'Plumber in Middleton, ID',
    desc: "Middleton sits at the northwest edge of our service area and is seeing significant residential growth as commuters look to Canyon County for value. We cover Middleton with the same urgency and pricing as our core Boise market. No 'out of area' fees, no reduced priority — Middleton customers get the same crew, same vans, same quality.",
    neighborhoods: ['Middleton Road Corridor', 'East Middleton', 'North Middleton Developments'],
    phone: '(208) 555-0187',
  },
  {
    city: 'Mountain Home',
    state: 'ID',
    slug: 'mountain-home',
    headline: 'Plumber in Mountain Home, ID',
    desc: "Mountain Home sits about 45 miles southeast of Boise and serves as home to a significant military community at Mountain Home Air Force Base, plus a strong agricultural and ranching presence. We extend our service area to Mountain Home and can handle everything from base housing plumbing issues to rural property well systems. Call to confirm availability for emergency response.",
    neighborhoods: ['Downtown Mountain Home', 'Mountain Home AFB Area', 'Mountain Home Rural'],
    phone: '(208) 555-0187',
  },
]

export default function ServiceAreasPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="gradient-hero py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-electric/8 -translate-y-20 translate-x-20 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase mb-5" style={{ background: 'rgba(14,165,233,0.15)', borderColor: 'rgba(14,165,233,0.3)', color: '#0ea5e9' }}>
            Coverage Map
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight">
            Plumbing Service Across<br />the Treasure Valley
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Clearwater Plumbing serves 10 communities across Ada and Canyon County. One call connects you to a licensed tech who knows your neighborhood.
          </p>
          <a href="tel:2085550187" className="inline-flex items-center justify-center gap-2 px-7 py-4 gradient-electric text-white font-bold rounded-2xl shadow hover:opacity-90 transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.14-1.14a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call (208) 555-0187
          </a>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className="py-10 bg-white border-b border-slate-100 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {areas.map(({ city, slug }) => (
              <a key={slug} href={`#${slug}`} className="px-4 py-2 text-sm font-semibold rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-[#0ea5e9] hover:text-white hover:border-[#0ea5e9] transition-all">
                {city}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AREA DETAIL CARDS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {areas.map(({ city, state, slug, headline, desc, neighborhoods, phone }) => (
              <div key={slug} id={slug} className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-sm scroll-mt-36">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl gradient-electric flex items-center justify-center flex-shrink-0 shadow-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                      </div>
                      <h2 className="text-navy font-extrabold text-2xl">{headline}</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>
                    <div>
                      <div className="text-sm font-bold text-navy uppercase tracking-widest mb-3">Areas We Cover in {city}</div>
                      <div className="flex flex-wrap gap-2">
                        {neighborhoods.map((n) => (
                          <span key={n} className="px-3 py-1.5 rounded-lg text-sm font-medium" style={{ background: 'rgba(14,165,233,0.08)', color: '#0284c7' }}>
                            {n}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <div className="text-navy font-bold text-lg mb-1">Serving {city}, {state}</div>
                      <div className="flex items-center gap-1.5 mb-4">
                        {[1,2,3,4,5].map(i => (
                          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                          </svg>
                        ))}
                        <span className="text-xs text-slate-500 ml-1">4.9 avg</span>
                      </div>
                      <div className="flex flex-col gap-2 text-sm text-slate-600 mb-5">
                        <div className="flex items-center gap-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Licensed & Insured
                        </div>
                        <div className="flex items-center gap-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          24/7 Emergency Service
                        </div>
                        <div className="flex items-center gap-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Upfront, Flat Pricing
                        </div>
                        <div className="flex items-center gap-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          No Service Call Fee
                        </div>
                      </div>
                      <a href={`tel:${phone.replace(/\D/g,'')}`} className="block text-center py-3 gradient-electric text-white font-bold rounded-xl text-sm hover:opacity-90 transition-opacity shadow-sm">
                        Call {phone}
                      </a>
                    </div>
                    <Link href="/#contact" className="block text-center py-3 border-2 border-navy text-navy font-bold rounded-xl text-sm hover:bg-navy hover:text-white transition-all">
                      Request Estimate
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 gradient-hero relative overflow-hidden" id="contact">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-electric/8 -translate-y-20 translate-x-20 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-white mb-3">Get a Free Estimate in Your Area</h2>
            <p className="text-slate-300 text-lg">Tell us your city and what you need — we respond within 15 minutes.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
