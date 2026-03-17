"use client";
import ServiceLandingPage, { type ServiceLandingConfig } from "@/components/ServiceLandingPage";

const cfg: ServiceLandingConfig = {
  slug: "car-sales-los-angeles",
  serviceType: "Car Sales",
  badge: "Los Angeles · Nationwide Sourcing",
  heroImg: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1600&q=80",
  heroTagline: "Exotic Car Sales",
  heroTitle: "Buy or Sell Exotic Cars",
  heroTitleGold: "Los Angeles",
  heroSubtitle: "Ferrari, Lamborghini, Rolls-Royce, Porsche, AMG. We source any car you want — or sell yours for maximum value. Private, fast, and hassle-free.",

  gridTitle: "Exotic & Luxury Cars Available to Purchase",
  gridSubtitle: "Access to private collections, dealer networks, and auction inventory nationwide. Any make, any spec, any color.",
  items: [
    {
      name: "Ferrari",
      sub: "SF90 · Roma · 296 GTB · F8",
      tags: ["New & Pre-owned", "Factory Order", "Nationwide"],
      img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80",
      color: "#e53e3e",
    },
    {
      name: "Lamborghini",
      sub: "Urus · Huracán · Revuelto",
      tags: ["New & CPO", "Custom Spec", "Nationwide"],
      img: "/cars/huracan.jpg",
      color: "#f59e0b",
    },
    {
      name: "Rolls-Royce",
      sub: "Ghost · Cullinan · Spectre · Phantom",
      tags: ["Bespoke Orders", "Pre-owned", "Private Sales"],
      img: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=80",
      color: "#C9A962",
    },
    {
      name: "Porsche",
      sub: "911 GT3 RS · Taycan · Panamera Turbo",
      tags: ["Allocation Access", "Track Spec", "CPO"],
      img: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&q=80",
      color: "#60a5fa",
    },
    {
      name: "Mercedes-AMG",
      sub: "GT 63 S · G63 · SL63 · EQS AMG",
      tags: ["New", "Pre-owned", "Private Collection"],
      img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
      color: "#a78bfa",
    },
    {
      name: "BMW",
      sub: "M8 Competition · XM · M5 CS",
      tags: ["Custom Order", "New", "CPO"],
      img: "/cars/bmw-x6m.png",
      color: "#3b82f6",
    },
  ],
  itemsFooter: "McLaren, Bentley, Aston Martin, Bugatti, Koenigsegg — if it exists, we can find it.",

  stepsTitle: "Buying Your Dream Car in LA — Simplified",
  steps: [
    { n: "01", title: "Tell Us What You Want", body: "Make, model, spec, color, budget. Or just describe your dream car — we'll handle the rest." },
    { n: "02", title: "We Source It", body: "Your concierge taps our dealer and private seller network to find the exact vehicle, at the best price." },
    { n: "03", title: "Delivered to Your Door", body: "Paperwork handled, inspection done. Your new car arrives wherever you are in LA." },
  ],

  areasTitle: "Serving Car Buyers Across Los Angeles",
  areas: ["Beverly Hills", "Bel Air", "Malibu", "Hollywood Hills", "Calabasas", "Newport Beach", "Orange County", "Downtown LA", "Santa Monica", "Irvine"],
  areasNote: "We source vehicles nationwide and ship anywhere in the US. International delivery available.",

  whyTitle: "The Smarter Way to Buy or Sell an Exotic Car in LA",
  why: [
    { icon: "🔍", title: "Find Any Car", body: "Impossible-to-find allocations, private collections, auction vehicles — our network covers it all." },
    { icon: "💰", title: "Best Price Guaranteed", body: "We negotiate on your behalf. No dealer markup games. You pay a fair price, every time." },
    { icon: "📋", title: "All Paperwork Handled", body: "Title, registration, transport — everything is taken care of. You just sign once." },
    { icon: "🔧", title: "Pre-Purchase Inspection", body: "Every pre-owned vehicle goes through a full inspection before you commit. No surprises." },
    { icon: "📦", title: "Sell Your Car", body: "Want to sell? We market your car to qualified buyers through our private network for maximum value." },
    { icon: "🔒", title: "Private Transactions", body: "Discreet, off-market deals. No public listings, no unwanted attention." },
  ],

  faqTitle: "Exotic Car Sales Los Angeles — Common Questions",
  faqs: [
    { q: "Can you help me find a specific exotic car in Los Angeles?", a: "Yes. Tell NexAssist the exact car you want — make, model, year, color, spec. Your concierge will source it through our dealer, private seller, and auction network." },
    { q: "Do you have access to hard-to-find allocations?", a: "Yes. We have relationships with dealerships nationwide that can secure allocations for high-demand vehicles like the Ferrari SF90, Lamborghini Revuelto, and Porsche GT3 RS." },
    { q: "Can you help me sell my exotic car?", a: "Absolutely. We list your vehicle privately through our buyer network, handle all inquiries, and manage the transaction from start to finish for maximum privacy and value." },
    { q: "Do you handle pre-purchase inspections?", a: "Yes. All pre-owned vehicles go through a professional inspection before purchase. We can also arrange independent PPI by a marque specialist." },
    { q: "Do you ship cars outside of Los Angeles?", a: "Yes. We arrange enclosed transport nationwide and international shipping to Canada, Europe, the Middle East, and beyond." },
    { q: "Can I trade in my current car?", a: "Yes. We handle trade-ins as part of the purchase process, appraising your current vehicle and applying its value toward your new purchase." },
  ],

  ctaTitle: "Find Your Perfect Car. Anywhere in the World.",
  ctaSubtitle: "The most private, efficient way to buy or sell an exotic car in Los Angeles. One message to your concierge.",
  ctaNote: "Ferrari · Lamborghini · Rolls-Royce · Porsche · AMG · BMW M",
};

