import Link from 'next/link';
import { focusAreas, getQuotes, quoteHighlights, roadmap } from '../lib/quotes';

export const dynamic = 'force-static';
export const revalidate = false;

export default async function Home() {
  let quotes = [];

  try {
    quotes = await getQuotes();
  } catch (error) {
    quotes = [];
  }

  if (quotes.length === 0) {
    quotes = quoteHighlights.map((item, index) => ({
      id: `fallback-${index}`,
      quote: item.quote,
      author: item.author
    }));
  }
  return (
    <div>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">Manual revalidation only</span>
            <h1>Modern wisdom, curated for teams that move fast.</h1>
            <p>
              Reesisms is rebuilt on Next.js server components to deliver thoughtful, human stories with the
              speed of edge caching. Quotes are updated via on-demand revalidation so the homepage stays steady
              until you trigger a refresh.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/submit">
                Submit a quote
              </Link>
              <Link className="button button-secondary" href="#highlights">
                Explore highlights
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <h3>Today&apos;s editorial focus</h3>
            <p>
              We&apos;re collecting stories about calm decision-making and how teams maintain clarity under
              pressure. Your contribution can shape the next theme and help others learn what works.
            </p>
            <div className="cards">
              {focusAreas.map((item) => (
                <div key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="highlights" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Highlighted quotes</h2>
            <span className="badge">Server-rendered + cached</span>
          </div>
          <div className="quote-list">
            {quotes.map((item) => (
              <Link key={item.id} href={`/view/${item.id}`} className="quote quote-link">
                <p>“{item.quote}”</p>
                <span>— {item.author}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Next on the roadmap</h2>
            <Link className="button button-secondary" href="/credits">
              View credits
            </Link>
          </div>
          <div className="cards">
            {roadmap.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
