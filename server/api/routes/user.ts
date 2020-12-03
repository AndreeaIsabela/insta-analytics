import * as qs from 'qs';
import axios from 'axios';
import { authenticate } from 'passport';
import { Request, Response, Router } from 'express';

import { config } from '../../config';

export function userRouter(): Router {
  const router: Router = Router();

  /**
   * Route used to authenticate Facebook user.
   */
  router.get('/user/auth/facebook', authenticate('facebook', { session: false }));

  /**
   * Callback route used for Facebook authentication.
   */
  router.get('/user/auth/facebook/redirect',
    authenticate('facebook', { session: false }),
    (req: Request, res: Response): void => {
      const accessToken: string = (req as any).user.facebook.token;

      res.render('authenticated', { accessToken });
    }
  );

  /**
   * Route used to authenticate Instagram user.
   */
  router.get('/user/auth/instagram', (req: Request, res: Response): void => {
    const url: string = 'https://api.instagram.com/oauth/authorize' +
      `?client_id=${config.instagram.clientID}` +
      `&redirect_uri=${config.instagram.callbackURL}` +
      '&scope=user_profile,user_media' +
      '&response_type=code';

    res.redirect(url);
  });

  /**
   * Callback route used for Instagram authentication.
   */
  router.get('/user/auth/instagram/redirect',
    async (req: Request, res: Response): Promise<void> => {
      try {
        const code: string = req.query.code as string;
        const url: string = 'https://api.instagram.com/oauth/access_token';
        const body = qs.stringify({
          'client_id': config.instagram.clientID,
          'client_secret': config.instagram.clientSecret,
          'grant_type': 'authorization_code',
          'redirect_uri': config.instagram.callbackURL,
          'code': code
        });

        const { data } = await axios({
          method: 'post',
          url,
          data: body,
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        });

        res.render('authenticated', { accessToken: data.access_token });
      } catch (error) {
        res.sendStatus(500);
      }
    }
  );

  return router;
}
