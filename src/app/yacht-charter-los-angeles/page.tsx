"use client";
import ServiceLandingPage, { type ServiceLandingConfig } from "@/components/ServiceLandingPage";

const cfg: ServiceLandingConfig = {
  slug: "yacht-charter-los-angeles",
  serviceType: "Superyachts",
  badge: "Marina del Rey · Newport Beach · Malibu",
  heroImg: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1600&q=80",
  heroTagline: "Yacht Charter",
  heroTitle: "Superyacht Charter",
  heroTitleGold: "Los Angeles",
  heroSubtitle: "From day charters to week-long voyages. Malibu, Catalina Island, or the Mexican Riviera — your private yacht awaits.",

  gridTitle: "Yachts & Superyachts Available in LA",
  gridSubtitle: "Day charters, weekend getaways, corporate events, and extended voyages. Every vessel crewed and ready.",
  items: [
    {
      name: "Motor Yacht",
      sub: "40–80 ft · 2–20 guests",
      tags: ["Day Charter", "Sunset Cruise", "Catalina Island"],
      img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80",
      color: "#60a5fa",
    },
    {
      name: "Superyacht",
      sub: "80–200+ ft · Full crew",
      tags: ["Week Charter", "Luxury Cabins", "Pacific Coast"],
      img: "https://plus.unsplash.com/premium_photo-1680831748191-d726a2f7b201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
      color: "#C9A962",
    },
    {
      name: "Sailing Yacht",
      sub: "50–120 ft · 6–14 guests",
      tags: ["Sunrise Sail", "Malibu Coast", "Weekend"],
      img: "/cars/sailing.jpg",
      color: "#34d399",
    },
    {
      name: "Sport Yacht",
      sub: "35–60 ft · Performance",
      tags: ["High Speed", "Day Trip", "Watersports"],
      img: "https://images.unsplash.com/photo-1575224639406-b218af1ee31e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
      color: "#f97316",
    },
    {
      name: "Catamaran",
      sub: "45–100 ft · Stable platform",
      tags: ["Groups", "Events", "Corporate"],
      img: "https://images.unsplash.com/photo-1685720543787-54800296f5e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
      color: "#f59e0b",
    },
    {
      name: "Mega Yacht",
      sub: "200 ft+ · Private ship",
      tags: ["Extended Voyages", "Full Crew", "Helicopter Pad"],
      img: "https://plus.unsplash.com/premium_photo-1733259665141-259568bda31a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800",
      color: "#a78bfa",
    },
  ],
  itemsFooter: "Need a floating venue for a corporate event or product launch? We specialize in private yacht events in LA.",

  stepsTitle: "Chartering a Yacht in Los Angeles is This Easy",
  steps: [
    { n: "01", title: "Tell Us Your Vision", body: "Date, number of guests, duration, and departure point — Marina del Rey, Newport Beach, or Malibu." },
    { n: "02", title: "We Find Your Vessel", body: "Your concierge matches you with the perfect yacht and crew. You approve the itinerary." },
    { n: "03", title: "All Aboard", body: "Step onto your private yacht. The crew handles everything — navigation, catering, activities." },
  ],

  areasTitle: "Yacht Charter Departure Points in Southern California",
  areas: ["Marina del Rey", "Newport Beach", "Malibu", "Long Beach", "San Pedro", "Redondo Beach", "Catalina Island", "Santa Barbara", "San Diego"],
  areasNote: "Extended charters available along the full Pacific Coast, Baja Mexico, and beyond.",

  whyTitle: "The Best Yacht Charter Experience in Los Angeles",
  why: [
    { icon: "⚓", title: "Crewed & Ready", body: "Every charter comes with an experienced captain and full crew. You just enjoy." },
    { icon: "🍾", title: "Full Catering Options", body: "Private chefs, premium spirits, custom menus. Everything arranged through your concierge." },
    { icon: "🤿", title: "Watersports & Activities", body: "Jet skis, paddleboards, snorkeling gear, fishing — we arrange all water activities on board." },
    { icon: "🎉", title: "Events & Celebrations", body: "Birthday parties, bachelorettes, corporate events — LA's most memorable private venue is on the water." },
    { icon: "🌅", title: "Catalina & Beyond", body: "Day trips to Catalina Island, overnight to Santa Barbara, or week-long Pacific Coast voyages." },
    { icon: "🔒", title: "Total Privacy", body: "No crowds. No paparazzi. Just you, your guests, and the open ocean." },
  ],

  faqTitle: "Yacht Charter Los Angeles — Common Questions",
  faqs: [
    { q: "How do I charter a yacht in Los Angeles?", a: "Send NexAssist a message with your date, number of guests, and what type of experience you're looking for. Your concierge will present options and handle all bookings." },
    { q: "Where do yacht charters depart from in LA?", a: "We arrange departures from Marina del Rey, Newport Beach, Malibu, Long Beach, and San Pedro. We'll pick the best marina for your itinerary." },
    { q: "How much does a yacht charter in LA cost?", a: "Day charters start around $1,500–$3,000 for a smaller motor yacht. Superyacht charters run from $10,000/day and up. Your concierge will provide exact pricing for your needs." },
    { q: "Can I go to Catalina Island on a charter?", a: "Yes — Catalina Island day trips are one of our most popular requests. We arrange the full itinerary including anchorage, tender service, and onshore dining." },
    { q: "Do you offer yacht charters for corporate events?", a: "Absolutely. We specialize in private yacht corporate events in LA — product launches, client entertainment, team outings. Catering, AV, and branding all arranged." },
    { q: "Can I charter a yacht overnight?", a: "Yes. Overnight and multi-day yacht charters are available. We arrange full crew, provisioning, and itinerary from LA along the California coast or down to Mexico." },
  ],

  ctaTitle: "Set Sail from Los Angeles. Your Yacht is Waiting.",
  ctaSubtitle: "Day charters, sunset cruises, Catalina Island getaways, and week-long Pacific voyages. One message to your concierge.",
  ctaNote: "Marina del Rey · Newport Beach · Malibu · Catalina Island",
};

