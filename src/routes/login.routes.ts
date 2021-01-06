import { Application } from 'express';
import passport from 'passport';
import { userSvc } from '../middlewares/login/login.strategy';
export const loginRouter = (app: Application) => {
  app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) return next(err);
      req.logIn(user, { session: false }, (err) => {
        if (err) return next(err);
        return res.redirect('/features');
      });
    })(req, res, next);
  });

  app.post('/register', async (req, res, next) => {
    const { email, password } = req.body;
    const projects: [] = [];
    const user = { email, password, projects };
    const registeredUser = await userSvc.register(user);
    res.send('Registered!');
  });
};
