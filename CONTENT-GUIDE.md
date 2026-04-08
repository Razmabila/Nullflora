# NULLFLORA — Content Guide

Everything you need to update text, add artworks, add music, and change any part of the site — without needing to understand code. For any change, you can also just describe what you want to Claude and it will do the edit for you.

---

## Table of Contents
1. [Changing Text on Any Page](#1-changing-text-on-any-page)
2. [Adding a New Artwork](#2-adding-a-new-artwork)
3. [Adding a New Track](#3-adding-a-new-track)
4. [Managing Categories & Genres](#4-managing-categories--genres)
5. [Updating Social Links](#5-updating-social-links)
6. [Deploying to Vercel](#6-deploying-to-vercel)

---

## 1. Changing Text on Any Page

### Home page tagline
**File:** `app/page.tsx`
Find this line (around line 130):
```
Artificial life that flourishes in the digital world.
```
Replace it with whatever tagline you want.

**Just ask Claude:** "Change the home page tagline to: [your text]"

---

### Gallery page — title and subtitle
**File:** `app/gallery/page.tsx`
Find these lines (around line 20–28):
```
Digital Art
```
and:
```
Generated forms. Corrupted geometries. Organisms that should not exist but do.
```
Replace either or both with your own text.

**Just ask Claude:** "Change the gallery page subtitle to: [your text]"

---

### Music page — title and subtitle
**File:** `app/music/page.tsx`
Find the lines marked with `✏️ EDITABLE` comments (around line 40–50):
```
Music
```
and:
```
Frequencies from the null space. Genre is a suggestion.
```
Replace with your own text.

**Just ask Claude:** "Change the music page title to: [your text]" or "Change the music page subtitle to: [your text]"

---

### About page — the manifesto
**File:** `app/about/page.tsx`
The manifesto is a series of `<p>` paragraph tags starting around line 60.
Each paragraph is its own block — you can edit, add, or remove paragraphs freely.

Current paragraphs:
1. "NULLFLORA exists in the space between signal and silence."
2. "It is not a portfolio..."
3. Pull-quote block: "The works here were generated..."
4. "When a system trained on the sum..."
5. "NULLFLORA documents that something."
6. Footer coda: "New signals emerge irregularly."

**Just ask Claude:** "Update the manifesto — change the second paragraph to: [your text]" or "Add a new paragraph after the last one that says: [your text]"

---

### About page — section label / sub-heading
**File:** `app/about/page.tsx`
Find:
```
What is
NULLFLORA
```
Change to anything you want — "The Origin", "The Signal", "What This Is", etc.

---

## 2. Adding a New Artwork

### Step 1 — Upload to Cloudinary
1. Go to [cloudinary.com](https://cloudinary.com) → sign in (free account)
2. Upload your image
3. Copy the full URL, which looks like:
   `https://res.cloudinary.com/YOUR-CLOUD-NAME/image/upload/v1234567890/your-image.jpg`

### Step 2 — Add to artworks.json
Open `content/artworks.json` and add a new entry. Use this template:

```json
{
  "id": "nf-XXX",
  "title": "Your Artwork Title",
  "description": "A description — poetic, technical, or both. Shown in the lightbox.",
  "imageUrl": "https://res.cloudinary.com/YOUR-CLOUD-NAME/image/upload/...",
  "date": "2025",
  "tags": ["generative", "botanical"]
}
```

> **Tags:** Use any words you want. They appear on the gallery filter. See Section 4 for how to manage them.

**Just ask Claude:** "Add this artwork: [Cloudinary URL], title: [title], description: [description], tags: [tags]"

---

## 3. Adding a New Track

### Step 1 — Upload cover art to Cloudinary
Same as artworks — upload your album/track cover image and copy the URL.

### Step 2 — Upload track to SoundCloud
1. Go to [soundcloud.com](https://soundcloud.com) → sign in
2. Upload your track
3. Copy the track URL from your browser:
   `https://soundcloud.com/your-username/your-track-name`

### Step 3 — Add to tracks.json
Open `content/tracks.json` and add a new entry:

```json
{
  "id": "tr-XXX",
  "title": "Track Title",
  "description": "Description shown above the player. What the track is, sounds like, or how it was made.",
  "soundcloudUrl": "https://soundcloud.com/your-username/track-name",
  "coverImageUrl": "https://res.cloudinary.com/YOUR-CLOUD-NAME/image/upload/...",
  "date": "2025",
  "genre": "ambient"
}
```

> **Genre:** Any word works — `ambient`, `instrumental`, `experimental`, `drone`, `electronic`, `generative`, or invent your own. It's just a label shown above the track title.

**Just ask Claude:** "Add this track: [SoundCloud URL], cover: [Cloudinary URL], title: [title], description: [description], genre: [genre]"

---

## 4. Managing Categories & Genres

### Gallery filter tags
**File:** `app/gallery/page.tsx`

Find the filter row (around line 30):
```tsx
{['All', 'Generative', 'Botanical', 'Glitch', 'Abstract'].map(...)
```

Replace the tag names in the array with whatever categories fit your work.
The tags you list here should match the tags you use in `artworks.json`.

Example — if you make surrealist and landscape pieces:
```tsx
{['All', 'Surrealist', 'Landscape', 'Portrait', 'Abstract'].map(...)
```

**Just ask Claude:** "Change the gallery filter tags to: All, [your categories]"

### Music genres
Genres are set per-track in `tracks.json` (the `"genre"` field). There is no master list — just use any word you want for each track. You're free to be as specific or vague as you like: "ambient", "something broken", "IDM-adjacent", etc.

---

## 5. Updating Social Links

**File:** `app/about/page.tsx`

Find the links array near the bottom (around line 90):
```tsx
{ label: 'SoundCloud', href: 'https://soundcloud.com/your-nullflora-account', note: 'audio signals' },
{ label: 'Instagram',  href: 'https://instagram.com/your-nullflora-account',  note: 'visual archive' },
{ label: 'Bandcamp',   href: 'https://nullflora.bandcamp.com',                note: 'releases' },
```

For each link, change:
- `href` → your actual profile URL
- `label` → the platform name shown in bold
- `note` → the small italic description on the right

You can also add or remove links entirely.

**Just ask Claude:** "Update the SoundCloud link to [your URL]" or "Add a YouTube link to [your URL] with the description 'video works'"

---

## 6. Deploying to Vercel

After any changes, the site redeploys automatically if you have GitHub connected to Vercel (which is the recommended setup).

### First-time setup (do this once):
1. Create a free account at [github.com](https://github.com)
2. Create a new repository and upload the `website/` folder
3. Create a free account at [vercel.com](https://vercel.com)
4. Click **Add New Project** → import your GitHub repository
5. Vercel detects Next.js automatically → click **Deploy**
6. Your site is live at a `*.vercel.app` URL

After that, every time you push a change to GitHub, Vercel redeploys automatically within ~1 minute.

### Just ask Claude for help with deployment — it's a one-time setup and Claude can walk you through every step.
