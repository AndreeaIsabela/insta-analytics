import { Router, Express } from 'express';

import * as passport from 'passport';

import { apiGatewayLoader } from './apiGateway';
import { expressLoader } from './express';
import { passportLoader } from './passport';

/**
 * Init all application loaders.
 *
 * @param {Express} app
 * @returns {Promise<void>}
 */
export async function initLoaders(app: Express): Promise<void> {
  const router: Router = await apiGatewayLoader();
  console.log('API Gateway initialized');

  await passportLoader(passport)
  console.log('Passport initialized');

  await expressLoader(app, router, passport);
  console.log('Express initialized');
}
