import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { featRouter } from '../routes/feature.routes';
import { loginRouter } from '../routes/login.routes';
// Setup Mongo connection
import { url } from '../config/mongo.config';
import { MongoDB } from '../db';
import passport from 'passport';

export const server = () => {
  const app = express();
  const mongoConn = url();
  const db = new MongoDB(mongoConn).connectDB();

  // Setup CORS
  app.use((req, res, next) => {
    res.set({
      'Access-Control-Allow-Origin': ['http://localhost:8080', req.headers.origin],
      'Access-Control-Allow-Headers': ['Origin', 'Authorization', 'Accept', 'Content-Type'],
      'Access-Control-Allow-Methods': ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      'Access-Control-Allow-Credentials': 'true',
    });
    next();
  });
  app.use(passport.initialize());
  app.use(helmet());
  app.use(cookieParser());
  app.use(bodyParser.json());

  loginRouter(app);
  // Routes
  app.use('/features', featRouter);

  return app;
};
