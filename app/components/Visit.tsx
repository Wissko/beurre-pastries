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
    setSent(true)
  }

  const infoItems = [
    {
      label: 'Location',
      value: 'Brisbane, Queensland, Australia',
    },
    {
      label: 'Hours',
      value: 'Tue – Fri: 7am – 4pm\nSat – Sun: 7am – 2pm',
    },
    {
      label: 'Instagram',
      value: '@beurrepastriesbne',
      link: 'https://instagram.com/beurrepastriesbne',
    },
  ]

  return (
    <section
      id="visit"
      className="section-padding relative"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Section number */}
      <span className="section-number hidden lg:block" style={{ top: '4rem', left: '6rem' }}>06</span>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
          style={{ marginBottom: '104px' }}
        >
          <p
            className="font-jost uppercase mb-5"
            style={{ fontSize: '10px', letterSpacing: '0.32em', color: 'var(--color-muted)', fontWeight: 300 }}
          >
            Find Us
          </p>
          <h2
            className="font-cormorant italic"
            style={{ fontSize: 'clamp(27px, 4vw, 45px)', color: 'var(--color-dark)', fontWeight: 300, letterSpacing: '0.08em' }}
          >
            Venez nous voir
          </h2>
          <p
            className="font-jost mt-5 max-w-xs mx-auto leading-relaxed"
            style={{ fontSize: '13px', color: 'var(--color-muted)', fontWeight: 300 }}
          >
            A little corner of Paris in Brisbane.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 md:gap-32">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="space-y-10">
              {infoItems.map((item) => (
                <div key={item.label}>
                  <p
                    className="font-jost uppercase mb-2"
                    style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'var(--color-muted)', fontWeight: 300 }}
                  >
                    {item.label}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-cormorant transition-colors duration-300 hover:underline"
                      style={{ fontSize: '20px', color: 'var(--color-dark)', fontWeight: 300, letterSpacing: '0.02em' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className="font-cormorant leading-snug whitespace-pre-line"
                      style={{ fontSize: '20px', color: 'var(--color-dark)', fontWeight: 300, letterSpacing: '0.02em' }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 h-px" style={{ background: 'var(--color-border)' }} />

            <p
              className="font-cormorant italic mt-10 leading-snug"
              style={{ fontSize: '20px', color: 'var(--color-muted)', fontWeight: 300 }}
            >
              "A little butter makes everything better."
            </p>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sent ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center py-20 px-8"
                style={{ background: 'var(--color-surface)', minHeight: '360px' }}
              >
                <div
                  className="font-cormorant italic mb-4"
                  style={{ fontSize: '28px', color: 'var(--color-dark)', fontWeight: 300 }}
                >
                  Merci ✨
                </div>
                <p
                  className="font-jost leading-relaxed"
                  style={{ fontSize: '13px', color: 'var(--color-muted)', fontWeight: 300 }}
                >
                  Your message has been received. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <p
                  className="font-jost uppercase mb-10"
                  style={{ fontSize: '10px', letterSpacing: '0.28em', color: 'var(--color-muted)', fontWeight: 300 }}
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
                      className="block font-jost uppercase mb-2"
                      style={{ fontSize: '9px', letterSpacing: '0.22em', color: 'var(--color-muted)', fontWeight: 300 }}
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
                      className="w-full font-jost py-3 px-0 border-b outline-none transition-colors duration-300 bg-transparent"
                      style={{
                        fontSize: '13px',
                        fontWeight: 300,
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-dark)',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block font-jost uppercase mb-2"
                    style={{ fontSize: '9px', letterSpacing: '0.22em', color: 'var(--color-muted)', fontWeight: 300 }}
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
                    className="w-full font-jost py-3 px-0 border-b outline-none transition-colors duration-300 bg-transparent resize-none"
                    style={{
                      fontSize: '13px',
                      fontWeight: 300,
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-dark)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-accent)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
                  />
                </div>

                <button
                  type="submit"
                  className="font-jost uppercase transition-all duration-300 mt-2"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.18em',
                    fontWeight: 300,
                    color: 'var(--color-dark)',
                    borderBottom: '1px solid var(--color-border)',
                    paddingBottom: '4px',
                    background: 'none',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderBottomColor = 'var(--color-gold)'
                    e.currentTarget.style.color = 'var(--color-accent)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderBottomColor = 'var(--color-border)'
                    e.currentTarget.style.color = 'var(--color-dark)'
                  }}
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
