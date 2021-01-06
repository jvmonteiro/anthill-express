import { Strategy } from 'passport-local';
import passport from 'passport';
import { UserService } from '../../entities/user/user.svc';
import { User, UserSchema } from '../../entities/user/user.model';

export const userSvc = new UserService(User(UserSchema()));
passport.use(
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {
      try {
        const user = await userSvc.getSingleUser(email);
        if (!user) return done(null, false, { message: 'No user found!' });
        if (!userSvc.correctLogin({ email, password }, user))
          return done(null, false, { message: 'Incorrect email and password' });
        return done(null, user);
      } catch (err) {
        console.log(err);
      }
    },
  ),
);
