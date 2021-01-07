import passport from 'passport';
import User from '../user';

export default () => {
  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user: any) => {
      done(err, user)
    });
  });
};