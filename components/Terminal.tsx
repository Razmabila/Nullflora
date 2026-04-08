'use client'

import { useState, useEffect } from 'react'

interface TerminalLine {
  text: string
  charDelay: number
  pauseAfter: number
  color: string
}

const BOOT_SEQUENCE: TerminalLine[] = [
  { text: 'NULLFLORA_OS  v0.0.1',            charDelay: 75, pauseAfter: 500,  color: 'text-null-white' },
  { text: '// signal detected.',             charDelay: 38, pauseAfter: 220,  color: 'text-fog'        },
  { text: '// parsing geometric anomaly...', charDelay: 32, pauseAfter: 800,  color: 'text-fog'        },
  { text: '// 4e 75 6c 6c 46 6c 6f 72 61',  charDelay: 18, pauseAfter: 350,  color: 'text-ash'        },
  { text: '// organic corruption confirmed.',charDelay: 36, pauseAfter: 250,  color: 'text-fog'        },
  { text: '// artificial life — active.',    charDelay: 44, pauseAfter: 1000, color: 'text-moss-bright' },
]

function BotanicalMark() {
  return (
    <svg width="110" height="110" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
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

interface Props {
  onComplete: () => void
}

export default function Terminal({ onComplete }: Props) {
  const [completedLines, setCompletedLines] = useState<{ text: string; color: string }[]>([])
  const [currentText, setCurrentText]       = useState('')
  const [lineIndex, setLineIndex]           = useState(0)
  const [charIndex, setCharIndex]           = useState(0)
  const [markVisible, setMarkVisible]       = useState(false)

  // Fade mark in first, then start typing
  useEffect(() => {
    const t = setTimeout(() => setMarkVisible(true), 200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (lineIndex >= BOOT_SEQUENCE.length) {
      const done = setTimeout(onComplete, 700)
      return () => clearTimeout(done)
    }
    const line = BOOT_SEQUENCE[lineIndex]

    if (charIndex < line.text.length) {
      const t = setTimeout(() => {
        setCurrentText(prev => prev + line.text[charIndex])
        setCharIndex(prev => prev + 1)
      }, line.charDelay)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setCompletedLines(prev => [...prev, { text: line.text, color: line.color }])
        setCurrentText('')
        setCharIndex(0)
        setLineIndex(prev => prev + 1)
      }, line.pauseAfter)
      return () => clearTimeout(t)
    }
  }, [lineIndex, charIndex, onComplete])

  const currentColor = lineIndex < BOOT_SEQUENCE.length
    ? BOOT_SEQUENCE[lineIndex].color
    : 'text-moss-bright'

  return (
    <div className="fixed inset-0 bg-void flex flex-col items-center justify-center z-50">
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 animate-breathe pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #3A3C34 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Botanical mark — boot logo */}
      <div
        className="relative mb-10"
        style={{
          opacity: markVisible ? 1 : 0,
          transform: markVisible ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 1s ease, transform 1s cubic-bezier(0.23,1,0.32,1)',
        }}
      >
        <BotanicalMark />
      </div>

      {/* Terminal text */}
      <div className="relative w-full max-w-xl px-8">
        <div className="font-mono text-[13px] leading-[2]">
          {completedLines.map((line, i) => (
            <div key={i} className={`${line.color} opacity-70`}>{line.text}</div>
          ))}
          {lineIndex < BOOT_SEQUENCE.length && (
            <div className={currentColor}>
              {currentText}
              <span className="animate-cursor-blink">_</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
