import { Strategy as InstagramStrategy } from 'passport-instagram';

import { config } from '../../../config';
import { IUser } from '../../../types/IUser';

/**
 * Init Instagram strategy.
 *
 * @param {} passport
 * @returns {Promise<void> }
 */
export async function instagramStrategy(passport,): Promise<void> {
  passport.use(new InstagramStrategy({
      clientID: config.instagram.clientID,
      clientSecret: config.instagram.clientSecret,
      callbackURL: config.instagram.callbackURL
    },

    /**
     * Instagram will send back the token and profile.
     */
    async (accessToken: string, refreshToken: string, profile, done): Promise<void> => {
      try {
        const user: IUser = {
          instagram: {
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
