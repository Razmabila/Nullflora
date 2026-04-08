import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GalleryGrid from '@/components/GalleryGrid'
import artworksData from '@/content/artworks.json'

export const metadata = {
  title: 'Gallery — NULLFLORA',
  description: 'AI digital art and generative works by NULLFLORA.',
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 px-4 sm:px-8 py-10 sm:py-16">
        {/* Header */}
        <div className="mb-12">
          <span className="section-label">Archive</span>
          <h1
            className="font-display font-thin text-null-white leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Digital Art
          </h1>
          <p className="font-display italic text-fog mt-3 max-w-lg text-base leading-relaxed">
            Generated forms. Corrupted geometries. Organisms that should not exist but do.
          </p>
        </div>

        {/* Filter tags — static for now, extend later */}
        <div className="flex gap-1 mb-8 flex-wrap">
          {['All', 'Generative', 'Botanical', 'Glitch', 'Abstract'].map((tag, i) => (
            <span
              key={tag}
              className={`font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-2 ${
                i === 0
                  ? 'bg-moss text-void'
                  : 'border border-ash text-fog hover:border-moss hover:text-bone cursor-pointer transition-colors'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Gallery grid with lightbox */}
        {artworksData.length > 0 ? (
          <GalleryGrid artworks={artworksData} />
        ) : (
          <div className="flex items-center justify-center py-32 border border-ash">
            <div className="text-center">
              <div className="font-mono text-[10px] tracking-[0.3em] text-moss-bright mb-4 uppercase">
                // signal empty
              </div>
              <p className="font-display italic text-fog text-lg">
                No works yet. The void is patient.
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
