import { facebookStrategy } from './strategies/facebook';

export async function passportLoader(passport): Promise<void> {
  /**
   * Used to serialize the user object.
   */
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  /**
   * Used to deserialize the user objet.
   */
  passport.deserializeUser(async (user, done) => {
    done(null, user);
  });

  facebookStrategy(passport);
};
