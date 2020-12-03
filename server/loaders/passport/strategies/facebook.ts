import { Strategy as FacebookStrategy } from 'passport-facebook';

import { config } from '../../../config';
import { IUser } from '../../../types/IUser';

/**
 * Init Facebook strategy.
 *
 * @param {} passport
 * @returns {Promise<void> }
 */
export async function facebookStrategy(passport,): Promise<void> {
  passport.use(new FacebookStrategy({
      clientID: config.facebook.clientID,
      clientSecret: config.facebook.clientSecret,
      callbackURL: config.facebook.callbackURL,
      profileFields: config.facebook.profileFields
    },

    /**
     * Facebook will send back the token and profile.
     */
    async (accessToken: string, refreshToken: string, profile, done): Promise<void> => {
      try {
        const user: IUser = {
          facebook: {
            id: profile.id,
            token: accessToken,
            name: profile.displayName,
            email: profile.emails[0].value
          }
        };

        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  ));
}