function LongFormContent() {
  return (
    <section className="bg-[#080808] text-white/70 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-14">

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Yacht Charter Los Angeles — The Complete Guide</h2>
          <p className="mb-4 leading-relaxed">Los Angeles sits on one of the most beautiful stretches of coastline in the world. From Marina del Rey to Newport Beach, from Malibu&apos;s golden shores to the crystal waters around Catalina Island — a private yacht charter lets you experience Southern California the way it was meant to be seen: from the water.</p>
          <p className="mb-4 leading-relaxed">NexAssist arranges private yacht charters throughout Los Angeles and Southern California. Whether you want a sunset cruise for two, a birthday party for fifty, a corporate event on the water, or a week-long Pacific voyage, your personal concierge handles every detail — vessel selection, crew, catering, itinerary, and all logistics. You just step aboard.</p>
          <p className="leading-relaxed">Our charter network spans motor yachts, sailing yachts, catamarans, superyachts, and mega yachts. Every vessel is professionally crewed and maintained to the highest standard. We don&apos;t list inventory on a website — we source the right vessel for your specific vision.</p>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Popular Yacht Charter Experiences in Los Angeles</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-[#C9A962] text-lg font-semibold mb-2">Catalina Island Day Charter</h3>
              <p className="leading-relaxed">The most popular day charter from Los Angeles. Two and a half hours from Marina del Rey or Newport Beach, Catalina Island offers pristine anchorages, crystal-clear water, and world-class snorkeling. NexAssist arranges the full experience — onboard catering, water toys, anchorage, and tender service to shore. A perfect day on the water.</p>
            </div>
            <div>
              <h3 className="text-[#C9A962] text-lg font-semibold mb-2">Sunset Cruise Los Angeles</h3>
              <p className="leading-relaxed">A 3–4 hour sunset cruise departing from Marina del Rey or Malibu is one of the most memorable experiences in LA. Watch the sun set over the Pacific from the deck of a private yacht, champagne in hand. Popular for date nights, proposals, birthday celebrations, and small group gatherings.</p>
            </div>
            <div>
              <h3 className="text-[#C9A962] text-lg font-semibold mb-2">Corporate Yacht Events</h3>
              <p className="leading-relaxed">Los Angeles has some of the most creative corporate entertainment venues in the world, and a private yacht tops the list. We arrange corporate charters for product launches, client entertainment, team outings, and VIP events. Full AV capabilities, catering, and branded experiences available. Departure from Marina del Rey, Long Beach, or Newport Beach.</p>
            </div>
            <div>
              <h3 className="text-[#C9A962] text-lg font-semibold mb-2">Pacific Coast Voyage</h3>
              <p className="leading-relaxed">For those who want more than a day on the water, NexAssist arranges extended yacht charters along the Pacific Coast. Sail from Los Angeles up to Santa Barbara and the Channel Islands, or south along Baja California to Cabo San Lucas. Multi-day itineraries include full provisioning, crew, and port arrangements at every stop.</p>
            </div>
            <div>
              <h3 className="text-[#C9A962] text-lg font-semibold mb-2">Private Events on the Water</h3>
              <p className="leading-relaxed">Birthdays, bachelorette parties, anniversaries, and private celebrations are among our most requested charters. A superyacht in Marina del Rey accommodates groups from 10 to 150 guests with full catering, bar service, entertainment, and watersports. There is no more unique private event venue in Los Angeles.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Yacht Charter Departure Points — Los Angeles & Southern California</h2>
          <p className="mb-4 leading-relaxed">Los Angeles offers multiple world-class marinas for yacht charter departures. NexAssist works with all of them and will recommend the best departure point based on your itinerary:</p>
          <ul className="space-y-3 list-none">
            <li><span className="text-[#C9A962] font-semibold">Marina del Rey</span> — The largest small craft harbor on the US West Coast and the most popular departure point for LA yacht charters. Extensive facilities, easy access from Beverly Hills and Santa Monica.</li>
            <li><span className="text-[#C9A962] font-semibold">Newport Beach</span> — Orange County&apos;s premier marina. Ideal for charters heading south toward Catalina&apos;s east side or San Diego.</li>
            <li><span className="text-[#C9A962] font-semibold">Malibu</span> — For a more exclusive, private embarkation. Limited facilities but unmatched scenery. Best for smaller vessels and intimate charters.</li>
            <li><span className="text-[#C9A962] font-semibold">Long Beach / San Pedro</span> — Home to some of the largest superyachts based in Southern California. Best for mega yacht charters and extended Pacific voyages.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Why Charter a Yacht Through NexAssist in Los Angeles?</h2>
          <p className="mb-4 leading-relaxed"><strong className="text-white">We source, you sail.</strong> Traditional yacht charter brokers present you with a list of available vessels and leave the logistics to you. NexAssist is different — your concierge handles every detail from vessel selection to the moment you step off the gangway. We coordinate with the captain, arrange catering, book any shoreside experiences, and manage the entire itinerary so you don&apos;t have to think about a thing.</p>
          <p className="mb-4 leading-relaxed"><strong className="text-white">Access to the best vessels in Southern California.</strong> Our network includes private yacht owners, established charter companies, and exclusive vessels that aren&apos;t listed on public charter platforms. Whether you need a 45-foot sailing catamaran for a relaxed day or a 150-foot superyacht for a corporate event, we can source it.</p>
          <p className="mb-4 leading-relaxed"><strong className="text-white">Full-service catering and crew coordination.</strong> Every charter through NexAssist includes professional crew. We also coordinate private chefs, premium bar service, and custom catering menus for any occasion — from casual beach picnics to formal dinners at anchor.</p>
          <p className="leading-relaxed"><strong className="text-white">Available 24/7.</strong> Whether you&apos;re planning weeks ahead or need a last-minute sunset charter tomorrow, NexAssist operates around the clock. We&apos;ve arranged same-day yacht charters in Los Angeles for clients who decided they needed to be on the water by 4 PM. It happens.</p>
        </div>

      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <ServiceLandingPage cfg={cfg} />
      <LongFormContent />
    </>
  );
}
