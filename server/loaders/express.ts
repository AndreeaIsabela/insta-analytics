import * as compression from 'compression';
import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import { join } from 'path';

import { config } from '../config';

/**
 * Init express application.
 *
 * @param {Express} app
 * @param {Router} router
 * @param {} passport
 * @returns {Promise<void>}
 */
export async function expressLoader(app: express.Express, router: express.Router, passport): Promise<void> {
  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy');

  app.use(helmet({
    contentSecurityPolicy: false
  }));

  app.use(compression());

  // Middleware that transforms the raw string of req.body into json
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.set('views', join(__dirname, '../../public/'));
  app.set('view engine', 'pug');

  app.use(passport.initialize());

  // Load API routes
  app.use(config.api.prefix, router);

  // Serve static files
  app.use(express.static(join(__dirname, '../../dist')));

  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../../dist/index.html'));
  });

  app.use(morgan(config.loggerFormat));
}
