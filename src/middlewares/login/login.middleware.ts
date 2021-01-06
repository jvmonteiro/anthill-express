import axios from 'axios';
import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
// export const isLoggedIn = async (req: Request, res: Response, next: NextFunction) => {
//   if (!req.isUnauthenticated()) {
//     req.session.redirectTo = req.originalUrl;
//     res.redirect('/login');
//   }
//   return next();
// };

// export const signIn = async (req: Request, res: Response, next: NextFunction) => {
//   passport.authenticate('local', {
//     successReturnToOrRedirect: req.session.returnTo,
//     failureRedirect: '/login',
//   });
// };
