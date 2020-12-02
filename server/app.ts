import * as express from 'express';

import { config } from './config';

/**
 * Start the server.
 *
 * @returns {Promise<void>}
 */
async function startServer(): Promise<void> {
  const port: number = config.port;
  const app: express.Express = express();
  const { initLoaders } = await import('./loaders');

  await initLoaders(app);

  app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));
}

startServer();
