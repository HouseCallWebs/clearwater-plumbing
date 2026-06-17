import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Plumber Boise ID | 24/7 Emergency Plumbing — Clearwater Plumbing Co.',
  description:
    "Boise's #1 rated plumber. Fast 24/7 emergency service, drain cleaning, water heaters, leak detection & more. Average response time: 47 minutes. Call (208) 555-0187.",
}

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    ),
    title: 'Emergency Plumbing',
    desc: 'Burst pipes, flooding, gas leaks — we respond in under an hour, 24 hours a day, 365 days a year.',
    tag: '24/7',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12h8M12 8v8"/>
      </svg>
    ),
    title: 'Drain Cleaning',
    desc: 'Slow drains, recurring clogs, or a completely blocked line — our hydro-jetting tech clears it fast and keeps it clear.',
    tag: 'Same Day',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="9" y1="10" x2="15" y2="10"/>
        <line x1="9" y1="14" x2="15" y2="14"/>
      </svg>
    ),
    title: 'Water Heater Installation',
    desc: 'Traditional tank or tankless — we install, repair, and replace all major brands with same-day availability.',
    tag: 'Same Day',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: 'Leak Detection & Repair',
    desc: 'Hidden leaks cause thousands in damage before you notice them. Our non-invasive detection finds the problem without tearing up your home.',
    tag: 'Precision',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    title: 'Pipe Repair & Replacement',
    desc: 'Copper, PEX, galvanized — we work with every pipe material and provide honest assessments before any work begins.',
    tag: 'All Materials',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
        <line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
    ),
    title: 'Sewer Line Services',
    desc: 'Camera inspections, hydro-jetting, and full sewer line replacement. We diagnose before we dig.',
    tag: 'Camera Inspection',
  },
]

const whyItems = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Upfront, Honest Pricing',
    desc: "You approve the price before we turn a single wrench. No hidden fees, no 'surprise' charges on the final bill. What we quote is what you pay.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: '47-Minute Average Response',
    desc: 'When your toilet overflows at 2am, every minute counts. Our dispatch system routes the nearest available tech to you — fast.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: 'Licensed & Fully Insured',
    desc: 'Idaho Plumbing License #PL-48291. Every technician is background-checked, drug-tested, and covered under our comprehensive liability insurance.',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'We Leave It Cleaner Than We Found It',
    desc: 'Tarps down before we start, everything cleaned up before we leave. Our techs treat your home like their own. Your floors, walls, and fixtures are protected.',
  },
]

const testimonials = [
  {
    name: 'Sarah K.',
    location: 'Meridian, ID',
    rating: 5,
    text: "Woke up at 6am to a burst pipe under my kitchen sink. Called Clearwater and a tech was at my door by 7:15. He had it fixed in under an hour and was genuinely pleasant to deal with. I've already referred them to my neighbor.",
  },
  {
    name: 'Mike & Jennifer T.',
    location: 'Eagle, ID',
    rating: 5,
    text: 'We had three plumbers give us quotes on a whole-house repiping. Clearwater came in competitive, explained everything clearly, and finished two days ahead of schedule. Zero issues. These guys are the real deal.',
  },
  {
    name: 'David R.',
    location: 'Boise, ID',
    rating: 5,
    text: "I've used Clearwater twice now — once for a water heater install, once for a slow drain that turned out to be a much bigger sewer issue. Both times: fair price, no upsell pressure, clean work. They've got a customer for life.",
  },
  {
    name: 'Amanda L.',
    location: 'Nampa, ID',
    rating: 5,
    text: 'Their tech used a camera to find a leak inside our wall without cutting a single hole until he knew exactly where it was. Saved us a ton of drywall repair. Smart, professional, and worth every penny.',
  },
  {
    name: 'Tom & Carol H.',
    location: 'Kuna, ID',
    rating: 5,
    text: "The price they quoted on the phone was the exact amount on the invoice. When's the last time that happened with a contractor? Highly recommend — especially for anyone who's been burned by surprise charges before.",
  },
]

