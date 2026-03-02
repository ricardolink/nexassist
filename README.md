# NexAssist — Luxury Concierge Platform

Built with Next.js 14, Tailwind CSS, and Supabase.

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Set up Supabase
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Copy your project URL and anon key
3. Create `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
4. Run `schema.sql` in your Supabase SQL Editor

### 3. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Deploy to Vercel
1. Push to GitHub
2. Import repo in [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

## Pages
| Route | Description |
|-------|-------------|
| `/` | Landing page (SEO optimized) |
| `/login` | Client login |
| `/signup` | Client signup |
| `/dashboard` | Client dashboard |
| `/partner` | Partner portal |
| `/partner/onboarding` | Partner application |
| `/admin` | Admin dashboard (password: nexadmin2024) |

## Brand
- Navy: `#0A1628`
- Gold: `#C9A962`
- Fonts: Playfair Display (headings), Inter (body)
