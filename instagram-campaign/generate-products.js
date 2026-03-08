const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const GOLD = "#C9A962";

const PRODUCTS = [
  {
    file: "product-01-exotic-car-rental",
    category: "Exotic Car Rental",
    name: "Exotic Car Rental",
    location: "Los Angeles",
    desc: "Ferrari · Lamborghini · Rolls-Royce · McLaren · Bentley · Porsche · BMW M · Mercedes-AMG. Same-day delivery anywhere in LA.",
    url: "usenexassist.com/exotic-car-rental-los-angeles",
    photo: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1080&q=85",
  },
  {
    file: "product-02-chauffeur-service",
    category: "Chauffeur Service",
    name: "Chauffeur Service",
    location: "Los Angeles",
    desc: "Cadillac Escalade · Mercedes-Maybach · Rolls-Royce Ghost. Airport transfers, corporate travel & events. Professional drivers 24/7.",
    url: "usenexassist.com/chauffeur-service-los-angeles",
    photo: "./escalade-2025.png",
  },
  {
    file: "product-03-private-jets",
    category: "Private Jets",
    name: "Private Jet Charter",
    location: "Los Angeles",
    desc: "Light jets to ultra-long-range aircraft. Van Nuys · Burbank · LAX. Same-day availability. Domestic & international.",
    url: "usenexassist.com/private-jet-charter-los-angeles",
    photo: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1080&q=85",
  },
  {
    file: "product-04-yacht-charter",
    category: "Yacht Charter",
    name: "Yacht & Superyacht Charter",
    location: "Los Angeles",
    desc: "Day charters · Catalina Island · Pacific voyages · Corporate events. Marina del Rey, Newport Beach & Malibu. Full crew included.",
    url: "usenexassist.com/yacht-charter-los-angeles",
    photo: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1080&q=85",
  },
  {
    file: "product-05-luxury-villas",
    category: "Luxury Villas",
    name: "Luxury Villa Rental",
    location: "Los Angeles",
    desc: "Malibu beachfront · Beverly Hills mansions · Hollywood Hills retreats · Bel Air estates. Private pool, full staff & concierge.",
    url: "usenexassist.com/luxury-villa-rental-los-angeles",
    photo: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1080&q=85",
  },
  {
    file: "product-06-car-sales",
    category: "Exotic Car Sales",
    name: "Exotic Car Sales",
    location: "Los Angeles",
    desc: "Buy or sell Ferrari, Lamborghini, Rolls-Royce, Porsche & more. Private network, off-market deals, authenticated & delivered.",
    url: "usenexassist.com/car-sales-los-angeles",
    photo: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1080&q=85",
  },
  {
    file: "product-07-fine-watches",
    category: "Fine Watches",
    name: "Luxury Watch Sourcing",
    location: "Los Angeles",
    desc: "Rolex · Patek Philippe · Audemars Piguet · Richard Mille. Privately sourced, authenticated & delivered in LA.",
    url: "usenexassist.com/luxury-watches-los-angeles",
    photo: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1080&q=85",
  },
  {
    file: "product-08-designer-bags",
    category: "Designer Bags",
    name: "Designer Bag Sourcing",
    location: "Los Angeles",
    desc: "Hermès Birkin · Kelly · Chanel Classic Flap · Louis Vuitton limited editions. Privately sourced & 100% authenticated.",
    url: "usenexassist.com/designer-bags-los-angeles",
    photo: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1080&q=85",
  },
  {
    file: "product-09-luxury-travel",
    category: "Luxury Travel",
    name: "Luxury Travel Planning",
    location: "Los Angeles",
    desc: "Bespoke itineraries · Private jets · Five-star suites · Yacht voyages · F1 hospitality · VIP events worldwide.",
    url: "usenexassist.com/luxury-travel-los-angeles",
    photo: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1080&q=85",
  },
];

