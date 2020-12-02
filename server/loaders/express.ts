import * as compression from 'compression';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import { Router, Express, json, urlencoded } from 'express';

import { config } from '../config';

/**
 * Init express application.
 *
 * @param {Express} app
 * @param {Router} router
 * @param {} passport
 * @returns {Promise<void>}
 */
export async function expressLoader(app: Express, router: Router, passport): Promise<void> {
  // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy');

  app.use(helmet());

  app.use(compression());

  // Middleware that transforms the raw string of req.body into json
  app.use(json());
  app.use(urlencoded({ extended: true }));

  // Load API routes
  app.use(config.api.prefix, router);

  app.use(morgan(config.loggerFormat));

  app.use(passport.initialize());
}
