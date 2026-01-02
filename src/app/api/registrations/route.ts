import { NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

import { readJson, writeJson } from '../../../lib/storage';

export const runtime = 'nodejs';

type Registration = Record<string, string> & {
  id: string;
  date: number;
};

export const POST = async (request: Request) => {
  try {
    const payload = (await request.json().catch(() => ({}))) as Record<string, string>;
    const registration: Registration = {
      ...payload,
      id: randomUUID(),
      date: Date.now(),
    };

    const registrations = await readJson<Registration[]>('registrations.json', []);
    registrations.push(registration);
    await writeJson('registrations.json', registrations);

    return NextResponse.json({ id: registration.id });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