function buildHTML(p) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1080px; height: 1080px; overflow: hidden; background: #080d18; font-family: 'Georgia', serif; position: relative; }

  .photo-bg {
    position: absolute; inset: 0;
    background-image: url('${p.photo}');
    background-size: cover; background-position: center;
  }
  .overlay {
    position: absolute; inset: 0;
    background: linear-gradient(180deg,
      rgba(8,13,24,0.45) 0%,
      rgba(8,13,24,0.25) 25%,
      rgba(8,13,24,0.75) 55%,
      rgba(8,13,24,0.97) 100%
    );
  }
  .grid {
    position: absolute; inset: 0;
    background-image: linear-gradient(rgba(201,169,98,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,98,0.035) 1px, transparent 1px);
    background-size: 90px 90px;
    mask-image: linear-gradient(180deg, transparent 35%, rgba(0,0,0,0.7) 100%);
  }

  /* Accent — all gold */
  .accent-top { position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #C9A962, rgba(201,169,98,0.3) 70%, transparent); }
  .accent-left { position: absolute; top: 0; bottom: 0; left: 0; width: 3px; background: linear-gradient(180deg, #C9A962, rgba(201,169,98,0.2) 60%, transparent); }

  /* Corners */
  .c-tl { position: absolute; top: 28px; left: 28px; width: 40px; height: 40px; border-top: 1px solid rgba(201,169,98,0.45); border-left: 1px solid rgba(201,169,98,0.45); }
  .c-tr { position: absolute; top: 28px; right: 28px; width: 40px; height: 40px; border-top: 1px solid rgba(201,169,98,0.2); border-right: 1px solid rgba(201,169,98,0.2); }
  .c-bl { position: absolute; bottom: 28px; left: 28px; width: 40px; height: 40px; border-bottom: 1px solid rgba(201,169,98,0.2); border-left: 1px solid rgba(201,169,98,0.2); }
  .c-br { position: absolute; bottom: 28px; right: 28px; width: 40px; height: 40px; border-bottom: 1px solid rgba(201,169,98,0.2); border-right: 1px solid rgba(201,169,98,0.2); }

  /* Brand top right */
  .brand-top { position: absolute; top: 42px; right: 62px; z-index: 10; display: flex; align-items: center; gap: 10px; }
  .brand-top svg { width: 38px; height: 38px; }
  .brand-label { font-family: 'Arial', sans-serif; font-size: 12px; letter-spacing: 0.35em; text-transform: uppercase; color: rgba(201,169,98,0.65); }

  /* Category badge top left */
  .category-badge {
    position: absolute; top: 46px; left: 62px; z-index: 10;
    font-family: 'Arial', sans-serif; font-size: 10px; letter-spacing: 0.5em; text-transform: uppercase;
    color: rgba(201,169,98,0.8); border: 1px solid rgba(201,169,98,0.25);
    padding: 9px 20px; background: rgba(8,13,24,0.65);
    display: flex; align-items: center; gap: 8px;
  }
  .cat-dot { width: 5px; height: 5px; border-radius: 50%; background: #C9A962; flex-shrink: 0; }

  /* Content block — bottom */
  .content { position: absolute; bottom: 0; left: 0; right: 0; padding: 0 68px 68px; z-index: 5; }

  .service-name {
    font-family: 'Georgia', serif;
    font-size: 52px; font-weight: bold; color: #fff;
    line-height: 1.1; letter-spacing: 0.01em;
  }

  .location-line {
    font-family: 'Arial', sans-serif;
    font-size: 14px; letter-spacing: 0.5em; text-transform: uppercase;
    color: #C9A962; margin-top: 10px; opacity: 0.85;
  }

  .divider { width: 48px; height: 1.5px; background: #C9A962; margin: 22px 0; opacity: 0.7; }

  .desc {
    font-family: 'Arial', sans-serif;
    font-size: 19px; color: rgba(255,255,255,0.5);
    line-height: 1.65; margin-bottom: 32px;
  }

  .footer-row { display: flex; align-items: center; justify-content: space-between; }
  .url {
    font-family: 'Arial', sans-serif; font-size: 13px; letter-spacing: 0.18em;
    color: rgba(201,169,98,0.5);
  }
  .cta-btn {
    font-family: 'Arial', sans-serif; font-size: 11px; letter-spacing: 0.35em; text-transform: uppercase;
    color: #C9A962; border: 1px solid rgba(201,169,98,0.35);
    padding: 12px 26px; background: rgba(8,13,24,0.6);
  }
</style>
</head>
<body>
<div class="photo-bg"></div>
<div class="overlay"></div>
<div class="grid"></div>
<div class="accent-top"></div>
<div class="accent-left"></div>
<div class="c-tl"></div>
<div class="c-tr"></div>
<div class="c-bl"></div>
<div class="c-br"></div>

<div class="category-badge">
  <div class="cat-dot"></div>
  ${p.category}
</div>

<div class="brand-top">
  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="18,1.5 34.5,18 18,34.5 1.5,18" stroke="#C9A962" stroke-width="0.85" stroke-opacity="0.85"/>
    <polygon points="18,7 31,18 18,29 5,18" stroke="#C9A962" stroke-width="0.4" stroke-opacity="0.3"/>
    <path d="M12 24.5V11.5L24 24.5V11.5" stroke="#C9A962" stroke-width="1.5" stroke-linecap="square"/>
  </svg>
  <span class="brand-label">NexAssist</span>
</div>

<div class="content">
  <div class="service-name">${p.name}</div>
  <div class="location-line">${p.location}</div>
  <div class="divider"></div>
  <div class="desc">${p.desc}</div>
  <div class="footer-row">
    <div class="url">${p.url}</div>
    <div class="cta-btn">Request Now →</div>
  </div>
</div>
</body>
</html>`;
}

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const dir = path.resolve(__dirname);

  for (const p of PRODUCTS) {
    const html = buildHTML(p);
    const htmlPath = path.join(dir, `${p.file}.html`);
    const pngPath  = path.join(dir, `${p.file}.png`);
    fs.writeFileSync(htmlPath, html);

    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });
    await page.goto('file://' + htmlPath);
    await sleep(1500);
    await page.screenshot({ path: pngPath });
    await page.close();
    console.log(`✓ ${p.file}.png`);
  }

  await browser.close();
  console.log('\n✅ All 9 product cards done.');
})();
