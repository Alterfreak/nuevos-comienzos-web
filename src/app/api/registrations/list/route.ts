import { NextResponse } from 'next/server';

import { readJson } from '../../../../lib/storage';

export const runtime = 'nodejs';

type Registration = Record<string, string> & {
  id: string;
  date: number;
};

const ADMIN_CODE = process.env.REGISTRATIONS_ADMIN_CODE ?? 'nuevos_314';

export const POST = async (request: Request) => {
  try {
    const payload = (await request.json().catch(() => ({}))) as { code?: string };

    if (payload.code !== ADMIN_CODE) {
      return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
    }

    const registrations = await readJson<Registration[]>('registrations.json', []);

    return NextResponse.json({ result: registrations });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
