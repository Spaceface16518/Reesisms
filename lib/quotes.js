import { ObjectId } from 'mongodb';
import clientPromise from './mongodb';

export const quoteHighlights = [
  {
    quote: 'Clarity is the product of consistent, small adjustments.',
    author: 'R. Reese'
  },
  {
    quote: 'Momentum beats intensity when it comes to lasting change.',
    author: 'Reesisms Collective'
  },
  {
    quote: 'Your systems should make the right choice the easy choice.',
    author: 'R. Reese'
  }
];

export const focusAreas = [
  {
    title: 'Evidence-based insights',
    description: 'Every quote is tagged with context and actionable takeaways so it can be applied immediately.'
  },
  {
    title: 'Weekly themes',
    description: 'ISR refreshes the homepage content so the focus changes with the community cadence.'
  },
  {
    title: 'Human-first moderation',
    description: 'Server actions enable safe, structured submissions without exposing private keys.'
  }
];

export const roadmap = [
  {
    title: 'Community prompts',
    description: 'Open prompts every Monday to capture inspiration while it is fresh.'
  },
  {
    title: 'Insight digests',
    description: 'Weekly summaries delivered as exportable, share-ready cards.'
  },
  {
    title: 'Personal collections',
    description: 'Save and tag your favorite quotes in private workspaces.'
  }
];

export async function getQuotes() {
  if (!clientPromise) {
    return [];
  }

  const dbName = process.env.MONGODB_DB || 'reesisms';
  const client = await clientPromise;
  const db = client.db(dbName);
  const quotes = await db
    .collection('quotes')
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return quotes.map((quote) => ({
    id: quote._id.toString(),
    quote: quote.quote,
    author: quote.author || 'Anonymous',
    context: quote.context || null
  }));
}

export async function getQuoteById(id) {
  if (!clientPromise || !ObjectId.isValid(id)) {
    return null;
  }

  const dbName = process.env.MONGODB_DB || 'reesisms';
  const client = await clientPromise;
  const db = client.db(dbName);
  const quote = await db.collection('quotes').findOne({ _id: new ObjectId(id) });

  if (!quote) {
    return null;
  }

  return {
    id: quote._id.toString(),
    quote: quote.quote,
    author: quote.author || 'Anonymous',
    context: quote.context || null
  };
}
