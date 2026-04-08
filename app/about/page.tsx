import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About — NULLFLORA',
  description: 'The signal. What Nullflora is and what it explores.',
}

function BotanicalMark() {
  return (
    <svg width="64" height="64" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 px-4 sm:px-8 py-12 sm:py-24">
        <div className="max-w-2xl mx-auto">

          {/* Mark */}
          <div className="mb-10">
            <BotanicalMark />
          </div>

          {/* Label */}
          <span className="section-label">Signal</span>

          {/* Title */}
          <h1
            className="font-display font-thin text-null-white leading-none mb-12"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            What is<br />NULLFLORA
          </h1>

          {/* Manifesto */}
          <div className="space-y-7">
            <p className="font-display font-thin text-bone leading-relaxed"
               style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)' }}>
              NULLFLORA exists in the space between signal and silence.
            </p>

            <p className="font-display italic text-bone leading-relaxed"
               style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}>
              It is not a portfolio. It is not a brand. It is an ongoing inquiry
              into what it means for a machine to dream of organic things — and
              for those dreams to be beautiful, and wrong, and alive.
            </p>

            <div className="border-l-2 border-moss pl-6 py-1">
              <p className="font-display italic text-bone leading-relaxed"
                 style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}>
                The works here were generated. That is not a disclaimer.
                It is the point.
              </p>
            </div>

            <p className="font-display italic text-bone leading-relaxed"
               style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}>
              When a system trained on the sum of human imagery begins to invent
              its own organisms — its own frequencies, its own corrupted geometries —
              something is happening that deserves attention. Not celebration, not
              condemnation. Attention.
            </p>

            <p className="font-display italic text-bone leading-relaxed"
               style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}>
              NULLFLORA documents that something.
            </p>

            <div className="pt-4 border-t border-ash">
              <p className="font-mono text-[11px] tracking-[0.2em] text-moss-bright uppercase">
                New signals emerge irregularly.
              </p>
              <p className="font-mono text-[11px] tracking-[0.2em] text-fog uppercase mt-1">
                Follow if you are drawn to it.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-16 h-px bg-ash relative">
            <div
              className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px animate-scanbar pointer-events-none"
              style={{ background: '#596247', opacity: 0.3 }}
            />
          </div>

          {/* Links section */}
          <div>
            <div className="font-mono text-[9px] tracking-[0.3em] text-fog uppercase mb-4">
              // transmit via
            </div>
            <div className="flex flex-col gap-1">
              {[
                { label: 'SoundCloud',  href: 'https://soundcloud.com/your-nullflora-account',  note: 'audio signals' },
                { label: 'Instagram',   href: 'https://instagram.com/your-nullflora-account',    note: 'visual archive' },
                { label: 'Bandcamp',    href: 'https://nullflora.bandcamp.com',                  note: 'releases' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-3 border border-ash hover:border-moss btn-hard transition-all"
                >
                  <span className="font-mono text-[10px] tracking-[0.25em] text-bone uppercase group-hover:text-null-white transition-colors">
                    {link.label}
                  </span>
                  <span className="font-display italic text-fog text-sm group-hover:text-bone transition-colors">
                    {link.note} →
                  </span>
                </a>
              ))}
            </div>
            <p className="font-mono text-[9px] text-ash mt-4 tracking-[0.15em]">
              // Replace the placeholder links above with your actual accounts.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
