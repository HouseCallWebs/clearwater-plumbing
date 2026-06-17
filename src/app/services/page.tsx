import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Plumbing Services in Boise, ID | Clearwater Plumbing Co.',
  description:
    'Complete plumbing services in Boise and the Treasure Valley. Emergency plumbing, drain cleaning, water heaters, leak detection, sewer lines, bathroom remodels & more. Call (208) 555-0187.',
}

const services = [
  {
    slug: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
    badge: '24/7',
    headline: 'When It Can\'t Wait Until Morning',
    body: "A burst pipe at 2am isn't an inconvenience — it's a crisis. Clearwater Plumbing dispatches a licensed technician to your door within 47 minutes on average, fully equipped to stop the damage and make the repair. We staff emergency lines 24 hours a day, 365 days a year. No answering service, no voicemail — a real dispatcher picks up every call.",
    bullets: [
      'Burst and frozen pipes',
      'Sewage backups',
      'Gas line leaks',
      'Toilet overflows',
      'Water heater failures',
      'Flooding and water shutoffs',
    ],
  },
  {
    slug: 'drain-cleaning',
    title: 'Drain Cleaning',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
        <line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
    ),
    badge: 'Same Day',
    headline: 'Clear Drains — For Good',
    body: "Store-bought drain cleaner masks the symptom while the real buildup — grease, soap, hair, roots — continues to grow. Clearwater uses professional-grade hydro-jetting and auger equipment to physically clear your drains from the inside out. We scope the line first so we know what we're dealing with before we start. Most clogs cleared in a single visit.",
    bullets: [
      'Kitchen sink & grease clogs',
      'Bathroom drains & hair clogs',
      'Floor drain backups',
      'Main line clogs',
      'Hydro-jetting service',
      'Video camera scoping',
    ],
  },
  {
    slug: 'water-heater',
    title: 'Water Heater Installation',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    badge: 'Same Day',
    headline: 'Hot Water When You Need It',
    body: "A cold shower is a minor annoyance. Going without hot water for days while waiting on a backordered unit is not. Clearwater stocks the most common water heater sizes in our warehouse so same-day installation is genuinely possible — not just a marketing line. We install traditional tank units, tankless on-demand heaters, and heat pump water heaters. All work is permitted and inspected.",
    bullets: [
      'Traditional tank water heaters',
      'Tankless water heater installation',
      'Heat pump water heaters',
      'Water heater repair',
      'Expansion tank installation',
      'Gas and electric models',
    ],
  },
  {
    slug: 'leak-detection',
    title: 'Leak Detection & Repair',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    badge: 'Non-Invasive',
    headline: 'Find It Before It Finds You',
    body: "The most expensive plumbing leaks are the ones you can't see. A slow leak inside a wall can rot framing, grow mold, and ruin flooring for months before you notice a water bill spike. Our technicians use acoustic leak detection and thermal imaging to locate leaks precisely — without tearing open walls to look around. We pinpoint first, then open only what needs to be opened.",
    bullets: [
      'Slab leak detection',
      'Under-slab pipe leaks',
      'Wall and ceiling leaks',
      'Acoustic detection equipment',
      'Thermal imaging inspection',
      'Pressure testing',
    ],
  },
  {
    slug: 'pipe-repair',
    title: 'Pipe Repair & Replacement',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    badge: 'All Materials',
    headline: 'Every Pipe Material, Done Right',
    body: "Older Boise homes still have galvanized steel pipes that have spent decades corroding from the inside. Newer construction uses copper or PEX. We work with all of it. When a pipe section fails, we replace it with the right material for your system — and we give you a straight answer about whether you're looking at a spot repair or a whole-house repipe, without steering you toward the more expensive option by default.",
    bullets: [
      'Copper pipe repair & installation',
      'PEX repiping',
      'Galvanized pipe replacement',
      'Whole-house repipes',
      'Pipe rerouting',
      'Water pressure issues',
    ],
  },
  {
    slug: 'sewer-line',
    title: 'Sewer Line Services',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/>
        <path d="M3 9l2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/>
        <path d="M12 3v6"/>
      </svg>
    ),
    badge: 'Camera First',
    headline: 'We Diagnose Before We Dig',
    body: "Sewer line issues range from a simple root intrusion to a fully collapsed pipe — and the fix varies dramatically by what's actually wrong. We run a camera down the line first, so you can see exactly what we see before anyone picks up a shovel. If the line can be cleared with hydro-jetting, we'll tell you. If replacement is necessary, we'll explain why and show you the footage. No guessing, no upselling.",
    bullets: [
      'Sewer camera inspections',
      'Hydro-jetting',
      'Root intrusion removal',
      'Sewer line replacement',
      'Pre-purchase sewer inspections',
      'City connection repairs',
    ],
  },
  {
    slug: 'bathroom-remodel',
    title: 'Bathroom Remodel Plumbing',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
    badge: 'Remodel Ready',
    headline: 'Rough-In to Finish — We Handle It All',
    body: "Bathroom remodels live or die by the rough-in plumbing. Move a toilet two feet in the wrong direction and the entire project gets complicated and expensive. Clearwater's remodel plumbers have coordinated with tile setters, contractors, and designers across hundreds of Boise-area projects. We read plans, hit our deadlines, and leave clean jobsites. Your GC will actually look forward to working with us.",
    bullets: [
      'Toilet and vanity installation',
      'Shower and tub rough-in',
      'Fixture relocation',
      'New bathroom additions',
      'Wet room plumbing',
      'Water supply line upgrades',
    ],
  },
  {
    slug: 'kitchen-plumbing',
    title: 'Kitchen Plumbing',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    ),
    badge: 'Full Kitchen',
    headline: 'From the Faucet to the Dishwasher',
    body: "Kitchen plumbing touches more appliances than most homeowners realize — sink, disposal, dishwasher, refrigerator ice line, pot filler if you have one. When you're remodeling or dealing with a failure, you want a plumber who can handle all of it in one visit. We install, repair, and replace everything from basic faucets to whole kitchen supply line upgrades.",
    bullets: [
      'Faucet installation & repair',
      'Garbage disposal installation',
      'Dishwasher supply & drain',
      'Refrigerator ice line',
      'Pot filler installation',
      'Under-sink plumbing',
    ],
  },
  {
    slug: 'water-softeners',
    title: 'Water Softeners',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
      </svg>
    ),
    badge: 'Hard Water Fix',
    headline: 'Boise Has Hard Water. We Have the Fix.',
    body: "The Treasure Valley sits on some of the hardest municipal water in the Pacific Northwest. You see it in the white scale on your faucets, the films on your shower glass, and the reduced lifespan of your water heater and appliances. A properly sized and installed water softener removes the dissolved minerals before they cause damage. We size, install, and service water softeners — and handle the full plumbing tie-in.",
    bullets: [
      'Whole-home water softener installation',
      'Water quality testing',
      'Filter system installation',
      'Reverse osmosis systems',
      'Saltless softener options',
      'Existing system repair',
    ],
  },
  {
    slug: 'backflow-prevention',
    title: 'Backflow Prevention',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    badge: 'Code Compliant',
    headline: 'Protect Your Water Supply',
    body: "Backflow is what happens when a pressure differential causes contaminated water to flow backward into your clean water supply. It's a health risk, and in Idaho, backflow prevention devices are legally required on commercial properties, irrigation systems, and many residential applications. We install, test, and certify backflow preventers to keep your property in compliance and your water clean.",
    bullets: [
      'Backflow preventer installation',
      'Annual backflow testing',
      'Certification and reporting',
      'Irrigation system backflow',
      'Commercial compliance',
      'Repair and replacement',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="gradient-hero py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-electric/8 -translate-y-20 translate-x-20 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase mb-5" style={{ background: 'rgba(14,165,233,0.15)', borderColor: 'rgba(14,165,233,0.3)', color: '#0ea5e9' }}>
            Our Services
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 tracking-tight">
            Everything Plumbing,<br />Under One Roof
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            From a leaky faucet to a full sewer line replacement — Clearwater handles it all with upfront pricing and no-surprise billing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2085550187" className="inline-flex items-center justify-center gap-2 px-7 py-4 gradient-electric text-white font-bold rounded-2xl shadow hover:opacity-90 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.14-1.14a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call (208) 555-0187
            </a>
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all">
              Request Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map(({ title, icon, badge, headline, body, bullets }) => (
              <div key={title} className="card-lift bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl gradient-electric flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                      {icon}
                    </div>
                    <div>
                      <h2 className="text-navy font-extrabold text-xl">{title}</h2>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full mt-1 inline-block" style={{ color: '#0ea5e9', background: 'rgba(14,165,233,0.1)' }}>{badge}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-slate-800 font-bold text-lg mb-3">{headline}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">{body}</p>

                <div className="grid grid-cols-2 gap-2">
                  {bullets.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm text-slate-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '15+', label: 'Years Serving Boise', desc: 'Family-owned since 2009' },
              { number: '4,800+', label: 'Jobs Completed', desc: 'Residential & commercial' },
              { number: '4.9★', label: 'Google Rating', desc: '620+ verified reviews' },
              { number: '47 min', label: 'Average Response', desc: 'For emergency calls' },
            ].map(({ number, label, desc }) => (
              <div key={label} className="text-center bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="text-4xl font-extrabold text-navy mb-1">{number}</div>
                <div className="font-bold text-sm mb-0.5" style={{ color: '#0ea5e9' }}>{label}</div>
                <div className="text-slate-500 text-xs">{desc}</div>
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
            <h2 className="text-4xl font-extrabold text-white mb-3">Ready to Get Started?</h2>
            <p className="text-slate-300 text-lg">Request your free estimate — we respond within 15 minutes.</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
