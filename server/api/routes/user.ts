import * as qs from 'qs';
import axios from 'axios';
import { authenticate } from 'passport';
import { Request, Response, Router } from 'express';

export function userRouter(): Router {
  const router: Router = Router();

  /**
   * Route used to authenticate instagram user.
   */
  router.get('/user/auth/instagram', authenticate('instagram'));

  /**
   * Callback route used for instagram authentication.
   */
  router.post('/user/auth/instagram/redirect',
    authenticate('instagram', { failureRedirect: '/' }),
    (req: Request, res: Response): void => res.redirect('/photos')
  );

  return router;
}
