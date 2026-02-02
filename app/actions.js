'use server';

import { revalidatePath } from 'next/cache';
import clientPromise from '../lib/mongodb';

export async function submitQuote(previousState, formData) {
  const quote = String(formData.get('quote') || '').trim();
  const author = String(formData.get('author') || '').trim();
  const context = String(formData.get('context') || '').trim();

  if (!quote || quote.length < 10) {
    return {
      status: 'error',
      message: 'Please share a quote of at least 10 characters so we can review it.'
    };
  }

  if (!clientPromise) {
    return {
      status: 'error',
      message: 'MongoDB is not configured yet. Please add MONGODB_URI to enable submissions.'
    };
  }

  try {
    const dbName = process.env.MONGODB_DB || 'reesisms';
    const client = await clientPromise;
    const db = client.db(dbName);

    await db.collection('quotes').insertOne({
      quote,
      author: author || null,
      context: context || null,
      createdAt: new Date()
    });

    revalidatePath('/');

    return {
      status: 'success',
      message: `Thanks${author ? `, ${author}` : ''}! Your quote is live on the homepage refresh.`
    };
  } catch (error) {
    return {
      status: 'error',
      message: 'We ran into an issue saving your quote. Please try again shortly.'
    };
  }
}
