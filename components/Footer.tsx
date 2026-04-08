function FooterMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="60" cy="60" r="54" stroke="#3A3C34" strokeWidth="1"/>
      <circle cx="60" cy="60" r="30" stroke="#596247" strokeWidth="1" strokeDasharray="3 5"/>
      <ellipse cx="60" cy="30" rx="9" ry="22" stroke="#3A3C34" strokeWidth="1.5" opacity="0.8"/>
      <ellipse cx="60" cy="30" rx="9" ry="22" stroke="#3A3C34" strokeWidth="1.5" opacity="0.8" transform="rotate(60 60 60)"/>
      <ellipse cx="60" cy="30" rx="9" ry="22" stroke="#3A3C34" strokeWidth="1.5" opacity="0.8" transform="rotate(120 60 60)"/>
      <rect x="56" y="56" width="8" height="8" fill="#3A3C34" opacity="0.9"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative z-10 flex justify-between items-end px-4 sm:px-8 py-5 sm:py-6 border-t border-ash mt-auto">
      <div className="flex items-end gap-4">
        <FooterMark />
        <span className="font-display font-thin text-ash text-xl tracking-wide">NULLFLORA</span>
      </div>
      <div className="text-right">
        <div className="font-mono text-[9px] tracking-[0.2em] text-ash uppercase">
          Signal active. Null persists.
        </div>
        <div className="font-mono text-[9px] tracking-[0.15em] text-ash opacity-50 mt-1 uppercase">
          © {new Date().getFullYear()} NULLFLORA
        </div>
      </div>
    </footer>
  )
}
