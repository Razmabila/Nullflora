import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import tracksData from '@/content/tracks.json'

export const metadata = {
  title: 'Music — NULLFLORA',
  description: 'AI-generated music and instrumental works by NULLFLORA.',
}

export interface Track {
  id: string
  title: string
  description: string
  soundcloudUrl: string
  coverImageUrl: string
  date: string
  genre: string
}

function SoundCloudEmbed({ trackUrl }: { trackUrl: string }) {
  const encoded = encodeURIComponent(trackUrl)
  const src = `https://w.soundcloud.com/player/?url=${encoded}&color=%237A8D62&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`
  return (
    <iframe
      width="100%"
      height="166"
      allow="autoplay"
      src={src}
      className="border-0"
      style={{ borderTop: '1px solid #3A3C34', display: 'block' }}
    />
  )
}

export default function MusicPage() {
  const tracks: Track[] = tracksData

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 px-4 sm:px-8 py-10 sm:py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <span className="section-label">Transmissions</span>
          <h1
            className="font-display font-thin text-null-white leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            {/* ✏️ EDITABLE: Change page title below */}
            Music
          </h1>
          <p className="font-display italic text-fog mt-3 text-base leading-relaxed">
            {/* ✏️ EDITABLE: Change page subtitle below */}
            Frequencies from the null space. Genre is a suggestion.
          </p>
        </div>

        {/* Track list */}
        {tracks.length > 0 ? (
          <div className="flex flex-col gap-px bg-ash border border-ash">
            {tracks.map((track) => (
              <div key={track.id} className="bg-undergrowth">

                {/* Track header row */}
                <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-3">
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.25em] text-moss-bright uppercase block mb-1">
                      {track.genre}
                    </span>
                    <h2
                      className="font-display font-thin text-null-white leading-tight"
                      style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
                    >
                      {track.title}
                    </h2>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-fog shrink-0 pt-1 uppercase">
                    {track.date}
                  </span>
                </div>

                {/* Cover image + description row */}
                <div className="grid gap-px bg-ash mx-6 mb-0 grid-cols-1 sm:grid-cols-[200px_1fr]">
                  {/* Cover art */}
                  <div className="relative bg-decay overflow-hidden aspect-square sm:aspect-auto" style={{ height: '200px' }}>
                    <Image
                      src={track.coverImageUrl}
                      alt={`Cover art for ${track.title}`}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                    {/* Glitch overlay */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'repeating-linear-gradient(0deg, rgba(10,11,9,0.12), rgba(10,11,9,0.12) 1px, transparent 1px, transparent 4px)',
                      }}
                    />
                  </div>

                  {/* Description */}
                  <div className="bg-undergrowth p-5 flex items-center">
                    <p className="font-display italic text-bone text-base leading-relaxed">
                      {track.description}
                    </p>
                  </div>
                </div>

                {/* SoundCloud embed */}
                <div className="mx-6 mb-6 mt-px">
                  <SoundCloudEmbed trackUrl={track.soundcloudUrl} />
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-32 border border-ash">
            <div className="text-center">
              <div className="font-mono text-[10px] tracking-[0.3em] text-moss-bright mb-4 uppercase">
                // no signal
              </div>
              <p className="font-display italic text-fog text-lg">
                No transmissions yet. The void is silent.
              </p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
