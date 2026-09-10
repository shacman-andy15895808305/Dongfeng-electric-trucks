const articles = [
  {
    id: 'electric-tractor-selection',
    category: 'model-guide',
    label: 'MODEL GUIDE',
    date: 'September 7, 2026',
    time: '8 min read',
    title: 'How to Select a Dongfeng Electric Tractor for Port and Regional Haulage',
    excerpt: 'Compare GCW, battery capacity, charging interface and route requirements across the TE46, TE8 and TE9 platforms.',
    image: 'assets/tractor.jpg'
  },
  {
    id: 'electric-dump-truck-guide',
    category: 'application',
    label: 'APPLICATION',
    date: 'September 7, 2026',
    time: '7 min read',
    title: 'Electric Dump Trucks for Mining and Construction: What Buyers Should Check',
    excerpt: 'A practical checklist covering grade, payload, frame strength, battery, charging and right-hand-drive options.',
    image: 'assets/dumper.jpg'
  },
  {
    id: 'ev-truck-range-tco',
    category: 'tco',
    label: 'TCO & CHARGING',
    date: 'September 7, 2026',
    time: '6 min read',
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
  return `article.html?id=${article.id}`;
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

search.addEventListener('input', render);

document.querySelector('.menu')?.addEventListener('click', event => {
  document.querySelector('.topbar').classList.toggle('open');
  event.currentTarget.setAttribute('aria-expanded', document.querySelector('.topbar').classList.contains('open'));
});

render();