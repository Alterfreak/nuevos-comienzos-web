import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

import { readJson, writeJson } from '../../../lib/storage';

export const runtime = 'nodejs';

type ContactMessage = Record<string, string> & {
  id: string;
  date: string;
};

export const POST = async (request: Request) => {
  try {
    const payload = (await request.json().catch(() => ({}))) as Record<string, string>;
    const message: ContactMessage = {
      ...payload,
      id: randomUUID(),
      date: new Date().toISOString(),
    };

    const messages = await readJson<ContactMessage[]>('contact.json', []);
    messages.push(message);
    await writeJson('contact.json', messages);

    return NextResponse.json({ ok: true, id: message.id });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
