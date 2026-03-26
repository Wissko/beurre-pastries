'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const textEase = [0.22, 1, 0.36, 1] as const

/**
 * Mots de l'adresse qui apparaissent un par un — lentement
 */
function WordByWord({ text, isInView, baseDelay = 0 }: { text: string; isInView: boolean; baseDelay?: number }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: baseDelay + i * 0.15, ease: textEase }}
          style={{ display: 'inline-block', marginRight: '0.35em' }}
        >
          {word}
        </motion.span>
      ))}
    </>
  )
}

export default function Visit() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const infoItems = [
    { label: 'Location', value: 'Park Road, Milton, Brisbane\nAcross from La Dolce Vita' },
    { label: 'Coffee', value: 'Bear Bones Coffee' },
    { label: 'Hours', value: 'Tue – Fri: 7am – 4pm\nSat – Sun: 7am – 2pm' },
    { label: 'Instagram', value: '@beurrepastriesbne', link: 'https://instagram.com/beurrepastriesbne' },
  ]

  const validate = () => {
    const e: Record<string, boolean> = {}
    if (!formData.name.trim()) e.name = true
    if (!formData.email.trim() || !formData.email.includes('@')) e.email = true
    if (!formData.message.trim()) e.message = true
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }
    setErrors({})
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1200)
  }

  return (
    <section
      id="visit"
      className="section-padding relative overflow-hidden"
      style={{ background: '#f0ede8' }}
    >
      {/* Ghost typography "PARK RD" en fond */}
      <div
        className="ghost-text"
        style={{
          fontSize: 'clamp(100px, 25vw, 240px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      >
        PARK RD
      </div>

      <span className="section-number hidden lg:block" style={{ top: '4rem', left: '6rem' }}>06</span>

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header — mot par mot */}
        <div ref={ref} className="text-center" style={{ marginBottom: '96px' }}>
          {/* Chapter overline — 0ms */}
          <motion.span
            className="chapter-overline"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.85 } : {}}
            transition={{ duration: 1.0, delay: 0, ease: textEase }}
            style={{ marginBottom: '16px' }}
          >
            Chapter 05 · Find Us
          </motion.span>

          {/* Label — +300ms */}
          <motion.p
            className="font-jost uppercase mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.3, ease: textEase }}
            style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'var(--color-muted)', fontWeight: 300 }}
          >
            Find Us
          </motion.p>

          {/* Titre mot par mot — +300ms */}
          <h2
            className="font-cormorant italic"
            style={{ fontSize: 'clamp(27px, 4vw, 45px)', color: 'var(--color-dark)', fontWeight: 300, letterSpacing: '0.06em' }}
          >
            <WordByWord text="Park Road, Milton." isInView={isInView} baseDelay={0.3} />
          </h2>

          {/* Sous-titre — +700ms */}
          <motion.p
            className="font-jost mt-5 max-w-xs mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.7, ease: textEase }}
            style={{ fontSize: '13px', color: 'var(--color-muted)', fontWeight: 300, lineHeight: 1.7 }}
          >
            A small counter. Good coffee. Something laminated.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 md:gap-32">
          {/* Info — +900ms */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.9, ease: textEase }}
          >
            <div className="space-y-10">
              {infoItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1.0, delay: 0.9 + i * 0.15, ease: textEase }}
                >
                  <p
                    className="font-jost uppercase mb-2"
                    style={{ fontSize: '8px', letterSpacing: '0.32em', color: 'var(--color-muted)', fontWeight: 300 }}
                  >
                    {item.label}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-underline font-cormorant transition-colors duration-300"
                      style={{ fontSize: '20px', color: 'var(--color-dark)', fontWeight: 300, letterSpacing: '0.02em', paddingBottom: '2px', display: 'inline-block' }}
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
                </motion.div>
              ))}
            </div>

            <div className="mt-16 h-px" style={{ background: 'var(--color-border)' }} />

            {/* Citation — apparaît en dernier +1200ms */}
            <motion.p
              className="font-cormorant italic mt-10 leading-snug"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.4, delay: 1.2, ease: textEase }}
              style={{ fontSize: '19px', color: 'var(--color-muted)', fontWeight: 300 }}
            >
              "A little butter makes everything better."
            </motion.p>
          </motion.div>

          {/* Formulaire — +900ms */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.9, ease: textEase }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: textEase }}
                  className="h-full flex flex-col items-center justify-center text-center py-20 px-8"
                  style={{ background: 'var(--color-surface)', minHeight: '360px', borderRadius: '3px' }}
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ marginBottom: '20px' }}>
                    <circle cx="20" cy="20" r="18" stroke="var(--color-border)" strokeWidth="1" />
                    <path d="M12 20l6 6 10-12" stroke="var(--color-terracotta)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="check-path" />
                  </svg>
                  <div className="font-cormorant italic mb-4" style={{ fontSize: '26px', color: 'var(--color-dark)', fontWeight: 300 }}>
                    Message sent.
                  </div>
                  <p className="font-jost leading-relaxed" style={{ fontSize: '13px', color: 'var(--color-muted)', fontWeight: 300, lineHeight: 1.7 }}>
                    We'll be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-7" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <p className="font-jost uppercase mb-10" style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'var(--color-muted)', fontWeight: 300 }}>
                    Send us a message
                  </p>
                  {[
                    { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Sophie Martin' },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'sophie@example.com' },
                  ].map((field) => (
                    <div
                      key={field.id}
                      className={`form-field ${errors[field.id] ? 'shake' : ''}`}
                      onAnimationEnd={() => setErrors((prev) => ({ ...prev, [field.id]: false }))}
                    >
                      <label htmlFor={field.id} className="block font-jost uppercase mb-2" style={{ fontSize: '8px', letterSpacing: '0.24em', color: 'var(--color-muted)', fontWeight: 300 }}>
                        {field.label}
                      </label>
                      <div style={{ position: 'relative', borderBottom: `1px solid ${errors[field.id] ? '#c0392b' : 'var(--color-border)'}` }}>
                        <input
                          id={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          value={formData[field.id as 'name' | 'email']}
                          onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                          className="w-full font-jost py-3 px-0 outline-none bg-transparent"
                          style={{ fontSize: '13px', fontWeight: 300, color: 'var(--color-dark)', cursor: 'text' }}
                        />
                        <div className="form-input-line" />
                      </div>
                    </div>
                  ))}
                  <div
                    className={`form-field ${errors.message ? 'shake' : ''}`}
                    onAnimationEnd={() => setErrors((prev) => ({ ...prev, message: false }))}
                  >
                    <label htmlFor="message" className="block font-jost uppercase mb-2" style={{ fontSize: '8px', letterSpacing: '0.24em', color: 'var(--color-muted)', fontWeight: 300 }}>
                      Message
                    </label>
                    <div style={{ position: 'relative', borderBottom: `1px solid ${errors.message ? '#c0392b' : 'var(--color-border)'}` }}>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="How can we help?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full font-jost py-3 px-0 outline-none bg-transparent resize-none"
                        style={{ fontSize: '13px', fontWeight: 300, color: 'var(--color-dark)', cursor: 'text' }}
                      />
                      <div className="form-input-line" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn-underline font-jost uppercase inline-flex items-center gap-3 mt-2"
                    style={{ fontSize: '9px', letterSpacing: '0.20em', fontWeight: 300, color: 'var(--color-dark)', paddingBottom: '3px', background: 'none', cursor: 'pointer' }}
                  >
                    {status === 'loading' ? (
                      <><span className="spinner" /><span>Sending</span></>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
