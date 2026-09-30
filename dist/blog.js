const articles = [
  { id:'dongfeng-tz3z-8x4-electric-dump-truck-quarry-haulage',url:'blog/dongfeng-tz3z-8x4-electric-dump-truck-quarry-haulage.html',category:'application',label:'QUARRY APPLICATION',date:'September 30, 2026',time:'9 min read',title:'Dongfeng TZ3Z 8x4 Electric Dump Truck for Quarry Haulage',excerpt:'Assess the catalogue-listed 55 t GVW, 400 kWh TZ3Z around loaded routes, body integration, charging and site conditions.',image:'assets/catalog/dump-standard.jpg' },
  { id:'dongfeng-tz5e-6x4-electric-dump-truck-site-guide',url:'blog/dongfeng-tz5e-6x4-electric-dump-truck-site-guide.html',category:'application',label:'SITE APPLICATION',date:'September 30, 2026',time:'9 min read',title:'Dongfeng TZ5E 6x4 Electric Dump Truck: Site and Route Guide',excerpt:'Check the 65 t GVW catalogue entry against site access, axle loads, body design, route energy and charger readiness.',image:'assets/catalog/dump-standard.jpg' },
  { id:'dongfeng-tz4y-tz5y-rhd-electric-dump-truck-comparison',url:'blog/dongfeng-tz4y-tz5y-rhd-electric-dump-truck-comparison.html',category:'model-guide',label:'MODEL COMPARISON',date:'September 30, 2026',time:'9 min read',title:'Dongfeng TZ4Y vs TZ5Y RHD Electric Dump Trucks',excerpt:'Compare two right-hand-drive 8x4 configurations by GVW, powertrain, chassis, charging interface and market checks.',image:'assets/catalog/dump-standard.jpg' },
  { id:'dongfeng-te8l-te8k-6x4-electric-tractor-regional-haulage',url:'blog/dongfeng-te8l-te8k-6x4-electric-tractor-regional-haulage.html',category:'model-guide',label:'MODEL GUIDE',date:'September 29, 2026',time:'9 min read',title:'Dongfeng TE8L and TE8K 6x4 Electric Tractors for Regional Haulage',excerpt:'Compare the 49 t catalogue class, battery options and charging around a real regional duty cycle.',image:'assets/catalog/tractor-heavy.jpg' },
  { id:'dongfeng-te9l-te9b-electric-tractor-comparison',url:'blog/dongfeng-te9l-te9b-electric-tractor-comparison.html',category:'model-guide',label:'MODEL COMPARISON',date:'September 29, 2026',time:'9 min read',title:'Dongfeng TE9L vs TE9B Electric Tractor: 49 t and 65 t Selection',excerpt:'Understand the GCW distinction and verify the full tractor-trailer, battery and route specification.',image:'assets/catalog/tractor-heavy.jpg' },
  { id:'dongfeng-kta1-8x4-electric-dump-truck-urban-construction',url:'blog/dongfeng-kta1-8x4-electric-dump-truck-urban-construction.html',category:'application',label:'APPLICATION GUIDE',date:'September 29, 2026',time:'9 min read',title:'Dongfeng KTA1 8x4 Electric Dump Truck for Urban Construction',excerpt:'Assess the 31 t GVW catalogue configuration through body integration, city access, haul cycle and charging.',image:'assets/catalog/dump-standard.jpg' },
  { id:'electric-truck-battery-capacity-selection',url:'blog/electric-truck-battery-capacity-selection.html',category:'tco',label:'BATTERY PLANNING',date:'September 29, 2026',time:'9 min read',title:'How to Choose Electric Truck Battery Capacity: 166 to 600 kWh',excerpt:'Compare catalogue-listed pack options and size capacity from measured shift energy, reserve and charging access.',image:'assets/catalog/tractor-heavy.jpg' },
  { id:'electric-truck-charging-connector-compatibility-checklist',url:'blog/electric-truck-charging-connector-compatibility-checklist.html',category:'tco',label:'CHARGING GUIDE',date:'September 29, 2026',time:'9 min read',title:'Electric Truck Charging Connector Compatibility: Buyer Checklist',excerpt:'Verify the exact vehicle inlet, charger, communications, site supply and acceptance test before ordering.',image:'assets/catalog/tractor-heavy.jpg' },
  { id:'dongfeng-te46-4x2-electric-tractor-port-short-haul',url:'blog/dongfeng-te46-4x2-electric-tractor-port-short-haul.html',category:'model-guide',label:'MODEL GUIDE',date:'September 28, 2026',time:'9 min read',title:'Dongfeng TE46 4x2 Electric Tractor for Port and Short-Haul Routes',excerpt:'Review verified catalogue data and assess port shuttle work through route, GCW, charging and site requirements.',image:'assets/catalog/tractor-4x2.jpg' },
  { id:'catl-lfp-heavy-electric-truck-battery-guide',url:'blog/catl-lfp-heavy-electric-truck-battery-guide.html',category:'tco',label:'BATTERY GUIDE',date:'September 23, 2026',time:'9 min read',title:'CATL LFP Batteries in Heavy Electric Trucks: Capacity, Thermal Management and Fleet Planning',excerpt:'Understand capacity, temperature control, SOC policy and route-led battery planning without unsupported life or range claims.',image:'assets/catalog/tractor-heavy.jpg' },
  { id:'china-electric-truck-export-checklist',url:'blog/china-electric-truck-export-checklist.html',category:'application',label:'EXPORT GUIDE',date:'September 23, 2026',time:'9 min read',title:'China Electric Truck Export Checklist: Route, Payload, Charging and Compliance',excerpt:'Freeze the vehicle, route, charging, compliance, shipping, documents and support plan before production.',image:'assets/catalog/cargo-kt5.jpg' },
  { id:'electric-truck-tco-calculator-guide',url:'blog/electric-truck-tco-calculator-guide.html',category:'tco',label:'TCO & CHARGING',date:'September 23, 2026',time:'9 min read',title:'Electric Truck TCO Calculator: Energy, Charging, Maintenance and Utilization',excerpt:'A transparent variable-based method for comparing lifecycle cost without invented savings claims.',image:'assets/catalog/tractor-heavy.jpg' },
  {
    id: 'right-hand-drive-dongfeng-electric-trucks-export-guide',
    url: 'blog/right-hand-drive-dongfeng-electric-trucks-export-guide.html',
    category: 'model-guide',
    label: 'EXPORT GUIDE',
    date: 'September 22, 2026',
    time: '10 min read',
    title: 'Right-Hand-Drive Dongfeng Electric Trucks: Models and Export Checks',
    excerpt: 'Catalogue-listed RHD tractors and dump trucks, plus charging, body, documentation and destination-market checks before production.',
    image: 'assets/catalog/tractor-heavy.jpg'
  },
  {
    id: 'dongfeng-kt5m-kt5j-electric-cargo-truck-guide',
    url: 'blog/dongfeng-kt5m-kt5j-electric-cargo-truck-guide.html',
    category: 'model-guide',
    label: 'MODEL GUIDE',
    date: 'September 22, 2026',
    time: '10 min read',
    title: 'Dongfeng KT5M and KT5J Electric Cargo Trucks for Box, Reefer and Urban Delivery',
    excerpt: 'Match the 18 t chassis, wheelbase, battery and body length to delivery density, auxiliary demand and depot charging.',
    image: 'assets/catalog/cargo-kt5.jpg'
  },
  {
    id: '6x4-vs-8x4-electric-dump-trucks',
    url: 'blog/6x4-vs-8x4-electric-dump-trucks.html',
    category: 'application',
    label: 'APPLICATION',
    date: 'September 22, 2026',
    time: '10 min read',
    title: '6x4 vs 8x4 Electric Dump Trucks for Mining and Construction',
    excerpt: 'Compare axle layout, reference GVW, turning space, body integration, traction, battery and charging against the actual haul cycle.',
    image: 'assets/catalog/dump-standard.jpg'
  },
  {
    id: '600-kwh-electric-tractor-charging-plan',
    url: 'blog/600-kwh-electric-tractor-charging-plan.html',
    category: 'tco',
    label: 'TCO & CHARGING',
    date: 'September 21, 2026',
    time: '11 min read',
    title: 'How to Plan Charging for a 600 kWh Electric Tractor Fleet',
    excerpt: 'A route-first guide to depot power, SOC windows, dual-gun charging, shift timing and operating reserve for 600 kWh electric tractors.',
    image: 'assets/articles/dfh4250-te8p-6x4-electric-tractor-side.jpg'
  },
  {
    id: 'electric-tractor-selection',
    category: 'model-guide',
    label: 'MODEL GUIDE',
    date: 'September 7, 2026',
    time: '10 min read',
    title: 'How to Select a Dongfeng Electric Tractor for Port and Regional Haulage',
    excerpt: 'Compare GCW, battery capacity, charging interface and route requirements across the TE46, TE8 and TE9 platforms.',
    image: 'assets/tractor.jpg'
  },
  {
    id: 'dfh4250-te8p-6x4-electric-tractor',
    category: 'model-guide',
    label: 'MODEL GUIDE',
    date: 'September 14, 2026',
    time: '10 min read',
    title: 'DFH4250DBEV11-TE8P 6x4 Electric Tractor: Configuration Guide for Standard-Load Road Transport',
    excerpt: 'A practical buyer guide to the TE8P 6x4 electric tractor with 600 kWh CATL battery, 600 A dual-gun fast charging, 550 kW peak motor power and road-transport chassis configuration.',
    image: 'assets/articles/dfh4250-te8p-6x4-electric-tractor-side.jpg'
  },  {
    id: 'electric-dump-truck-guide',
    category: 'application',
    label: 'APPLICATION',
    date: 'September 7, 2026',
    time: '10 min read',
    title: 'Electric Dump Trucks for Mining and Construction: What Buyers Should Check',
    excerpt: 'A practical checklist covering grade, payload, frame strength, battery, charging and right-hand-drive options.',
    image: 'assets/dumper.jpg'
  },
  {
    id: 'ev-truck-range-tco',
    category: 'tco',
    label: 'TCO & CHARGING',
    date: 'September 7, 2026',
    time: '9 min read',
    title: 'How Duty Cycle Affects Electric Truck Range and Total Cost',
    excerpt: 'Why daily mileage, payload, average speed, road grade and charging windows matter more than one headline range figure.',
    image: 'assets/cargo.jpg'
  }
];

