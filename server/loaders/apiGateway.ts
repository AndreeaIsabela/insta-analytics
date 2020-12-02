import { Router } from 'express';

import { ApiGateway } from '../api/gateway';

/**
 * Init API Gateway.
 *
 * @returns {Router}
 */
export function apiGatewayLoader(): Router {
  const apiGateway: ApiGateway = new ApiGateway();

  return apiGateway.router;
}
