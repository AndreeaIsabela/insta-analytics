import * as cors from 'cors';
import { Router } from 'express';

import { userRouter } from './routes/user';

export class ApiGateway {
  public router: Router = Router();

  /**
   * Class constructor.
   */
  constructor() {
    // Enable Cross Origin Resource Sharing to all origins by default
    this.router.use(cors());

    /**
     * Health Check endpoints.
     */
    this.router.get('/health-check', (req, res) => {
      res.status(200).end();
    });
    this.router.head('/health-check', (req, res) => {
      res.status(200).end();
    });

    this.router.use(userRouter());

    this.router.use('/api', (req, res) => {
      return res.status(404).json({ message: 'This API route does not exists' });
    });
  }
}
