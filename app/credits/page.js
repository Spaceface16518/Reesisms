const contributors = [
  {
    name: 'Reesisms Editorial Team',
    detail: 'Curates and moderates submissions every week.'
  },
  {
    name: 'Community Contributors',
    detail: 'Share the experiences that shape the weekly themes.'
  },
  {
    name: 'Product & Platform',
    detail: 'Keeps the Next.js infrastructure fast, secure, and reliable.'
  }
];

export const metadata = {
  title: 'Credits — Reesisms',
  description: 'Acknowledgements for the people shaping Reesisms.'
};

export default function CreditsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>Credits</h2>
          <span className="badge">People behind the scenes</span>
        </div>
        <div className="cards">
          {contributors.map((contributor) => (
            <div key={contributor.name} className="card">
              <h3>{contributor.name}</h3>
              <p>{contributor.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
