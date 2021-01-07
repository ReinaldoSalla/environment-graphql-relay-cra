import passport from 'passport';
import User from '../user';
import init from './init';

// const GitHubStrategy = require('passport-guthub2').Strategy;
// import * as X from 'passport-github2';
import { Strategy } from 'passport-github2';

const options = {
  clientID: '',
  clientSecret: '',
  callbackURL: ''
};

passport.use(new Strategy(options, (acessToken, refreshToken, profile, done) => {

}))

// passport.use(new Strategy({
//   clientID: '',
//   clientSecret: '',
//   callbackURL: ''
//   },
//   (accessToken, refreshToken, profile, done) => {

//   }
// ));