const serviceAreas = [
  { city: 'Boise', desc: 'Greater Boise including Downtown, North End & the Bench' },
  { city: 'Meridian', desc: 'All Meridian neighborhoods including Eagle Road corridor' },
  { city: 'Nampa', desc: 'Full Nampa coverage including Canyon County' },
  { city: 'Eagle', desc: 'Eagle, Floating Feather, and surrounding areas' },
  { city: 'Caldwell', desc: 'Caldwell and surrounding Canyon County communities' },
  { city: 'Star', desc: 'Star, Middleton, and northwest Treasure Valley' },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="gradient-hero min-h-[88vh] flex items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-electric/5 -translate-y-24 translate-x-24 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-electric/8 translate-y-24 -translate-x-16 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric/15 border border-electric/30 text-electric text-xs font-semibold tracking-wide mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse"></span>
                Serving Boise &amp; Treasure Valley Since 2009
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
                Plumbing
                <br />
                <span style={{ color: '#0ea5e9' }}>Done Right.</span>
                <br />
                <span className="text-slate-300 text-4xl sm:text-5xl lg:text-6xl font-bold">First Time.</span>
              </h1>

              <p className="text-slate-300 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
                Boise's most trusted plumbing team. Licensed, insured, and built on a 15-year reputation for honest pricing and work that holds up.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="tel:2085550187"
                  className="flex items-center justify-center gap-3 px-7 py-4 gradient-electric text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.14-1.14a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  (208) 555-0187
                </a>
                <Link
                  href="#contact"
                  className="flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/20 text-white font-semibold text-lg rounded-2xl hover:bg-white/10 transition-all"
                >
                  Request Service
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>

              <div className="flex flex-wrap gap-5 text-sm">
                {['Licensed & Insured', '5-Star Rated', 'Upfront Pricing'].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-slate-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 flex items-center gap-4 float-badge">
                <div className="w-12 h-12 gradient-electric rounded-xl flex items-center justify-center flex-shrink-0 pulse-live shadow-lg">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-xl">47 Minutes</div>
                  <div className="text-slate-300 text-sm">Average emergency response time</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-green-400 text-xs font-semibold">Live — Techs available now</span>
                  </div>
                </div>
              </div>

              {[
                { number: '4,800+', label: 'Jobs Completed', sub: 'Since 2009' },
                { number: '4.9★', label: 'Average Rating', sub: '620+ Google Reviews' },
                { number: '15+', label: 'Years in Business', sub: 'Treasure Valley trusted' },
                { number: '100%', label: 'Satisfaction Rate', sub: 'Or we make it right' },
              ].map(({ number, label, sub }) => (
                <div key={label} className="bg-white/8 border border-white/12 rounded-2xl p-5 text-center">
                  <div className="text-3xl font-extrabold text-white mb-1">{number}</div>
                  <div className="text-sm font-semibold mb-0.5" style={{ color: '#0ea5e9' }}>{label}</div>
                  <div className="text-slate-400 text-xs">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATED TRUST BAR */}
      <section className="bg-navy py-4 overflow-hidden border-b border-white/10">
        <div className="flex trust-bar-track whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              {[
                '✓ Licensed & Insured — Idaho Lic. #PL-48291',
                '✓ 24/7 Emergency Service',
                '✓ Upfront Pricing — No Surprises',
                '✓ 5-Star Rated on Google',
                '✓ 47-Min Average Response',
                '✓ Same-Day Appointments',
                '✓ Workmanship Guarantee',
                '✓ Background-Checked Technicians',
                '✓ Serving the Treasure Valley Since 2009',
              ].map((item) => (
                <span key={item + i} className="inline-flex items-center px-8 text-sm font-medium text-slate-300">
                  <span className="mr-2" style={{ color: '#0ea5e9' }}>●</span>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-slate-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ background: 'rgba(14,165,233,0.1)', color: '#0ea5e9' }}>
              What We Do
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-navy mb-4">
              Full-Service Plumbing,<br />Start to Finish
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From a dripping faucet to a full bathroom renovation — one call, one team, one standard of quality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, desc, tag }) => (
              <div key={title} className="card-lift bg-white rounded-2xl p-7 border border-slate-100 shadow-sm group">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:text-white" style={{ background: 'rgba(14,165,233,0.1)', color: '#0ea5e9' }}>
                    {icon}
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ color: '#0ea5e9', background: 'rgba(14,165,233,0.1)' }}>{tag}</span>
                </div>
                <h3 className="text-navy font-bold text-xl mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 gradient-electric text-white font-bold rounded-2xl shadow hover:shadow-lg hover:opacity-90 transition-all">
              View All Services
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CLEARWATER */}
      <section className="py-24 bg-white" id="why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ background: 'rgba(14,165,233,0.1)', color: '#0ea5e9' }}>
                Why Clearwater
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-navy mb-5">
                The Difference Is in the Details
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Any plumber can unclog a drain. What sets Clearwater apart is how we do it — the communication before, the care during, and the accountability after.
              </p>
              <div className="flex flex-col gap-1 mb-8">
                {['No job left half-finished', 'Photos before & after every repair', 'Every tech drives a fully-stocked van', 'We answer our phone — always'].map((pt) => (
                  <div key={pt} className="flex items-center gap-3 py-2">
                    <div className="w-6 h-6 rounded-full gradient-electric flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{pt}</span>
                  </div>
                ))}
              </div>
              <a href="tel:2085550187" className="inline-flex items-center gap-3 px-7 py-4 gradient-electric text-white font-bold rounded-2xl shadow hover:shadow-lg hover:opacity-90 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.14-1.14a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Get a Free Estimate
              </a>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {whyItems.map(({ icon, title, desc }) => (
                <div key={title} className="card-lift flex gap-5 bg-slate-50 border border-slate-100 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl gradient-electric flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-navy font-bold text-lg mb-1">{title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-slate-50" id="reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ background: 'rgba(14,165,233,0.1)', color: '#0ea5e9' }}>
              Customer Reviews
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-navy mb-4">
              Don&apos;t Take Our Word for It
            </h2>
            <div className="flex items-center justify-center gap-3">
              <StarRating count={5} />
              <span className="text-slate-700 font-semibold">4.9 out of 5 — 620+ verified reviews</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map(({ name, location, rating, text }) => (
              <div key={name} className="card-lift bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
                <StarRating count={rating} />
                <p className="text-slate-700 text-sm leading-relaxed mt-4 mb-5">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-full gradient-electric flex items-center justify-center text-white font-bold text-sm">
                    {name[0]}
                  </div>
                  <div>
                    <div className="text-navy font-bold text-sm">{name}</div>
                    <div className="text-slate-400 text-xs">{location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {testimonials.slice(3).map(({ name, location, rating, text }) => (
              <div key={name} className="card-lift bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
                <StarRating count={rating} />
                <p className="text-slate-700 text-sm leading-relaxed mt-4 mb-5">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-full gradient-electric flex items-center justify-center text-white font-bold text-sm">
                    {name[0]}
                  </div>
                  <div>
                    <div className="text-navy font-bold text-sm">{name}</div>
                    <div className="text-slate-400 text-xs">{location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-24 bg-white" id="areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={{ background: 'rgba(14,165,233,0.1)', color: '#0ea5e9' }}>
              Coverage Area
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-navy mb-4">
              Serving the Treasure Valley
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From Boise to Caldwell, Eagle to Kuna — if you&apos;re in the Treasure Valley, we&apos;re your plumber.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {serviceAreas.map(({ city, desc }) => (
              <Link key={city} href="/service-areas" className="card-lift group flex items-start gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-blue-50 transition-all">
                <div className="w-10 h-10 rounded-xl gradient-electric flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="text-navy font-bold text-lg group-hover:text-electric transition-colors">{city}, ID</div>
                  <div className="text-slate-500 text-sm mt-0.5">{desc}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/service-areas" className="inline-flex items-center gap-2 font-bold hover:underline" style={{ color: '#0ea5e9' }}>
              See all 10 service areas
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-24 gradient-hero relative overflow-hidden" id="contact">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-electric/8 -translate-y-20 translate-x-20 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase mb-5" style={{ background: 'rgba(14,165,233,0.15)', borderColor: 'rgba(14,165,233,0.3)', color: '#0ea5e9' }}>
                Request Service
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
                Get a Free Estimate Today
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Fill out the form and we&apos;ll get back to you within 15 minutes during business hours — or call us directly for immediate dispatch.
              </p>

              <div className="flex flex-col gap-5">
                <a href="tel:2085550187" className="flex items-center gap-4 rounded-2xl p-5 hover:bg-white/15 transition-colors" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <div className="w-12 h-12 gradient-electric rounded-xl flex items-center justify-center flex-shrink-0 shadow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.14-1.14a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs font-semibold uppercase tracking-widest">Call Us Directly</div>
                    <div className="text-white font-bold text-xl">(208) 555-0187</div>
                    <div className="text-green-400 text-xs font-semibold mt-0.5">● Available 24/7 for emergencies</div>
                  </div>
                </a>

                <a href="mailto:service@clearwaterplumbing.com" className="flex items-center gap-4 rounded-2xl p-5 hover:bg-white/15 transition-colors" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <div className="w-12 h-12 gradient-electric rounded-xl flex items-center justify-center flex-shrink-0 shadow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs font-semibold uppercase tracking-widest">Email Us</div>
                    <div className="text-white font-bold">service@clearwaterplumbing.com</div>
                    <div className="text-slate-400 text-xs mt-0.5">Response within 15 minutes</div>
                  </div>
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
