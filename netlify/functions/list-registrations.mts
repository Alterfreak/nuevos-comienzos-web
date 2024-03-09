import { getStore } from '@netlify/blobs';
import type { Handler } from '@netlify/functions';

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
  const registration = getStore('registrations');
  const formValues: { code: string } = JSON.parse(event.body || '{}');

  try {

    if (formValues.code !== 'nuevos_314') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }
    
    const list = await registration.list();
    const result = await Promise.all(list.blobs.map(item => registration.get(item.key, { type: 'json' })));

    return {
      statusCode: 200,
      body: JSON.stringify({ result }),
    };
  } catch (error) {
    console.error('[ERROR]', error);
    return {
      statusCode: 500,
    };
  }
};
