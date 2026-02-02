import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Reesisms — Modern wisdom, curated daily',
  description: 'A modernized quote and wisdom hub built with Next.js server components, ISR, and server actions.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container header-inner">
            <div className="brand">
              <span className="brand-badge">R</span>
              Reesisms
              <span className="badge">Next.js App Router</span>
            </div>
            <nav className="nav">
              <Link href="/">Home</Link>
              <Link href="/submit">Submit a Quote</Link>
              <Link href="/credits">Credits</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container footer-grid">
            <small>Built with server components, ISR, and server actions.</small>
            <small>© 2024 Reesisms. All rights reserved.</small>
          </div>
        </footer>
      </body>
    </html>
  );
}
