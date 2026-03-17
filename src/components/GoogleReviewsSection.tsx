"use client";

interface Props {
  serviceName?: string;
}

const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/place/NexAssist/data=!4m2!3m1!1s0x0:0x348b81302a38412a";

const REVIEWS = [
  {
    name: "Brewify Coffee",
    initial: "B",
    date: "a week ago",
    isLocalGuide: false,
    text: "Great customer service, fast response, they got me with the best quote matching my budget. Not paying a membership to have a concierge 24/7 on your hands it’s a life changing!! Highly recommended and thanks!!",
  },
  {
    name: "Isabelle Hallock",
    initial: "I",
    date: "a week ago",
    isLocalGuide: false,
    text: "Got a nice villa in Malibu! 10 out of 10 experience. Thank you NexAssist team!!",
  },
  {
    name: "Bruxo Na Gringa",
    initial: "B",
    date: "5 days ago",
    isLocalGuide: false,
    text: "Best concierge service in LA, amazing team. Thanks to the NexAssist concierge team",
  },
  {
    name: "Tor Rey",
    initial: "T",
    date: "6 days ago",
    isLocalGuide: false,
    text: "I loved the idea of having a concierge right in the palm of my hand 24/7 for anything I need! Our weekend with the Maybach was amazing, and the chauffeur service we requested from LAX to our hotel made everything even smoother. Thank you NexAssist !! Best concierge service!",
  },
];

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "NexAssist",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "4",
    "bestRating": "5",
    "worstRating": "1",
  },
  "review": REVIEWS.map((r) => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": r.name },
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "reviewBody": r.text,
  })),
};

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? "text-[#FBBC05]" : "text-white/20"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export default function GoogleReviewsSection({ serviceName }: Props) {
  return (
    <section className="bg-[#07070a] py-20 px-6 border-t border-white/5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-5 h-px bg-[#C9A962]/50" />
              <span className="text-[#C9A962]/70 text-[9px] tracking-[0.4em] uppercase">
                Verified Reviews
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white">
              What Our Clients Are Saying
            </h2>
          </div>

          {/* Google rating badge */}
          <div className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-4 shrink-0">
            {/* Google G */}
            <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 overflow-hidden bg-white">
              <svg viewBox="0 0 48 48" className="w-6 h-6">
                <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.2 33.7 29.7 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.4 5.1 29.5 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 19.7-7.7 19.7-20 0-1.3-.1-2.7-.2-3z"/>
                <path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 16 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.4 5.1 29.5 3 24 3c-7.6 0-14.2 4.2-17.7 10.7z"/>
                <path fill="#FBBC05" d="M24 43c5.5 0 10.4-1.9 14.2-5.2l-6.6-5.4C29.6 34.3 27 35 24 35c-5.6 0-10.3-3.8-11.9-9l-7 5.4C8.4 38.6 15.7 43 24 43z"/>
                <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-.8 2.3-2.4 4.2-4.4 5.5l6.6 5.4C41.7 35.7 44.5 30 44.5 23c0-1-.1-2-.2-3z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-white font-bold text-xl leading-none">4.8</span>
                <StarRow />
              </div>
              <p className="text-white/40 text-xs">139 Google reviews</p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5 flex flex-col gap-4 hover:border-[#C9A962]/25 transition-colors"
            >
              {/* Top: avatar + name */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1a1815] border border-[#C9A962]/30 flex items-center justify-center shrink-0">
                  <span className="text-[#C9A962] text-sm font-semibold">{r.initial}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-medium leading-tight truncate">{r.name}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    {r.isLocalGuide && (
                      <span className="text-[9px] text-[#4285F4] font-medium tracking-wide">Local Guide</span>
                    )}
                    <span className="text-white/30 text-[10px]">{r.date}</span>
                  </div>
                </div>
              </div>

              {/* Stars */}
              <StarRow />

              {/* Quote */}
              <p className="text-white/55 text-sm leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Google logo footer */}
              <div className="flex items-center gap-1.5 pt-1 border-t border-white/[0.06]">
                <svg viewBox="0 0 48 48" className="w-3.5 h-3.5 shrink-0">
                  <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.2 33.7 29.7 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.4 5.1 29.5 3 24 3 12.9 3 4 11.9 4 23s8.9 20 20 20c11 0 19.7-7.7 19.7-20 0-1.3-.1-2.7-.2-3z"/>
                  <path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 16 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.4 5.1 29.5 3 24 3c-7.6 0-14.2 4.2-17.7 10.7z"/>
                  <path fill="#FBBC05" d="M24 43c5.5 0 10.4-1.9 14.2-5.2l-6.6-5.4C29.6 34.3 27 35 24 35c-5.6 0-10.3-3.8-11.9-9l-7 5.4C8.4 38.6 15.7 43 24 43z"/>
                  <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-.8 2.3-2.4 4.2-4.4 5.5l6.6 5.4C41.7 35.7 44.5 30 44.5 23c0-1-.1-2-.2-3z"/>
                </svg>
                <span className="text-white/30 text-[10px]">Google review</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
          href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C9A962]/70 hover:text-[#C9A962] text-sm transition-colors"
          >
            See all reviews on Google
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
