/**
 * city-content.ts
 *
 * Unique, substantive content for each city concierge page.
 * Each entry gives Google something it cannot find on any other page:
 *   - intro: 2-3 sentence location-specific editorial (NOT just "{city} is great")
 *   - highlight: a vivid, specific detail about this city and NexAssist's service there
 *   - popularRequests: real, city-specific use cases (events, venues, vibe)
 *   - deliveryNote: specific delivery context (streets, landmarks, airports, docks)
 *   - insiderTip: one local insider line that only someone who knows this city would write
 *   - spotlightService: which NexAssist service gets called most from this city & why
 */

export interface CityContent {
  intro: string;
  highlight: string;
  popularRequests: string[];
  deliveryNote: string;
  insiderTip: string;
  spotlightService: { label: string; reason: string };
}

export const CITY_CONTENT: Record<string, CityContent> = {

  "beverly-hills": {
    intro: "Beverly Hills clients expect perfection — and they know the difference. The NexAssist concierge team services Rodeo Drive, Trousdale Estates, and the Wilshire Corridor daily, which means same-day delivery to your hotel, estate, or office without the friction of a traditional rental.",
    highlight: "A Ferrari Roma delivered to the Beverly Wilshire valet, a Rolls-Royce Ghost waiting at the Peninsula — this is the standard NexAssist operates at in Beverly Hills, not the exception.",
    popularRequests: [
      "Exotic car delivery to the Beverly Hills Hotel or Peninsula for a weekend",
      "Chauffeur in a Maybach or Cullinan for a full day of Rodeo Drive shopping",
      "Private jet charter from Van Nuys (VNY) coordinated same day",
      "Luxury villa sourcing in Trousdale Estates for extended stays",
    ],
    deliveryNote: "We deliver anywhere in Beverly Hills — hotel valet, private estate gate, or directly to your office on Wilshire Boulevard. No parking lot pickups.",
    insiderTip: "For a Rodeo Drive dinner arrival that actually turns heads, request delivery 30 minutes before your reservation and park on Rodeo itself. Our concierge handles the timing.",
    spotlightService: {
      label: "Exotic Car Rental",
      reason: "Beverly Hills is the single highest-demand city in our network for exotic car delivery. The clientele here expects Ferrari and Lamborghini — not upgraded sedans.",
    },
  },

  "malibu": {
    intro: "Malibu is 27 miles of coastline, and the right car transforms every mile of it. NexAssist delivers to the Colony, Broad Beach, and Point Dume estates — including gated properties — because we've done it enough to know the access logistics.",
    highlight: "The window for PCH driving is 6–9 AM before traffic builds. Our concierge can have your exotic car at your Malibu gate before sunrise so you own the road.",
    popularRequests: [
      "Convertible exotic delivery for a PCH sunrise drive — Ferrari Roma, McLaren GT, or Bentley Continental",
      "Cadillac Escalade or Range Rover for a Malibu Farm brunch run with the family",
      "Yacht charter from Malibu Pier or Marina del Rey for a coastal day on the water",
      "Luxury villa sourcing at Broad Beach or the Colony for weekend or weekly stays",
    ],
    deliveryNote: "We deliver directly to gated Malibu Colony homes, Broad Beach Road, Point Dume, and all PCH addresses. We know the access codes process — your concierge handles advance coordination.",
    insiderTip: "Nobu Malibu has an unofficial best table — the corner booth facing the ocean. Our concierge can't get you that table, but we can get you there in a car that makes the walk to any table feel like an entrance.",
    spotlightService: {
      label: "Exotic Car Rental + Yacht",
      reason: "Malibu is where NexAssist most often combines two services in one request: a supercar for the morning PCH drive and a yacht charter in the afternoon. The combination packages are our most requested in the area.",
    },
  },

  "west-hollywood": {
    intro: "WeHo never sleeps, and neither does the NexAssist concierge. From the Sunset Strip to the Pacific Design Center, this is LA's epicenter of entertainment and nightlife — and the city where arriving in the right car matters most.",
    highlight: "A Lamborghini Urus parked outside Catch LA or a Rolls-Royce Ghost pulling up to Chateau Marmont's entrance doesn't just look good — it signals something. Our clients in West Hollywood understand that better than anyone.",
    popularRequests: [
      "Lamborghini, Ferrari, or Cullinan for a Sunset Strip night out starting at 9 PM",
      "Chauffeur for awards season events — SAG, Grammys, industry parties",
      "Exotic car for a music video shoot on Sunset or Melrose",
      "Same-day car delivery to the Mondrian, Andaz, or Chateau Marmont",
    ],
    deliveryNote: "We deliver to every hotel on the Strip, private residences on the Hills side streets, and directly to event venues. Late-night delivery after 10 PM available — just ask.",
    insiderTip: "The valet line at Catch on a Saturday moves slowly. Have your concierge arrange arrival 10 minutes early, pull up in something memorable, and you'll never wait in the valet queue again.",
    spotlightService: {
      label: "Exotic Car Rental",
      reason: "West Hollywood drives more nighttime and weekend exotic car requests than any neighborhood except Beverly Hills. The Strip culture makes the right car essential, not optional.",
    },
  },

  "santa-monica": {
    intro: "Santa Monica is where LA's beach culture meets genuine affluence — Ocean Avenue penthouse residents, corporate executives at Shutters and Casa del Mar, and international visitors who expect the same service quality they'd get in Monaco.",
    highlight: "We deliver to Santa Monica's hotel rows, private condos on Ocean Avenue, and the residential streets south of Montana — discretely and on time, every request.",
    popularRequests: [
      "Exotic car delivery to Shutters on the Beach or Casa del Mar for a weekend drive",
      "Range Rover or Escalade for a PCH day trip north toward Malibu",
      "Private jet coordination from Santa Monica Airport (SMO) — we handle ground transport both ways",
      "Yacht charter from Marina del Rey for a Santa Monica coastal day",
    ],
    deliveryNote: "We deliver to all of Santa Monica — Ocean Avenue, Montana Avenue, Main Street, and the beachfront hotel valet circles. We also coordinate Santa Monica Airport (SMO) pickups and drop-offs.",
    insiderTip: "The stretch of Ocean Avenue from Palisades Park at sunset — top-down, whether it's a Ferrari or a Bentley convertible — is one of the best drives in all of Los Angeles. Our clients call it their weekly reset.",
    spotlightService: {
      label: "Chauffeur Service",
      reason: "Santa Monica clients frequently request a Maybach or Escalade chauffeur for full-day corporate use — airport transfers, meetings across LA, dinner — without having to manage parking or navigate the city.",
    },
  },

  "bel-air": {
    intro: "Bel Air is the definition of private — gated, quiet, and home to some of the most valuable real estate on earth. NexAssist delivers directly to estate gates and coordinates with household staff and security teams when needed.",
    highlight: "Several of our Bel Air clients keep an NexAssist concierge on regular retainer — a weekly exotic car rotation, a standing airport transfer arrangement, and occasional yacht or villa bookings for guests.",
    popularRequests: [
      "Rolls-Royce Cullinan or Ghost delivery for a weekend in the estate",
      "Airport transfer in a Maybach from LAX or Van Nuys (VNY) for arriving guests",
      "Exotic car for visiting family or business associates staying at the Hotel Bel-Air",
      "Luxury villa sourcing for overflow guests from estate events",
    ],
    deliveryNote: "We deliver to all Bel Air estate gates, coordinate with security at gated communities, and can arrange silent delivery protocols for high-privacy clients. Your concierge has experience navigating the gate access process.",
    insiderTip: "The Hotel Bel-Air's restaurant is one of the most reliable power-lunch spots in LA. A car that matches the setting — Ghost, Flying Spur, Cullinan — completes the picture without saying a word.",
    spotlightService: {
      label: "Exotic Car Rental + Chauffeur",
      reason: "Bel Air generates the highest percentage of dual-service requests: a self-drive exotic for the owner, a chauffeur vehicle for guests. Both handled by one concierge, one message.",
    },
  },

  "calabasas": {
    intro: "Calabasas has become one of the most recognized luxury zip codes in the world — and the expectations that come with that reputation run through everything, including how you show up. NexAssist serves The Oaks, The Estates, and the broader Calabasas community with the same discretion its residents expect.",
    highlight: "We're one of the few concierge services that regularly delivers exotics to gated Calabasas communities — we know the guest entry protocols, the HOA requirements, and how to coordinate delivery without making a scene.",
    popularRequests: [
      "Lamborghini Urus or G63 AMG for a weekend in The Oaks or The Estates",
      "Exotic car delivery for celebrity clients and their household teams",
      "Chauffeur service to LAX or Burbank (BUR) for early morning departures",
      "Private jet charter from Van Nuys (VNY) — 15 minutes from most Calabasas gates",
    ],
    deliveryNote: "We deliver to all Calabasas gated communities including The Oaks, The Estates, and Hidden Hills adjacent properties. We coordinate guest access in advance and arrive on schedule.",
    insiderTip: "Van Nuys Airport (VNY) is 20–25 minutes from most Calabasas gates in light traffic — making private jet access far more practical here than at LAX. Our concierge can handle the ground transport and flight coordination together.",
    spotlightService: {
      label: "Private Jet Charter",
      reason: "Calabasas's proximity to Van Nuys Airport makes private jet charter one of the most-requested services in this area. Wheels up in under 45 minutes from your front door.",
    },
  },

  "pacific-palisades": {
    intro: "Pacific Palisades sits above the Pacific with the Santa Monica Mountains as a backdrop — a neighborhood of dramatic views, serious money, and residents who want their luxury services to match the setting without any friction.",
    highlight: "The Palisades is one of the few LA neighborhoods where you'll find ocean-view estates, a walkable village, and direct canyon access to Malibu all within a 10-minute radius. NexAssist services all of it.",
    popularRequests: [
      "Convertible exotic for a PCH and Malibu Canyon loop on a clear morning",
      "Escalade or Range Rover for a Palisades Village brunch run and beach afternoon",
      "Airport transfer from LAX or Burbank in a Maybach or Escalade",
      "Luxury villa sourcing for weekend guests from out of town",
    ],
    deliveryNote: "We deliver to all Pacific Palisades addresses — Castellammare, the upper estates near Riviera Country Club, and Marquez Knolls. We're familiar with the Palisades' narrow hillside streets.",
    insiderTip: "Temescal Canyon Road at 6 AM on a weekend is one of the cleanest driving stretches in greater LA — almost no traffic, cool air, technical turns. In a McLaren or a Porsche 911, it's a private driving experience most people don't know exists.",
    spotlightService: {
      label: "Exotic Car Rental",
      reason: "Pacific Palisades clients drive some of the best roads in LA, and they know it. The demand for performance-oriented cars — McLaren, Porsche, Ferrari — is highest here relative to other neighborhoods.",
    },
  },

  "brentwood": {
    intro: "Brentwood is the quieter, more residential side of LA's westside wealth — tree-lined streets, serious dining on San Vicente, and a clientele that values quality over flash. NexAssist's Brentwood requests reflect that: practical luxury, always delivered perfectly.",
    highlight: "San Vicente Boulevard on a clear day in a convertible is one of Brentwood's quiet pleasures. Our clients use it as a transition — a 20-minute drive that starts the weekend right.",
    popularRequests: [
      "Bentley Continental GT or Porsche 911 Cabriolet for a weekend drive",
      "Maybach or Escalade chauffeur for a full day of meetings across West LA and Beverly Hills",
      "Airport transfer from LAX in a premium SUV",
      "Luxury villa sourcing for guests visiting from out of town",
    ],
    deliveryNote: "We deliver throughout Brentwood — San Vicente corridor, upper Brentwood estates near Mandeville Canyon, and Barrington. We're also familiar with the Brentwood Country Club area and its access protocols.",
    insiderTip: "Farmshop Brentwood for breakfast, then a drive up Mandeville Canyon in something rear-wheel — it's a Brentwood morning that money can buy but most people never think to arrange.",
    spotlightService: {
      label: "Chauffeur Service",
      reason: "Brentwood professionals tend to use NexAssist for full-day chauffeur bookings — allowing them to work through back-to-back meetings across the city without worrying about parking or navigation.",
    },
  },

  "newport-beach": {
    intro: "Newport Beach is Orange County's luxury capital — Fashion Island, the harbor packed with yachts, and a wealth density that rivals Beverly Hills. NexAssist services Newport with the same depth as our LA core.",
    highlight: "Newport Harbor has one of the highest concentrations of private yachts on the West Coast. Our concierge regularly coordinates car-to-dock arrivals: exotic car delivered to the harbor entrance, yacht ready at the slip.",
    popularRequests: [
      "Yacht charter from Newport Harbor for a day on the water — sunset cruises, Catalina trips",
      "Exotic car delivery for a Newport Coast estate weekend",
      "Ferrari or Lamborghini for a Pacific Coast Highway drive from Newport to Laguna Beach",
      "Chauffeur in a Maybach for John Wayne Airport (SNA) arrivals and corporate events",
    ],
    deliveryNote: "We deliver to Newport Coast estates, the Balboa Peninsula, Fashion Island area hotels, and directly to Newport Harbor dock access points. John Wayne Airport (SNA) ground coordination available.",
    insiderTip: "The drive from Newport Beach south on PCH to Laguna Beach at golden hour — in something open-top — is one of the best 30-minute drives in California. Our clients book it as a standing Friday ritual.",
    spotlightService: {
      label: "Yacht Charter",
      reason: "Newport Beach generates more yacht charter requests than any other city in our Orange County network. The harbor access, the clientele, and the Pacific conditions are all ideal.",
    },
  },

  "laguna-beach": {
    intro: "Laguna Beach is California's most beautiful coastal art town — clifftop estates, private coves, and a lifestyle curated over decades by artists, executives, and old-money families who chose beauty over proximity to the city.",
    highlight: "The Montage Laguna Beach and Surf & Sand Resort are two of the most sophisticated hotel properties in Southern California. NexAssist delivers directly to both, and to the private cliff estates above.",
    popularRequests: [
      "Exotic convertible delivery to the Montage or a Laguna Beach estate for a weekend",
      "PCH coastal drive from Laguna north through Newport and south toward Dana Point",
      "Yacht charter from Dana Point Harbor — whale watching, Catalina, or sunset cruise",
      "Designer bag sourcing or luxury watch for a gifting occasion",
    ],
    deliveryNote: "We deliver to Laguna Beach's hillside estates, Main Beach area hotels, the Montage, and Surf & Sand. Dana Point Harbor yacht coordination is seamless from Laguna.",
    insiderTip: "The stretch of PCH through Laguna from Crystal Cove south has the most dramatic cliff-and-ocean scenery in all of OC. In a Porsche 911 Cabriolet or Ferrari Roma Spider, windows down — it doesn't get better than that in Southern California.",
    spotlightService: {
      label: "Exotic Car Rental",
      reason: "Laguna Beach's dramatic coastal roads and aesthetic culture make it a natural home for convertible exotic requests — our highest-margin category and one of the most personally satisfying drives we facilitate.",
    },
  },

  "manhattan-beach": {
    intro: "Manhattan Beach is the most coveted coastal address in the South Bay — a tight grid of tree-lined streets, a walkable downtown, and residents who earned serious money in tech, finance, and sports. NexAssist brings the same service quality here that Beverly Hills clients expect.",
    highlight: "Manhattan Beach is home to more professional athletes per square mile than almost anywhere in LA. Game-day deliveries — blacked-out SUV to SoFi Stadium — are a regular part of our South Bay service.",
    popularRequests: [
      "Escalade or Cullinan delivery for a beach day or Strand walk with family",
      "Exotic car for a South Bay coastal drive — Strand to PCH to Malibu",
      "Chauffeur to SoFi Stadium or Kia Forum for events",
      "Airport transfer to LAX — 15 minutes in light traffic",
    ],
    deliveryNote: "We deliver throughout Manhattan Beach — The Strand, Hill Section estates, and downtown. LAX is 10–15 minutes from most Manhattan Beach addresses, making airport coordination exceptionally straightforward.",
    insiderTip: "The Hill Section above the Strand has some of the best sunset views in the South Bay — from the right spot you can see Catalina on a clear day. A rooftop deck, a glass of wine, and a supercar in the driveway is the Manhattan Beach version of a perfect evening.",
    spotlightService: {
      label: "Chauffeur Service",
      reason: "Manhattan Beach generates consistent chauffeur demand — airport runs, stadium events, and full-day corporate transport across LA are all frequent requests from this area.",
    },
  },

  "pasadena": {
    intro: "Pasadena is one of Southern California's most architecturally magnificent cities — Rose Bowl, the Huntington, Old Town, and block after block of Craftsman estates that signal old California money. NexAssist serves Pasadena with the depth of understanding a city like this demands.",
    highlight: "Rose Bowl events — concerts, flea markets, USC games — create specific concierge moments. Our clients book exotic car delivery for the walk from their Pasadena estate to the parking lot that everybody else avoids.",
    popularRequests: [
      "Luxury SUV or Maybach for a Rose Bowl event evening",
      "Rolls-Royce or Bentley for a Norton Simon Museum or Huntington Garden visit",
      "Corporate chauffeur for executive meetings between Pasadena and DTLA",
      "Exotic car for a weekend drive through the Angeles Crest Highway into the mountains",
    ],
    deliveryNote: "We deliver throughout Pasadena — San Marino adjacent estates, Old Town, the Arroyo Seco area, and Altadena. Angeles Crest Highway exotic car deliveries coordinated on request.",
    insiderTip: "Angeles Crest Highway out of La Cañada Flintridge is one of the greatest mountain drives in Southern California — technical, scenic, and almost empty on weekday mornings. In something with real power and good brakes, it's a revelation.",
    spotlightService: {
      label: "Exotic Car Rental",
      reason: "Pasadena's proximity to Angeles Crest Highway drives a consistent stream of mountain driving requests — Porsche GT3, McLaren, and Ferrari Roma are the most requested cars for this use case.",
    },
  },

  "irvine": {
    intro: "Irvine is one of America's wealthiest and most educated cities — tech headquarters, UCI research, John Wayne Airport, and a highly international community that expects global service standards. NexAssist covers all of it from Irvine Spectrum to Newport Coast.",
    highlight: "Irvine's tech and biotech executives are some of NexAssist's most efficient clients — one message, exact requirements, rapid confirmation. They know what they want and we deliver it without friction.",
    popularRequests: [
      "Exotic car for a weekend drive south to Laguna Beach or north toward Malibu",
      "Chauffeur in a Maybach or Escalade for corporate events at the Irvine Marriott or Pelican Hill",
      "John Wayne Airport (SNA) ground transport — arrivals and departures",
      "Private jet charter from John Wayne for domestic or Mexico trips",
    ],
    deliveryNote: "We deliver throughout Irvine — Shady Canyon estates, Turtle Ridge, Quail Hill, and the business district. John Wayne Airport (SNA) is a core coordination point for our Irvine clients.",
    insiderTip: "Pelican Hill Golf Club overlooks one of the most dramatic Pacific coastal vistas in California. Arriving for a round in a Rolls-Royce Cullinan or Bentley Bentayga is the kind of detail that Irvine's most serious clients build into their weekend planning.",
    spotlightService: {
      label: "Private Jet Charter",
      reason: "Irvine's proximity to John Wayne Airport and its business-heavy clientele make private jet charter one of the top services requested here — weekend escapes to Cabo, Las Vegas, or the Bay Area.",
    },
  },

  "dana-point": {
    intro: "Dana Point is anchored by the Ritz-Carlton Laguna Niguel and Monarch Beach Resort — two of Southern California's finest resort properties — plus a world-class harbor that NexAssist uses as a base for its OC coastal yacht operations.",
    highlight: "Dana Point Harbor is our primary OC yacht staging point. Whale watching charters, Catalina Island trips, and sunset cruises all depart from here, and NexAssist handles the full coordination including car delivery to the harbor.",
    popularRequests: [
      "Yacht charter from Dana Point Harbor — half day, full day, sunset cruise",
      "Rolls-Royce or Bentley delivery to the Ritz-Carlton Laguna Niguel or Monarch Beach",
      "Exotic car for a PCH coastal drive from Dana Point to Laguna and Newport",
      "Chauffeur for a John Wayne Airport arrival to Monarch Beach Resort",
    ],
    deliveryNote: "We deliver to Ritz-Carlton Laguna Niguel, Monarch Beach Resort, Dana Point Harbor, and the private neighborhoods of Capistrano Beach and Capo Beach. Harbor-side coordination is a specialty.",
    insiderTip: "The Ritz-Carlton Laguna Niguel's blufftop terrace at sunset is one of the finest views in California. Arrive in a convertible with a reservation at Raya — it's an evening that other guests at the hotel will remember you for.",
    spotlightService: {
      label: "Yacht Charter",
      reason: "Dana Point is our OC yacht hub. The harbor conditions, the established charter network, and the clientele staying at Ritz and Monarch Beach make this a high-frequency service from this city.",
    },
  },

  "studio-city": {
    intro: "Studio City is where the entertainment industry lives when it's not on set — Ventura Boulevard dining, canyon hiking, and a professional class of writers, directors, and producers who need their LA life to run smoothly.",
    highlight: "The proximity to both CBS Studio Center and Universal Studios means NexAssist regularly handles show-day car arrangements — productions needing on-set exotic cars, executives needing quiet Escalade runs across the hill.",
    popularRequests: [
      "Exotic car for a canyon drive through Laurel or Coldwater Canyon",
      "Chauffeur for back-to-back meetings across Studio City, Burbank, and Beverly Hills",
      "Escalade or Suburban for a group dinner at Cecconi's or Pace",
      "Airport transfer to Burbank (BUR) — 10 minutes from most Studio City addresses",
    ],
    deliveryNote: "We deliver throughout Studio City — Fryman Canyon adjacent homes, Carpenter Avenue, and the Ventura Boulevard corridor. Burbank Airport (BUR) is 10 minutes from most Studio City addresses.",
    insiderTip: "Fryman Canyon in the morning is where Studio City goes to think. A hike, then coffee at Aroma Espresso Bar on Ventura, then a day that starts on the right foot — our clients often request the car after the hike, not before.",
    spotlightService: {
      label: "Chauffeur Service",
      reason: "Studio City's entertainment industry clients use NexAssist chauffeur services for production meetings, studio runs, and the constant back-and-forth between the Valley and the Westside.",
    },
  },

  "venice": {
    intro: "Venice is LA's most creative and unexpected luxury market — Abbot Kinney boutiques, canal homes valued at $4M+, and a tech money wave from Silicon Beach that brought serious spending power to a neighborhood that still looks like a beach town.",
    highlight: "The contrast is part of the Venice appeal. A Lamborghini Urus parked outside a Abbot Kinney cafe, a yacht day starting from Marina del Rey 10 minutes away — Venice clients enjoy the tension between the lifestyle and the neighborhood.",
    popularRequests: [
      "Exotic car for a Venice Boardwalk to Malibu PCH morning drive",
      "Yacht charter from Marina del Rey — 10 minutes from most Venice addresses",
      "Range Rover or Escalade for a beach day with the family",
      "Chauffeur from Venice to LAX or Santa Monica Airport (SMO)",
    ],
    deliveryNote: "We deliver to all Venice addresses — canals, Abbot Kinney, Speedway, and the beachfront walk streets. Marina del Rey yacht coordination is seamless from Venice.",
    insiderTip: "Venice Canals at 7 AM on a Sunday are almost completely empty — one of the most peaceful moments in Los Angeles. A quiet walk, then a Ferrari waiting at the end of the bridge. Our clients who've done it say it's the best way to start a Sunday in LA.",
    spotlightService: {
      label: "Exotic Car + Yacht",
      reason: "Venice's proximity to Marina del Rey makes the car-and-yacht combination our most frequently requested dual-service in this area — morning drive, afternoon on the water.",
    },
  },

  "marina-del-rey": {
    intro: "Marina del Rey is the largest man-made small-craft harbor in the world, and NexAssist uses it as a primary staging point for its Southern California yacht charter operations. The waterfront lifestyle here is genuine — not aspirational.",
    highlight: "Burton Chace Park at sunset, a 60-foot yacht visible from the dock — marina del Rey clients experience the NexAssist yacht service at its most effortless.",
    popularRequests: [
      "Yacht charter from Marina del Rey — day cruises, sunset runs, Catalina trips",
      "Exotic car delivery to Fisherman's Village or waterfront condos",
      "Chauffeur for LAX arrivals and departures — the airport is 10 minutes from the marina",
      "Water taxi coordination to the yacht from a waterfront restaurant",
    ],
    deliveryNote: "We deliver to all Marina del Rey addresses — the Villa Marina area, Admiralty Way, and the marina-front residences. LAX ground coordination is 10 minutes away.",
    insiderTip: "The early morning window from 6–8 AM in Marina del Rey, when the harbor is still and the marine layer sits low, is one of the most genuinely beautiful moments in all of greater LA. Our yacht clients often request early departure specifically for that.",
    spotlightService: {
      label: "Yacht Charter",
      reason: "Marina del Rey is NexAssist's primary LA yacht hub. The harbor is the anchor of our Southern California maritime operations.",
    },
  },

  "burbank": {
    intro: "Burbank is where entertainment becomes industry — Warner Bros., Disney, and NBC are all within a mile of each other, and the executive class here lives and works at a pace that demands seamless logistics support.",
    highlight: "Burbank Airport (BUR) is one of the easiest-access airports in Southern California — no long terminal walks, fast boarding, and 10 minutes from most Burbank addresses. NexAssist coordinates BUR arrivals and departures daily.",
    popularRequests: [
      "Chauffeur from Burbank to Beverly Hills, West Hollywood, or Santa Monica for studio meetings",
      "Burbank Airport (BUR) ground transport in a Maybach or Escalade",
      "Exotic car for a weekend Mulholland Drive or Angeles Crest loop",
      "Corporate SUV for studio lot to hotel transport for VIP visiting talent",
    ],
    deliveryNote: "We deliver throughout Burbank — the Magnolia Park residential area, the studio corridors, and hotel properties near the airport. BUR pickup and drop-off coordination available 24/7.",
    insiderTip: "BUR has no TSA PreCheck line issues on Tuesday and Wednesday mornings — the easiest domestic departure experience in LA. Our clients who fly regularly know this; our concierge builds it into their travel schedules.",
    spotlightService: {
      label: "Chauffeur Service",
      reason: "Burbank's entertainment industry creates the highest per-capita demand for professional chauffeur service in the San Fernando Valley — studio runs, airport transfers, and event nights.",
    },
  },

  "hidden-hills": {
    intro: "Hidden Hills is California's only fully incorporated gated city — every road, every address is private. NexAssist has established delivery protocols for Hidden Hills that work smoothly, without the usual friction of a first-time visitor navigating gate access.",
    highlight: "The level of privacy that Hidden Hills provides is unmatched in greater Los Angeles. Our clients here specifically choose NexAssist because we understand discretion as a baseline, not an extra.",
    popularRequests: [
      "Lamborghini Urus or G63 AMG delivered to Hidden Hills estate gate",
      "Rolls-Royce Cullinan for a family weekend — Hidden Hills to Malibu and back",
      "Private jet from Van Nuys (VNY) — 20 minutes from the gate in light traffic",
      "Exotic car for equestrian property area drives on the private road network",
    ],
    deliveryNote: "We have established protocols for Hidden Hills gate access — your concierge coordinates with security in advance. We've delivered to Hidden Hills consistently and know the process.",
    insiderTip: "Van Nuys Airport to Hidden Hills gates is the fastest private aviation access in the Valley. Wheels down to your front door in under 30 minutes with proper pre-coordination.",
    spotlightService: {
      label: "Private Jet Charter",
      reason: "Hidden Hills clients are among our most frequent private jet users — the VNY proximity and the privacy-first mindset make flying private the natural preference.",
    },
  },

  "westlake-village": {
    intro: "Westlake Village is where the San Fernando Valley meets its most refined version — lakefront estates, the Four Seasons, and a wealthy enclave that straddles LA and Ventura County with access to both.",
    highlight: "The Four Seasons Westlake Village is one of the finest resort properties in the greater LA area, and NexAssist delivers directly to their valet. Weekend guests regularly arrange our services through the hotel concierge.",
    popularRequests: [
      "Exotic car delivery to Four Seasons Westlake Village for a weekend stay",
      "Bentley Bentayga or Range Rover for lake area drives and North Ranch Country Club events",
      "Private jet from Van Nuys (VNY) or Camarillo (CMA) — both accessible in 20–30 minutes",
      "Chauffeur for Thousand Oaks Civic Arts Plaza events and corporate dinners",
    ],
    deliveryNote: "We deliver to Westlake Village estates, North Ranch gated community, and the Four Seasons. Camarillo Airport (CMA) and Van Nuys (VNY) ground transport both available.",
    insiderTip: "Lake Sherwood Road at dusk — the lake reflecting, the hills going gold — in a convertible is one of the Conejo Valley's best-kept pleasures. Our clients who've done it always come back for it.",
    spotlightService: {
      label: "Exotic Car Rental",
      reason: "Westlake Village clients drive some of the most beautiful roads in the greater LA area — Mulholland, Lake Sherwood, Decker Canyon — and the car quality matters.",
    },
  },

  "glendale": {
    intro: "Glendale has undergone a remarkable transformation into one of LA's most commercially vibrant cities — Americana at Brand, a strong entertainment sector, and an increasingly affluent residential base that expects premium services.",
    highlight: "The Americana at Brand is one of the most productive open-air retail centers in the country. NexAssist delivers to the Americana hotel and the surrounding Glendale residential neighborhoods without the friction of the nearby 134 and 2 freeway intersections.",
    popularRequests: [
      "Exotic car for a weekend drive up Angeles Crest Highway from nearby La Cañada",
      "Chauffeur from Glendale to Burbank (BUR) for departing flights",
      "Escalade or Suburban for a large family dinner in Old Town Pasadena or Burbank",
      "Maybach or S-Class for corporate events at the Glendale Marriott",
    ],
    deliveryNote: "We deliver throughout Glendale — the Oakmont area, Brand Park neighborhood, and the Americana at Brand vicinity. Burbank Airport is 10 minutes from central Glendale.",
    insiderTip: "The Forest Lawn Dr stretch at golden hour, heading toward Griffith Park, is a genuinely beautiful piece of LA geography that most Glendale residents drive past daily without noticing. In the right car, you start noticing.",
    spotlightService: {
      label: "Chauffeur Service",
      reason: "Glendale's proximity to both Burbank Airport and the 134/2 freeway interchange makes professional chauffeur service the most practical and popular NexAssist category here.",
    },
  },

  "long-beach": {
    intro: "Long Beach is a genuine city with genuine ambition — a world-class port, a thriving arts scene in Belmont Shore, and a waterfront that rivals any coastal city in California. NexAssist delivers the full luxury stack here without the Beverly Hills premium.",
    highlight: "Long Beach Airport (LGB) is one of the most underutilized private aviation terminals in Southern California — convenient, fast, and right in our delivery zone.",
    popularRequests: [
      "Yacht charter from Long Beach Harbor — Catalina Island day trips are a specialty",
      "Exotic car delivery to Belmont Shore or Naples Island",
      "Chauffeur from Long Beach to LAX or Long Beach Airport (LGB)",
      "Escalade or Suburban for a Queen Mary event or Long Beach Grand Prix weekend",
    ],
    deliveryNote: "We deliver to all Long Beach neighborhoods — Belmont Shore, Naples Island, the harbor area, and downtown. Long Beach Airport (LGB) ground coordination available.",
    insiderTip: "The Catalina Express from Long Beach to Avalon is one of Southern California's most underrated day trips. Our clients who've done it by yacht instead of ferry say it's a completely different experience — and they're right.",
    spotlightService: {
      label: "Yacht Charter",
      reason: "Long Beach Harbor's Catalina access makes yacht charter our highest-demand service in the area. The island trip by private yacht is the definitive Long Beach luxury experience.",
    },
  },

  "hermosa-beach": {
    intro: "Hermosa Beach is the South Bay's most social city — The Strand, Pier Avenue, and a beach culture that punches above its weight in wealth and lifestyle spending. Small city, big life.",
    highlight: "Pier Avenue on a Friday night in Hermosa is one of LA's genuinely great street scenes. NexAssist clients arrive in a way that matches the moment — without the parking nightmare.",
    popularRequests: [
      "Chauffeur drop-off for a Pier Avenue night out — no parking, no hassle",
      "Exotic car for a South Bay Strand drive from Hermosa to Manhattan Beach and back",
      "Yacht charter from Marina del Rey for a coastal day trip",
      "Airport transfer to LAX — 15 minutes without traffic",
    ],
    deliveryNote: "We deliver to all Hermosa Beach addresses — The Strand walk streets, Pier Avenue area, and the hill section above PCH. Parking on the Strand is brutal; our chauffeur service solves it completely.",
    insiderTip: "The Strand in Hermosa at sunrise, when the volleyball nets are empty and the ocean is glassy — in something low and fast with the windows down — is the South Bay at its purest.",
    spotlightService: {
      label: "Chauffeur Service",
      reason: "Hermosa Beach's parking situation makes chauffeur service particularly practical — drop-off at Pier Avenue and pickup at the end of the night is the dominant use case here.",
    },
  },

  "palos-verdes-estates": {
    intro: "Palos Verdes Estates sits on a dramatic peninsula with Pacific Ocean views in three directions — an enclave of multi-million dollar homes, equestrian trails, and a coastal privacy that defines Southern California old money.",
    highlight: "Terranea Resort and Trump National Golf Club are two of the most prestigious venues on the Palos Verdes Peninsula, and NexAssist delivers to both and to the private estates surrounding them.",
    popularRequests: [
      "Rolls-Royce or Bentley for a Terranea Resort weekend stay",
      "Golf arrival at Trump National in a Cullinan or Bentayga",
      "Chauffeur from PV to LAX — 30 minutes without traffic",
      "Exotic car for a Peninsula loop drive with ocean views",
    ],
    deliveryNote: "We deliver throughout the Palos Verdes Peninsula — Palos Verdes Estates, Rolling Hills, Rancho Palos Verdes. Terranea Resort and Trump National both receive regular NexAssist deliveries.",
    insiderTip: "The Palos Verdes Drive loop at dusk — ocean on one side, the canyon on the other, Catalina visible on a clear evening — is one of the few drives in LA County that feels like you're somewhere else entirely.",
    spotlightService: {
      label: "Exotic Car Rental",
      reason: "The Peninsula loop drive and Terranea Resort access are the top use cases for exotic car rental in this area — scenery and prestige in equal measure.",
    },
  },

  "encino": {
    intro: "Encino is the entertainment industry's Valley address — large estate lots on quiet streets, Ventura Boulevard's world-class dining, and a celebrity density that rivals Calabasas without the gated formality.",
    highlight: "Balboa Park and the Sepulveda Basin give Encino a genuine outdoor dimension that other Valley neighborhoods lack. NexAssist clients here tend to plan around both the social scene and the landscape.",
    popularRequests: [
      "Exotic car or SUV for a Ventura Boulevard dinner evening",
      "Chauffeur from Encino to CBS Television City, Warner Bros., or Burbank for meetings",
      "Escalade or Suburban for a multi-family Encino Hills event",
      "Airport transfer to Van Nuys (VNY) or Burbank (BUR)",
    ],
    deliveryNote: "We deliver throughout Encino — Encino Hills estates, the Amestoy Estates area, and the Ventura Boulevard corridor. Van Nuys Airport is 10 minutes from most Encino addresses.",
    insiderTip: "The Sepulveda Basin wildlife area at sunrise is genuinely beautiful and almost completely unknown outside the neighborhood. After that — a proper breakfast at JOEY Encino, then wherever the day takes you, in the right car.",
    spotlightService: {
      label: "Chauffeur Service",
      reason: "Encino's entertainment industry professionals use NexAssist chauffeured vehicles for the same reason Studio City clients do — the Valley-to-Westside commute is one they refuse to do themselves.",
    },
  },

  "sherman-oaks": {
    intro: "Sherman Oaks is the San Fernando Valley's most centrally connected neighborhood — Galleria, Ventura Boulevard dining, and fast access to the 405, 101, and 134. NexAssist services it as a logistics hub as much as a residential one.",
    highlight: "The Galleria's executive tenant base and the Ventura Boulevard restaurant row create consistent demand for premium transport — both inbound from LAX arrivals and outbound for event nights.",
    popularRequests: [
      "Chauffeur from Sherman Oaks to Beverly Hills or West Hollywood for a night out",
      "Airport transfer to or from Burbank (BUR) or Van Nuys (VNY)",
      "Exotic car delivery for a weekend Mulholland Drive loop",
      "Corporate Escalade for a full-day meeting schedule across the greater LA area",
    ],
    deliveryNote: "We deliver throughout Sherman Oaks — the Ventura Boulevard corridor, the Casiano Road area, and the Galleria complex. Freeway access makes multi-stop coordination especially efficient from here.",
    insiderTip: "Mulholland Drive at 6 AM on a weekday — before the cyclists and hikers — is one of the most cinematic drives in Los Angeles. Starting it from Sherman Oaks puts you on Mulholland in 15 minutes.",
    spotlightService: {
      label: "Chauffeur Service",
      reason: "Sherman Oaks is a logistics center for the Valley — our chauffeured vehicles run more routes through this area than almost any other Valley city.",
    },
  },

  "redondo-beach": {
    intro: "Redondo Beach is a laid-back coastal city with genuine waterfront character — the King Harbor Marina, a bustling Pier, and a residential lifestyle that values the ocean over everything.",
    highlight: "King Harbor Marina is Redondo's hidden gem for yacht access — smaller than Marina del Rey but more intimate, and NexAssist works with charter operators based there.",
    popularRequests: [
      "Yacht charter from King Harbor Marina",
      "Exotic car or convertible for a South Bay to PCH coastal drive",
      "Chauffeur to LAX from Redondo Beach — 20 minutes in light traffic",
      "Escalade delivery for a beach day or pier dinner",
    ],
    deliveryNote: "We deliver throughout Redondo Beach — the North and South Redondo residential areas, King Harbor Marina, and the Pier area. LAX coordination is efficient from here.",
    insiderTip: "King Harbor at sunrise — fishing boats going out, the pier empty — is Redondo Beach before it belongs to anyone else. An open-top exotic on PCH immediately after is as good as it gets in the South Bay.",
    spotlightService: {
      label: "Yacht Charter",
      reason: "King Harbor Marina provides Redondo Beach clients with yacht access that doesn't require the Marina del Rey commute. We work with charter operators based there.",
    },
  },

  "torrance": {
    intro: "Torrance is the South Bay's largest city and most underrated luxury market — Del Amo Fashion Center, Toyota USA headquarters, and a diverse, affluent residential base that generates significant demand for premium services.",
    highlight: "Del Amo Fashion Center is one of the largest malls in the United States. NexAssist clients use our chauffeur service specifically to avoid Del Amo parking — one of the most universally hated experiences in the South Bay.",
    popularRequests: [
      "Chauffeur for a Del Amo shopping day — drop-off at the entrance, pickup when done",
      "Airport transfer to LAX — 15–20 minutes from central Torrance",
      "Corporate SUV for Toyota HQ business events and executive transportation",
      "Exotic car for a South Bay drive or weekend in Manhattan Beach",
    ],
    deliveryNote: "We deliver throughout Torrance — the South Torrance residential area, Old Torrance, Del Amo, and the Skypark area near the Toyota campus.",
    insiderTip: "Torrance Beach is one of the South Bay's least crowded beaches for a reason — locals know it, tourists don't. An early morning visit, then coffee on Sartori Avenue, then wherever — it's the Torrance version of a perfect Saturday.",
    spotlightService: {
      label: "Chauffeur Service",
      reason: "Torrance's corporate base — Toyota, Honda America, and dozens of aerospace companies — drives consistent demand for professional chauffeur service for executive meetings and airport runs.",
    },
  },

  "laguna-niguel": {
    intro: "Laguna Niguel is Ocean County's quiet prestige address — stunning coastal ridge views, the Ritz-Carlton perched above the Pacific, and a residential community that chose privacy over visibility.",
    highlight: "The Ritz-Carlton Laguna Niguel is one of only a handful of true five-star resort properties on the Southern California coast, and NexAssist delivers to its valet daily during peak season.",
    popularRequests: [
      "Luxury car delivery to the Ritz-Carlton Laguna Niguel or Waldorf Astoria Monarch Beach",
      "PCH coastal drive south to Dana Point or north through Laguna Beach",
      "Yacht charter from Dana Point Harbor — 15 minutes from most Laguna Niguel addresses",
      "Chauffeur for John Wayne Airport (SNA) arrivals",
    ],
    deliveryNote: "We deliver to Laguna Niguel residential communities, the Ritz-Carlton and Monarch Beach resorts, and coordinate Dana Point Harbor yacht access. SNA airport transport available.",
    insiderTip: "The blufftop trail at the Ritz-Carlton at sunset, then dinner at Raya overlooking the Pacific — arriving in a Bentley Flying Spur or Rolls-Royce Ghost makes a great evening perfect.",
    spotlightService: {
      label: "Exotic Car + Yacht",
      reason: "Laguna Niguel's Ritz-Carlton clientele regularly books the car-and-yacht combination — a resort-quality car for land, and a Dana Point charter for the water.",
    },
  },

  "mission-viejo": {
    intro: "Mission Viejo is one of Orange County's premier master-planned communities — Lake Mission Viejo, excellent residential neighborhoods, and an affluent family base that appreciates premium services done right.",
    highlight: "Lake Mission Viejo is a private lake — residents only — giving Mission Viejo a genuine resort-within-a-suburb quality. NexAssist's SUV and chauffeur services are particularly popular for lakeside event days.",
    popularRequests: [
      "Escalade or Suburban for a full family lake day at Mission Viejo Lake",
      "Exotic car for a South OC coastal drive to Laguna Beach or Dana Point",
      "Chauffeur for John Wayne Airport arrivals and corporate travel to Irvine or Newport",
      "Luxury SUV for The Shops at Mission Viejo holiday shopping",
    ],
    deliveryNote: "We deliver throughout Mission Viejo — the private lakeside communities, Casta del Sol, and the El Toro Road corridor. John Wayne Airport coordination is 20 minutes from most Mission Viejo addresses.",
    insiderTip: "The drive from Mission Viejo south on the 73 Toll Road to Dana Point — then onto PCH — is one of OC's underrated routing gems. Clean, fast, scenic at the Dana Point merge point. In a Porsche or Ferrari it becomes something better.",
    spotlightService: {
      label: "Chauffeur Service",
      reason: "Mission Viejo's family orientation and distance from major airports make professional chauffeur service for airport runs and event transport the primary NexAssist use case here.",
    },
  },

  "huntington-beach": {
    intro: "Huntington Beach — Surf City USA — is Orange County's most iconic coastal city and its most visited. The Pier, Pacific City, and a downtown that runs at full throttle on weekends draw a crowd that includes serious money alongside the surf crowd.",
    highlight: "The US Open of Surfing and the Pacific Airshow are Huntington Beach's signature events — and they generate the most intense single-day concierge demand in the OC calendar.",
    popularRequests: [
      "Exotic car delivery for a weekend Huntington Beach stay — Pacific City hotel or private rental",
      "Chauffeur from HB to John Wayne or LAX after a beach weekend",
      "Convertible exotic for a PCH drive north toward Newport or south toward Laguna",
      "Premium SUV for a Surf & Sand Resort or Pacific City event day",
    ],
    deliveryNote: "We deliver to Pacific City and the surrounding area, waterfront vacation rentals, and Surf & Sand Resort. PCH timing varies significantly on event weekends — our concierge advises on optimal delivery windows.",
    insiderTip: "Main Street HB at 7 AM before the crowds hit is a completely different city than at 2 PM. Early delivery, an early PCH drive, and you own Surf City before anyone else gets there.",
    spotlightService: {
      label: "Exotic Car Rental",
      reason: "Huntington Beach's beach culture and PCH access make convertible exotic cars the leading request — open-top Ferrari, McLaren, and Bentley Continental are the top three.",
    },
  },

  "costa-mesa": {
    intro: "Costa Mesa is Orange County's cultural and retail capital — South Coast Plaza drives more retail revenue per square foot than almost any mall in America, and Segerstrom Center brings world-class arts to OC.",
    highlight: "South Coast Plaza guests are some of NexAssist's most enthusiastic chauffeur clients — arrive in a Maybach, shop Hermès and Louis Vuitton, leave without worrying about valet wait times.",
    popularRequests: [
      "Maybach or Ghost delivery for a South Coast Plaza shopping day",
      "Chauffeur for Segerstrom Center for the Arts evening performances",
      "Exotic car delivery for a Newport Beach or Laguna Beach weekend drive",
      "Designer bag sourcing — Hermès Birkin, Chanel, or Bottega at preferential allocation",
    ],
    deliveryNote: "We deliver to South Coast Plaza, the Segerstrom Center area, CAMP at The Triangle, and Costa Mesa residential neighborhoods. Newport Beach is 10 minutes away.",
    insiderTip: "South Coast Plaza's Hermès boutique has one of the better Birkin relationships in Southern California. Our concierge knows the allocation process — it's worth a conversation before you plan the trip.",
    spotlightService: {
      label: "Chauffeur + Designer Bags",
      reason: "Costa Mesa generates more designer bag sourcing requests than any other OC city because of South Coast Plaza's retail concentration. The chauffeur service pairs naturally with a shopping day.",
    },
  },

  "seal-beach": {
    intro: "Seal Beach is the quietest coastal city at the OC/LA border — a perfect Old Town, a beautiful pier, and an intimate residential community that values the kind of discretion that doesn't need to advertise itself.",
    highlight: "Surfside Colony, Seal Beach's private gated beach community, is one of the most exclusive and low-profile addresses in Southern California. NexAssist delivers there without ceremony.",
    popularRequests: [
      "Exotic car for a weekend PCH drive from Seal Beach north toward Belmont Shore and Long Beach",
      "Chauffeur from Seal Beach to LAX or Long Beach Airport (LGB)",
      "Yacht charter from Long Beach Harbor — 15 minutes from Seal Beach",
      "Luxury SUV for a family weekend in Newport Beach or Laguna",
    ],
    deliveryNote: "We deliver to all Seal Beach neighborhoods — Old Town, Surfside Colony (with advance gate coordination), and the Leisure World adjacent areas. LGB is 15 minutes from Seal Beach.",
    insiderTip: "Old Town Seal Beach on a Tuesday morning is one of the most relaxed, genuinely pleasant experiences on the OC/LA border. A slow breakfast at Hennessey's, then a drive with no plan in particular — our clients who've done it call it their reset.",
    spotlightService: {
      label: "Exotic Car Rental",
      reason: "Seal Beach's PCH access and quiet residential character make it a natural base for morning exotic car drives — before the coastal traffic builds.",
    },
  },

  "yorba-linda": {
    intro: "Yorba Linda's motto is 'the land of gracious living' and the real estate bears it out — hillside estates, horse trails, and one of the highest median incomes in Orange County, earned quietly and spent well.",
    highlight: "Yorba Linda's estate neighborhoods and equestrian properties create a specific set of concierge needs: large-format SUVs, airport runs to John Wayne, and occasional exotic deliveries for weekends in Newport or Laguna.",
    popularRequests: [
      "Escalade or Suburban for a Yorba Linda Hills estate event",
      "Chauffeur from Yorba Linda to John Wayne Airport (SNA)",
      "Exotic car for a weekend drive south to Newport Beach or Laguna Beach",
      "Rolls-Royce or Bentley for a Nixon Presidential Library corporate event",
    ],
    deliveryNote: "We deliver throughout Yorba Linda — the Yorba Linda Country Club area, North Yorba Linda hillside estates, and Black Gold Golf Club. SNA is 20–25 minutes from most Yorba Linda addresses.",
    insiderTip: "Black Gold Golf Club has some of the better fairway views in OC — and an arrival in the right car sets the round up correctly. Our clients book the Cullinan or Flying Spur for exactly this kind of occasion.",
    spotlightService: {
      label: "Chauffeur Service",
      reason: "Yorba Linda's distance from major airports and highways makes professional chauffeur service for airport runs and corporate events the primary NexAssist use case.",
    },
  },

  "la-canada-flintridge": {
    intro: "La Cañada Flintridge is a foothill city of quiet achievement — NASA's Jet Propulsion Laboratory, some of the finest Craftsman and Spanish Colonial estates in California, and a residential community that values substance over spectacle.",
    highlight: "Angeles Crest Highway begins at the La Cañada/Flintridge boundary — one of Southern California's greatest mountain drives is literally at the end of the street for these residents.",
    popularRequests: [
      "Porsche GT3, McLaren, or Ferrari for an Angeles Crest Highway drive on a clear morning",
      "Maybach or Escalade for a Descanso Gardens event or Pasadena dinner",
      "Chauffeur from La Cañada to Burbank Airport (BUR) — 15 minutes",
      "Luxury SUV for a full family day in Pasadena's Old Town",
    ],
    deliveryNote: "We deliver to all La Cañada Flintridge neighborhoods — the Oakwood Drive area, JPL vicinity, and the Flintridge Country Club area. Burbank Airport coordination is 15 minutes away.",
    insiderTip: "Angeles Crest Highway at 7 AM on a Sunday — cool air, almost no traffic, technical canyon driving for 50 miles into the San Gabriel Mountains. In a Porsche 911 GT3 or McLaren 570S, it is objectively one of the top ten drives in California.",
    spotlightService: {
      label: "Exotic Car Rental",
      reason: "La Cañada Flintridge has the highest rate of Angeles Crest Highway driving requests in our network — the mountain access makes performance exotic rental the dominant use case.",
    },
  },

  "arcadia": {
    intro: "Arcadia is one of the San Gabriel Valley's fastest-growing luxury markets — Santa Anita Park, Westfield, and an international community of high-net-worth residents who treat luxury services as an everyday expectation.",
    highlight: "Arcadia's affluent international community generates some of the most specific and discerning requests in our SGV network — including same-day luxury watch and designer bag sourcing through our concierge.",
    popularRequests: [
      "Exotic car delivery for a Santa Anita Park race day or private event",
      "Maybach or Rolls-Royce Ghost for an LA Arboretum corporate event",
      "Designer bag or luxury watch sourcing for gifting occasions",
      "Chauffeur to LAX or Burbank from the SGV",
    ],
    deliveryNote: "We deliver to all Arcadia neighborhoods — Arcadia Highland, the Country Club area, and the Westfield Santa Anita vicinity. Both LAX and Burbank airport runs available from Arcadia.",
    insiderTip: "Santa Anita Park on a non-race morning — the horses training, the grandstand empty, the San Gabriel Mountains behind — is one of the most quietly beautiful scenes in greater LA. A reason to be in Arcadia early.",
    spotlightService: {
      label: "Designer Bags + Watches",
      reason: "Arcadia's international community has the highest demand for luxury goods sourcing in the SGV — Hermès, Patek Philippe, and Richard Mille inquiries arrive regularly from this zip code.",
    },
  },

  "san-marino": {
    intro: "San Marino is California's wealthiest small city by median household income — immaculate streets, Huntington Library estates, and a quiet exclusivity that has no interest in advertising itself.",
    highlight: "The Huntington Library and Gardens is world-class, and the homes surrounding it match. NexAssist's San Marino clients are among our most understated — they want perfect service delivered without ceremony.",
    popularRequests: [
      "Rolls-Royce Ghost or Bentley Flying Spur for a Huntington Library event or donor dinner",
      "Chauffeur for Pasadena and San Marino social events",
      "Luxury car for a San Marino estate arrival for a hosted dinner party",
      "Corporate Escalade for USC or Caltech executive events",
    ],
    deliveryNote: "We deliver to all San Marino estates — the Huntington Library area, Lacy Park vicinity, and the San Marino Club neighborhood. Understated delivery is the standard here.",
    insiderTip: "The Huntington's Chinese Garden at opening time, before the crowds, is one of the most serene experiences in Southern California. Arrive in something quiet — a Rolls-Royce Ghost, a Bentley Flying Spur — and let the setting do the rest.",
    spotlightService: {
      label: "Chauffeur Service",
      reason: "San Marino's social and philanthropic event calendar drives consistent demand for premium chauffeured vehicles — the Rolls-Royce Ghost and Maybach are the most requested cars from this city.",
    },
  },

  "diamond-bar": {
    intro: "Diamond Bar is a planned foothill community at the eastern edge of Los Angeles County — a gateway between the LA metro and the Inland Empire, with gated neighborhoods and country club living at a price point that still qualifies as genuinely affluent.",
    highlight: "Diamond Bar Country Club and South Pointe give this city a social infrastructure that supports premium event transport on a consistent basis.",
    popularRequests: [
      "Chauffeur for Diamond Bar Golf Course or Country Club events",
      "Escalade or Suburban for a large family day in Brea or Yorba Linda",
      "Airport transfer to LAX or Ontario (ONT) — Diamond Bar splits the distance between both",
      "Exotic car for a weekend drive to the coast via PCH",
    ],
    deliveryNote: "We deliver throughout Diamond Bar — the Country Estate Hills area, The Country gated community, and South Pointe. Ontario Airport (ONT) is 20 minutes east; LAX is 40 minutes west.",
    insiderTip: "Diamond Bar's location at the 57/60 interchange gives it faster access to the OC beaches than most people in the San Fernando Valley. A weekend drive to Dana Point or Newport is genuinely practical from here.",
    spotlightService: {
      label: "Chauffeur Service",
      reason: "Diamond Bar's airport split — between LAX and Ontario — creates consistent demand for professional transport that eliminates the commute question entirely.",
    },
  },

};
