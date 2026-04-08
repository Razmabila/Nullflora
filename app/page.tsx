'use client'

import { useState } from 'react'
import Link from 'next/link'
import Terminal from '@/components/Terminal'
import Footer from '@/components/Footer'

// Botanical SVG mark (from brand identity)
function BotanicalMark({ size = 140 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="54" stroke="#3A3C34" strokeWidth="0.5"/>
      <circle cx="60" cy="60" r="30" stroke="#596247" strokeWidth="0.5" strokeDasharray="2 4"/>
      <ellipse cx="60" cy="30" rx="9" ry="22" stroke="#7A8D62" strokeWidth="0.75" opacity="0.7"/>
      <ellipse cx="60" cy="30" rx="9" ry="22" stroke="#7A8D62" strokeWidth="0.75" opacity="0.7" transform="rotate(60 60 60)"/>
      <ellipse cx="60" cy="30" rx="9" ry="22" stroke="#7A8D62" strokeWidth="0.75" opacity="0.7" transform="rotate(120 60 60)"/>
      <ellipse cx="60" cy="30" rx="9" ry="22" stroke="#596247" strokeWidth="0.5" opacity="0.4" transform="rotate(30 60 60)"/>
      <ellipse cx="60" cy="30" rx="9" ry="22" stroke="#596247" strokeWidth="0.5" opacity="0.4" transform="rotate(90 60 60)"/>
      <ellipse cx="60" cy="30" rx="9" ry="22" stroke="#596247" strokeWidth="0.5" opacity="0.4" transform="rotate(150 60 60)"/>
      <rect x="56" y="56" width="8" height="8" fill="#7A8D62" opacity="0.9"/>
      <rect x="54" y="58" width="3" height="3" fill="#7A4E3A" opacity="0.8"/>
      <line x1="60" y1="6"  x2="60"  y2="30"  stroke="#3A3C34" strokeWidth="0.5"/>
      <line x1="60" y1="90" x2="60"  y2="114" stroke="#3A3C34" strokeWidth="0.5"/>
      <line x1="6"  y1="60" x2="30"  y2="60"  stroke="#3A3C34" strokeWidth="0.5"/>
      <line x1="90" y1="60" x2="114" y2="60"  stroke="#3A3C34" strokeWidth="0.5"/>
      <path d="M 40 20 Q 60 10 80 20" stroke="#7A4E3A" strokeWidth="0.75" opacity="0.5" fill="none" transform="translate(2,-1)"/>
    </svg>
  )
}

const NAV_LINKS = [
  { href: '/gallery', label: 'Gallery',  sub: 'Digital Art' },
  { href: '/music',   label: 'Music',    sub: 'Audio Signals' },
  { href: '/about',   label: 'About',    sub: 'The Signal' },
]

export default function HomePage() {
  const [phase, setPhase] = useState<'terminal' | 'hero'>('terminal')
  const [heroReady, setHeroReady] = useState(false)

  function handleTerminalComplete() {
    setPhase('hero')
    // Trigger staggered animations after mount
    setTimeout(() => setHeroReady(true), 50)
  }

  return (
    <>
      {/* ── TERMINAL PHASE ─────────────────────────────────── */}
      {phase === 'terminal' && (
        <Terminal onComplete={handleTerminalComplete} />
      )}

      {/* ── HERO PHASE ─────────────────────────────────────── */}
      {phase === 'hero' && (
        <div className="relative min-h-screen flex flex-col">

          {/* Dot-grid background */}
          <div
            className="fixed inset-0 pointer-events-none animate-breathe"
            style={{
              backgroundImage: 'radial-gradient(circle, #3A3C34 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Nav bar */}
          <nav
            className="relative z-10 flex justify-between items-center px-4 sm:px-8 py-5"
            style={{
              opacity: heroReady ? 1 : 0,
              transition: 'opacity 0.8s ease 0.1s',
            }}
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-ash uppercase">
              NULLFLORA
            </span>
            <div className="flex gap-4 sm:gap-8">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-fog hover:text-moss-bright transition-colors uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Hero center */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-8 text-center">

            {/* Mark */}
            <div
              style={{
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.9s ease 0.2s, transform 0.9s cubic-bezier(0.23,1,0.32,1) 0.2s',
              }}
            >
              <BotanicalMark size={140} />
            </div>

            {/* Wordmark */}
            <div
              className="relative mt-10"
              style={{
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.9s ease 0.4s, transform 0.9s cubic-bezier(0.23,1,0.32,1) 0.4s',
              }}
            >
              <h1
                className="font-display font-thin text-null-white tracking-tight leading-none"
                style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}
              >
                NULLFLORA
              </h1>
              {/* Glitch accent line */}
              <div
                className="absolute top-0 left-0 w-full font-display font-thin text-moss-bright tracking-tight leading-none pointer-events-none"
                style={{
                  fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                  clipPath: 'polygon(0 40%, 100% 40%, 100% 54%, 0 54%)',
                  transform: 'translateX(-3px)',
                  opacity: 0.5,
                }}
              >
                NULLFLORA
              </div>
            </div>

            {/* Tagline */}
            <p
              className="font-display italic text-bone mt-4"
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.9s ease 0.6s, transform 0.9s cubic-bezier(0.23,1,0.32,1) 0.6s',
              }}
            >
              Artificial life that flourishes in the digital world.
            </p>

            {/* Navigation grid */}
            <div
              className="flex flex-col sm:flex-row gap-px mt-12 sm:mt-16 w-full sm:w-auto max-w-sm sm:max-w-none"
              style={{
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.9s ease 0.8s, transform 0.9s cubic-bezier(0.23,1,0.32,1) 0.8s',
              }}
            >
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex flex-col gap-1 px-8 sm:px-10 py-5 sm:py-6 border border-ash hover:border-moss btn-hard text-center"
                >
                  <span className="font-mono text-[10px] tracking-[0.3em] text-moss-bright uppercase">
                    {link.label}
                  </span>
                  <span className="font-display italic text-fog text-sm group-hover:text-bone transition-colors">
                    {link.sub}
                  </span>
                </Link>
              ))}
            </div>

            {/* Scroll indicator */}
            <div
              className="mt-20 font-mono text-[9px] tracking-[0.3em] text-ash uppercase"
              style={{
                opacity: heroReady ? 1 : 0,
                transition: 'opacity 1s ease 1.2s',
              }}
            >
              // signal active
            </div>
          </div>

          <Footer />
        </div>
      )}
    </>
  )
}
