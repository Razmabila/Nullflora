'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

export interface Artwork {
  id: string
  title: string
  description: string
  imageUrl: string
  date: string
  tags: string[]
}

interface LightboxProps {
  artworks: Artwork[]
  activeIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

function Lightbox({ artworks, activeIndex, onClose, onPrev, onNext }: LightboxProps) {
  const artwork = artworks[activeIndex]

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape')     onClose()
    if (e.key === 'ArrowLeft')  onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-void bg-opacity-96"
      onClick={onClose}
    >
      {/* Scanline overlay inside lightbox */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)',
        }}
      />

      {/* Content — stop propagation so clicking inside doesn't close */}
      <div
        className="relative flex flex-col md:flex-row items-start md:items-center gap-0 w-full max-h-screen overflow-y-auto md:overflow-visible md:h-full max-w-6xl mx-auto p-4 md:p-6"
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative flex-1 flex items-center justify-center w-full md:h-full py-2 md:py-0">
          <div className="relative max-w-full">
            <Image
              src={artwork.imageUrl}
              alt={artwork.title}
              width={900}
              height={900}
              className="object-contain max-h-[45vh] md:max-h-[80vh] w-auto border border-ash"
              priority
            />
          </div>
        </div>

        {/* Info panel */}
        <div className="w-full md:w-72 shrink-0 flex flex-col gap-4 md:pl-8 pt-4 pb-16 md:pb-0 md:pt-0 border-t md:border-t-0 md:border-l border-ash">
          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {artwork.tags.map(tag => (
              <span
                key={tag}
                className="font-mono text-[9px] tracking-[0.2em] uppercase bg-ash text-fog px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="font-display font-thin text-null-white leading-tight"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            {artwork.title}
          </h2>

          {/* Date */}
          <div className="font-mono text-[10px] tracking-[0.25em] text-fog uppercase">
            {artwork.date}
          </div>

          {/* Description */}
          <p className="font-display italic text-bone text-base leading-relaxed">
            {artwork.description}
          </p>

          {/* Navigation */}
          <div className="flex gap-2 mt-auto pt-4">
            <button
              onClick={onPrev}
              className="flex-1 font-mono text-[10px] tracking-[0.2em] text-fog hover:text-bone border border-ash hover:border-moss py-3 transition-colors uppercase btn-hard"
            >
              ← Prev
            </button>
            <button
              onClick={onNext}
              className="flex-1 font-mono text-[10px] tracking-[0.2em] text-fog hover:text-bone border border-ash hover:border-moss py-3 transition-colors uppercase btn-hard"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 font-mono text-fog hover:text-null-white text-xl transition-colors z-10 bg-void bg-opacity-80 w-9 h-9 flex items-center justify-center"
          aria-label="Close"
        >
          ×
        </button>

        {/* Index */}
        <div className="hidden md:block absolute bottom-6 left-6 font-mono text-[9px] tracking-[0.25em] text-ash uppercase">
          {String(activeIndex + 1).padStart(2, '0')} / {String(artworks.length).padStart(2, '0')}
        </div>
      </div>
    </div>
  )
}

interface GalleryGridProps {
  artworks: Artwork[]
}

export default function GalleryGrid({ artworks }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const openAt  = (i: number) => setActiveIndex(i)
  const close   = () => setActiveIndex(null)
  const prev    = () => setActiveIndex(i => (i === null ? null : (i - 1 + artworks.length) % artworks.length))
  const next    = () => setActiveIndex(i => (i === null ? null : (i + 1) % artworks.length))

  return (
    <>
      {/* Grid */}
      <div
        className="grid gap-px bg-ash border border-ash"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
      >
        {artworks.map((artwork, i) => (
          <button
            key={artwork.id}
            onClick={() => openAt(i)}
            className="group relative bg-undergrowth overflow-hidden text-left card-hover border-0"
          >
            {/* Thumbnail */}
            <div className="relative aspect-square overflow-hidden bg-decay">
              <Image
                src={artwork.imageUrl}
                alt={artwork.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Glitch overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                style={{
                  background: 'repeating-linear-gradient(0deg, rgba(122,77,58,0.07), rgba(122,77,58,0.07) 1px, transparent 1px, transparent 4px)',
                }}
              />
            </div>

            {/* Info */}
            <div className="px-4 py-3 border-t border-ash group-hover:border-moss transition-colors">
              <div className="font-mono text-[9px] tracking-[0.25em] text-moss-bright uppercase mb-1">
                {artwork.tags[0] ?? 'digital'}
              </div>
              <div className="font-display font-thin text-null-white text-lg leading-tight">
                {artwork.title}
              </div>
              <div className="font-mono text-[10px] text-fog mt-1">{artwork.date}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <Lightbox
          artworks={artworks}
          activeIndex={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}
