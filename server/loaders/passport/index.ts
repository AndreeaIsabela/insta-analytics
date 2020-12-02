import { instagramStrategy } from './strategies/instagram';

export async function passportLoader(passport): Promise<void> {
  instagramStrategy(passport);
};
