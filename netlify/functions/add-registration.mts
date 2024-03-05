import { getStore } from '@netlify/blobs';
import type { Handler } from '@netlify/functions';
import { v4 as uuidv4 } from 'uuid';

interface BlobsEventData {
  token: string
  url: string
}

export const connectLambda = (headers: any, event: any) => {
  const rawData = Buffer.from(event.blobs, 'base64')
  const data = JSON.parse(rawData.toString('ascii')) as BlobsEventData
  const environmentContext: any = {
    deployID: event.headers['x-nf-deploy-id'],
    edgeURL: data.url,
    siteID: event.headers['x-nf-site-id'],
    token: data.token,
  }

  const encodedContext = Buffer.from(JSON.stringify(environmentContext)).toString('base64')

  process.env.NETLIFY_BLOBS_CONTEXT = encodedContext;
}

type FormValues = {
  name: string;
  lastName: string;
  age: string;
  sex: string;
  question: string;
};

type Registration = FormValues & {
  id: string;
  date: number;
};

export const handler: Handler = async (event) => {
  connectLambda(event.headers, event);

  const formValues: FormValues = JSON.parse(event.body || '{}');

  console.info('[INFO]', 'Getting store "registrations"');
  const registration = getStore('registrations');

  try {
    console.info('[INFO]', 'Saving new blob into store "registrations": ');
    console.info('[INFO]', { ...formValues, date: Date.now() });

    const id = uuidv4();

    await registration.setJSON(id, { ...formValues, id, date: Date.now() } as Registration);

    return {
      statusCode: 200,
      body: JSON.stringify({ id }),
    };
  } catch (error) {
    console.error('[ERROR]', error);
    return {
      statusCode: 500,
    };
  }
};
