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
  );

  return router;
}
