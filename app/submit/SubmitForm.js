'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitQuote } from '../actions';

const initialState = {
  status: 'idle',
  message: 'Share a short quote and we will curate it for the next refresh.'
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="button button-primary" type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit quote'}
    </button>
  );
}

export default function SubmitForm() {
  const [state, formAction] = useFormState(submitQuote, initialState);

  return (
    <form className="form-card" action={formAction}>
      <div className="form-grid">
        <label htmlFor="quote">
          Quote
          <textarea
            id="quote"
            name="quote"
            placeholder="Type the full quote you want to submit"
            required
          />
        </label>

        <label htmlFor="author">
          Author (optional)
          <input id="author" name="author" placeholder="Who said or wrote it?" />
        </label>

        <label htmlFor="context">
          Context (optional)
          <textarea
            id="context"
            name="context"
            placeholder="Share why this quote matters or how it shaped your team"
          />
        </label>
      </div>

      <div className="form-footer">
        <SubmitButton />
        <span className="form-status">{state.message}</span>
      </div>
    </form>
  );
}
