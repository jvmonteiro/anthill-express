import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { featRouter } from '../routes/feature.routes';
export const server = () => {
  const app = express();

  // Setup CORS
  app.use((req, res, next) => {
    res.set({
      'Access-Control-Allow-Origin': ['http://localhost:8080', req.headers.origin],
      'Access-Control-Allow-Headers': ['Origin', 'Authorization', 'Accept', 'Content-Type'],
      'Access-Control-Allow-Methods': ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      'Access-Control-Allow-Credentials': 'true',
    });
  });
  app.use(helmet());
  app.use(cookieParser());
  app.use(bodyParser.json());

  // Routes
  app.use('/features', featRouter);
  return app;
};