let category = 'all';
const featuredId = 'electric-tractor-selection';
const grid = document.querySelector('#articleGrid');
const featured = document.querySelector('#featuredArticle');
const search = document.querySelector('#articleSearch');
const emptyState = document.querySelector('#emptyState');
const resultCount = document.querySelector('#resultCount');

function articleUrl(article) {
  return article.url || `article.html?id=${article.id}`;
}

function matchesArticle(article, query) {
  const text = `${article.title} ${article.excerpt} ${article.label}`.toLowerCase();
  return (category === 'all' || article.category === category) && (!query || text.includes(query));
}

function renderArticleCard(article) {
  return `<article class="article-card">
    <a class="article-image" href="${articleUrl(article)}" aria-label="Read ${article.title}"><img src="${article.image}" alt="${article.title}" loading="lazy"></a>
    <div class="article-card__body">
      <div class="article-meta"><span>${article.label}</span><span>${article.date}</span><span>${article.time}</span></div>
      <h3><a href="${articleUrl(article)}">${article.title}</a></h3>
      <p>${article.excerpt}</p>
      <a class="read" href="${articleUrl(article)}">Read article →</a>
    </div>
  </article>`;
}

function renderFeatured(article) {
  featured.innerHTML = `<article class="featured-card">
    <a class="featured-image" href="${articleUrl(article)}" aria-label="Read ${article.title}"><img src="${article.image}" alt="${article.title}"></a>
    <div class="featured-copy">
      <div class="article-meta"><span>${article.label}</span><span>${article.date}</span><span>${article.time}</span></div>
      <h3 id="featured-title"><a href="${articleUrl(article)}">${article.title}</a></h3>
      <p>${article.excerpt}</p>
      <a class="read" href="${articleUrl(article)}">Read featured insight →</a>
    </div>
  </article>`;
}

function render() {
  if (!grid || !featured || !search || !emptyState || !resultCount) return;
  const query = search.value.toLowerCase().trim();
  const results = articles.filter(article => matchesArticle(article, query));
  const featuredArticle = articles.find(article => article.id === featuredId);

  renderFeatured(featuredArticle);
  grid.innerHTML = results.map(renderArticleCard).join('');
  emptyState.hidden = results.length > 0;
  resultCount.textContent = `${results.length} article${results.length === 1 ? '' : 's'} shown`;
}

document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filters button').forEach(item => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
    category = button.dataset.category;
    render();
  });
});

search?.addEventListener('input', render);

document.querySelector('.menu')?.addEventListener('click', event => {
  document.querySelector('.topbar').classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', document.querySelector('.topbar').classList.contains('open'));
});

render();
