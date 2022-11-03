// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from 'mongodb';

import appConfig from '@/utils/appConfig';

declare global {
  /* eslint-disable vars-on-top */
  // eslint-disable-next-line no-var
  var mongoClientPromise: Promise<MongoClient>;
}

const { mongodbUri } = appConfig;

let client;
// eslint-disable-next-line import/no-mutable-exports
let clientPromise: Promise<MongoClient>;

if (!mongodbUri) {
  throw new Error('Please add your MONGODB_URI to .env.local');
}

console.log('MONGODB_URI', mongodbUri);

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global.mongoClientPromise) {
    client = new MongoClient(mongodbUri);
    global.mongoClientPromise = client.connect();
  }
  clientPromise = global.mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(mongodbUri);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
