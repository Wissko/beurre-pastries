'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Visit() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Replace with actual form endpoint (Formspree, etc.)
    setSent(true)
  }

  const infoItems = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 1C6.24 1 4 3.24 4 6c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5zm0 6.75A1.75 1.75 0 1 1 9 4.25a1.75 1.75 0 0 1 0 3.5z" fill="currentColor"/>
        </svg>
      ),
      label: 'Location',
      value: 'Brisbane, Queensland, Australia',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M9 5v4l2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      ),
      label: 'Hours',
      value: 'Tue – Fri: 7am – 4pm\nSat – Sun: 7am – 2pm',
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.2"/>
          <circle cx="13.5" cy="4.5" r="0.75" fill="currentColor"/>
        </svg>
      ),
      label: 'Instagram',
      value: '@beurrepastriesbne',
      link: 'https://instagram.com/beurrepastriesbne',
    },
  ]

  return (
    <section
      id="visit"
      className="section-padding"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p
            className="font-jost text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--color-gold)' }}
          >
            Find Us
          </p>
          <h2
            className="font-cormorant italic"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)', color: 'var(--color-dark)' }}
          >
            Come Find Us
          </h2>
          <p
            className="font-jost text-sm mt-4 max-w-sm mx-auto leading-relaxed"
            style={{ color: 'var(--color-accent)' }}
          >
            We'd love to welcome you into our little corner of Paris in Brisbane.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="space-y-10">
              {infoItems.map((item) => (
                <div key={item.label} className="flex gap-5 items-start">
                  <div style={{ color: 'var(--color-gold)', marginTop: '2px' }}>{item.icon}</div>
                  <div>
                    <p
                      className="font-jost text-xs tracking-widest uppercase mb-2"
                      style={{ color: 'var(--color-gold)' }}
                    >
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-cormorant text-xl transition-colors duration-300 hover:underline"
                        style={{ color: 'var(--color-dark)' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className="font-cormorant text-xl leading-snug whitespace-pre-line"
                        style={{ color: 'var(--color-dark)' }}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-12 h-px" style={{ background: 'var(--color-blush)' }} />

            <p
              className="font-cormorant italic text-2xl mt-8 leading-snug"
              style={{ color: 'var(--color-accent)' }}
            >
              "A little butter makes everything better."
            </p>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sent ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center py-16 px-8"
                style={{ background: 'var(--color-surface)', minHeight: '360px' }}
              >
                <div className="font-cormorant italic text-3xl mb-4" style={{ color: 'var(--color-dark)' }}>
                  Merci ✨
                </div>
                <p className="font-jost text-sm leading-relaxed" style={{ color: 'var(--color-accent)' }}>
                  Your message has been received. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <p
                  className="font-jost text-xs tracking-[0.25em] uppercase mb-8"
                  style={{ color: 'var(--color-gold)' }}
                >
                  Send us a message
                </p>

                {[
                  { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Sophie Martin' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'sophie@example.com' },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block font-jost text-xs tracking-wider uppercase mb-2"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={formData[field.id as 'name' | 'email']}
                      onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                      className="w-full font-jost text-sm py-3 px-0 border-b outline-none transition-colors duration-300 bg-transparent"
                      style={{
                        borderColor: 'var(--color-blush)',
                        color: 'var(--color-dark)',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-gold)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-blush)')}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block font-jost text-xs tracking-wider uppercase mb-2"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full font-jost text-sm py-3 px-0 border-b outline-none transition-colors duration-300 bg-transparent resize-none"
                    style={{
                      borderColor: 'var(--color-blush)',
                      color: 'var(--color-dark)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-gold)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-blush)')}
                  />
                </div>

                <button
                  type="submit"
                  className="font-jost text-xs tracking-[0.18em] uppercase px-8 py-4 transition-all duration-400 mt-2"
                  style={{
                    background: 'var(--color-dark)',
                    color: 'var(--color-bg)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-dark)')}
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
