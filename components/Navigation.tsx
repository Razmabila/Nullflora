import Link from 'next/link'

function SmallMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="60" cy="60" r="54" stroke="#3A3C34" strokeWidth="1"/>
      <circle cx="60" cy="60" r="30" stroke="#596247" strokeWidth="1" strokeDasharray="4 6"/>
      <ellipse cx="60" cy="30" rx="9" ry="22" stroke="#7A8D62" strokeWidth="1.5" opacity="0.7"/>
      <ellipse cx="60" cy="30" rx="9" ry="22" stroke="#7A8D62" strokeWidth="1.5" opacity="0.7" transform="rotate(60 60 60)"/>
      <ellipse cx="60" cy="30" rx="9" ry="22" stroke="#7A8D62" strokeWidth="1.5" opacity="0.7" transform="rotate(120 60 60)"/>
      <rect x="56" y="56" width="8" height="8" fill="#7A8D62" opacity="0.9"/>
      <rect x="54" y="58" width="3" height="3" fill="#7A4E3A" opacity="0.8"/>
    </svg>
  )
}

const links = [
  { href: '/gallery', label: 'Gallery' },
  { href: '/music',   label: 'Music'   },
  { href: '/about',   label: 'About'   },
]

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 py-5 border-b border-ash">
      <Link
        href="/"
        className="flex items-center gap-2 sm:gap-3 group"
      >
        <span className="transition-opacity group-hover:opacity-80">
          <SmallMark />
        </span>
        <span className="font-mono text-[10px] tracking-[0.25em] sm:tracking-[0.35em] text-bone group-hover:text-null-white transition-colors uppercase">
          NULLFLORA
        </span>
      </Link>
      <div className="flex items-center gap-4 sm:gap-8">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="font-mono text-[10px] tracking-[0.15em] sm:tracking-[0.25em] text-fog hover:text-moss-bright transition-colors uppercase"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
