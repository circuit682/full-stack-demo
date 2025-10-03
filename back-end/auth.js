import dotenv from 'dotenv';
dotenv.config();
console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);
console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET);
console.log("GOOGLE_CALLBACK_URL:", process.env.GOOGLE_CALLBACK_URL);

import passport from'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback: true
  },
  function (req, accessToken, refreshToken, profile, done) {
    // In production, save user to database here
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default passport;

// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// const GOOGLE_CLIENT_ID = '97568906881-umf575e3cm6kujt0f34956gmf8i8b71g.apps.googleusercontent.com';
// const GOOGLE_CLIENT_SECRET = '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';

// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:5000/google/callback",
//     passReqToCallback: true
//   },
//   function(accessToken, refreshToken, profile, cb, done) {
// //     User.findOrCreate({ googleId: profile.id }, function (err, user) {
// //       return cb(err, user);
// //     });
// return done(null, profile);
//   }
// ));

// passport.serializeUser((user, done) => {
//     done(null, user);
//     });

// passport.deserializeUser((user, done) => {
//     done(null, user);
//     });