function LongFormContent() {
  return (
    <section className="bg-[#080808] text-white/70 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-14">
        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Buying &amp; Selling Exotic Cars in Los Angeles</h2>
          <p className="mb-4 leading-relaxed">Los Angeles has one of the most active exotic and collector car markets in the world. The combination of wealth concentration, year-round driving weather, and a culture that genuinely values extraordinary cars creates a market where the right vehicle finds the right buyer — if you know how to reach them. NexAssist operates a private car market for buyers and sellers of exceptional vehicles in Los Angeles.</p>
          <p className="mb-4 leading-relaxed">For buyers: we source vehicles that are not publicly listed, provide honest condition assessments, and handle all the logistics of inspection, transportation, and title transfer. For sellers: we connect your vehicle with qualified buyers who are actively searching for your specific car, manage the transaction with discretion, and ensure you receive fair market value without the friction of public listing platforms.</p>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Most Traded Exotic Cars in the Los Angeles Private Market</h2>
          <div className="space-y-5">
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Ferrari</h3><p className="leading-relaxed">Ferrari is consistently the most traded exotic car brand in our Los Angeles network. The 488 GTB, 488 Pista, Roma, SF90 Stradale, and F8 Tributo are our most frequently handled models. Limited Icona series and special projects are sourced on request. California-title Ferraris with documented service history command significant premiums.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Porsche</h3><p className="leading-relaxed">The Porsche 911 GT3, GT3 RS, and Turbo S are among the most liquid exotic cars in the private market — they sell quickly at any price point because demand consistently exceeds supply. Porsche GT cars with original ownership in California and complete documentation are among the easiest vehicles to sell at a premium. We source and sell GT2 RS, 918 Spyder, and Carrera GT at the top of the collector segment.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Lamborghini</h3><p className="leading-relaxed">The Huracán STO, Performante, and Urus Performante are our most frequently traded Lamborghinis. Limited Superveloce and Squadra Corse models are particularly sought by our collector clients. The Revuelto — Lamborghini&apos;s new hybrid V12 — is generating significant pre-owned market activity as first delivery owners begin to trade.</p></div>
            <div><h3 className="text-[#C9A962] text-lg font-semibold mb-2">Ultra-Rare &amp; Collector</h3><p className="leading-relaxed">NexAssist has sourced and transacted Bugatti Chiron and Divo, Koenigsegg Agera and Regera, Pagani Huayra, and McLaren P1 for Los Angeles clients. These transactions require relationships, discretion, and access to a buyer pool that exists outside any public platform. If you are buying or selling at this level, NexAssist is the right partner.</p></div>
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-5">Off-Market Car Buying in Los Angeles</h2>
          <p className="mb-4 leading-relaxed">The best exotic cars in Los Angeles often never appear for sale publicly. A Ferrari 250 GTO does not get listed on a car website. A low-mileage 918 Spyder with a known ownership history sells before anyone hears it is available. Access to these opportunities requires being in the right network at the right time.</p>
          <p className="leading-relaxed">NexAssist maintains ongoing relationships with private collectors, estate executors, and specialist dealers throughout Los Angeles, Southern California, and nationally. When an exceptional vehicle becomes available privately, our clients have the first opportunity. If you have cash ready and know what you want, tell your concierge — we will find it.</p>
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
