'use client'

import { useState } from 'react'

const services = [
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
  'Other',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-10 text-center shadow-xl">
        <div className="w-16 h-16 gradient-electric rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 className="text-navy font-extrabold text-2xl mb-2">Request Received!</h3>
        <p className="text-slate-600 mb-4">
          We&apos;ll contact you within 15 minutes during business hours. For emergencies, call us directly.
        </p>
        <a href="tel:2085550187" className="inline-flex items-center gap-2 px-6 py-3 gradient-electric text-white font-bold rounded-xl">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l1.14-1.14a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          (208) 555-0187
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl">
      <h3 className="text-navy font-extrabold text-2xl mb-1">Request a Free Estimate</h3>
      <p className="text-slate-500 text-sm mb-6">We respond within 15 minutes during business hours.</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-navy font-semibold text-sm mb-1.5">First Name *</label>
          <input
            type="text"
            required
            placeholder="John"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-navy placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
            style={{ '--tw-ring-color': '#0ea5e9' } as React.CSSProperties}
          />
        </div>
        <div>
          <label className="block text-navy font-semibold text-sm mb-1.5">Last Name *</label>
          <input
            type="text"
            required
            placeholder="Smith"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-navy placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-navy font-semibold text-sm mb-1.5">Phone Number *</label>
        <input
          type="tel"
          required
          placeholder="(208) 555-0000"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-navy placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
        />
      </div>

      <div className="mb-4">
        <label className="block text-navy font-semibold text-sm mb-1.5">Email Address</label>
        <input
          type="email"
          placeholder="john@example.com"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-navy placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
        />
      </div>

      <div className="mb-4">
        <label className="block text-navy font-semibold text-sm mb-1.5">Service Needed *</label>
        <select
          required
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-navy text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-white"
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-navy font-semibold text-sm mb-1.5">City / Area *</label>
        <input
          type="text"
          required
          placeholder="Boise, Meridian, Eagle..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-navy placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
        />
      </div>

      <div className="mb-6">
        <label className="block text-navy font-semibold text-sm mb-1.5">Describe the Issue</label>
        <textarea
          rows={3}
          placeholder="Tell us what's happening so we can prepare the right tools and parts..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-navy placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 gradient-electric text-white font-bold text-lg rounded-2xl shadow hover:shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
      >
        Send My Request
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"/>
          <path d="m12 5 7 7-7 7"/>
        </svg>
      </button>

      <p className="text-center text-slate-400 text-xs mt-4">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  )
}
