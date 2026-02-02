import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getQuoteById } from '../../../lib/quotes';

export const dynamic = 'force-dynamic';

export default async function QuoteViewPage({ params }) {
  const quote = await getQuoteById(params.id);

  if (!quote) {
    notFound();
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>Quote details</h2>
          <Link className="button button-secondary" href="/">
            Back to all quotes
          </Link>
        </div>
        <article className="quote" style={{ marginTop: '24px' }}>
          <p>“{quote.quote}”</p>
          <span>— {quote.author || 'Anonymous'}</span>
          {quote.context ? <p style={{ marginTop: '12px' }}>{quote.context}</p> : null}
        </article>
      </div>
    </section>
  );
}
