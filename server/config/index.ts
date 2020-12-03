import * as dotenv from 'dotenv';

import { IConfig } from '../types/IConfig';

const dotenvConfig: dotenv.DotenvConfigOutput = dotenv.config();

if (dotenvConfig.error) {
  throw new Error('Could not find .env file');
}

export const config: IConfig = Object.freeze({
  port: process.env.PORT
    ? parseInt(process.env.PORT, 10)
    : 8000,

  api: {
    prefix: '/api',
  },

  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: process.env.FACEBOOK_PROFILE_FIELDS.split(',')
  },

  instagram: {
    clientID: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    callbackURL: process.env.INSTAGRAM_CALLBACK_URL
  },

  loggerFormat: 'dev'
});
