import SubmitForm from './SubmitForm';

export const metadata = {
  title: 'Submit a Quote — Reesisms',
  description: 'Send a quote for the next Reesisms editorial refresh.'
};

export default function SubmitPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>Submit a quote</h2>
          <span className="badge">Server action powered</span>
        </div>
        <p>
          Use the form below to send a quote directly to our moderation queue. Server actions keep your
          submission secure, and the homepage pulls from MongoDB on each ISR refresh.
        </p>
        <SubmitForm />
      </div>
    </section>
  );
}
