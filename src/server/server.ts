import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
export const server = () => {
  const app = express();
  app.use(helmet());
  app.use(cookieParser());
  app.use(bodyParser.json());
  return app;
};
