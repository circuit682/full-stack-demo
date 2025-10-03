import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import session from'express-session';
import passport from './auth.js'; // <-- import configured passport

const app = express();
const port = 5000;

import userRoutes from "./routes/user.js";
app.use("/api", userRoutes);


import cors from 'cors';
const FRONTEND_URL = "http://localhost:3000"; // React default

app.use(cors({
  origin: FRONTEND_URL,
  methods: "GET,POST",
  credentials: true
}));


// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'cats',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

// Routes
app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

// app.get('/google/callback',
//   passport.authenticate('google', {
//     successRedirect: '/protected',
//     failureRedirect: '/auth/failure'
//   })
// );
app.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/failure",
    session: true
  }),
  (req, res) => {
    // Redirect back to React dashboard after successful login
    res.redirect("http://localhost:3000/dashboard");
  }
);


app.get('/auth/failure', (req, res) => res.send('Failed to authenticate..'));

app.get('/protected', isLoggedIn, (req, res) => {
  res.send(`Hello ${req.user.displayName}! <a href="/logout">Logout</a>`);
});

app.get('/logout', (req, res, next) => {
  req.logout(err => {
    if (err) { return next(err); }
    req.session.destroy(() => {
      res.redirect('/');
    });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



// const express = require('express');
// const session = require('express-session');
// const passport = require('passport');

// const port = 5000;
// const auth = require('./auth');



// function isLoggedIn(req, res, next) {
//   req.user ? next() : res.sendStatus(401);
// }

// const app = express();
// app.use(session({ secret: 'cats' }));
// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/', (req, res) => {
//   res.send('<a href="/auth/google">Authenticate with Google</a>');
// });
// app.get('/auth/google', 
//   passport.authenticate('google', { scope: ['email','profile'] }));

// app.get('/google/callback',
//    passport.authenticate('google', {
//   successRedirect: '/protected',
//   failureRedirect: '/auth/failure'
// }));
// app.get('/auth/failure', (req, res) => res.send('Failed to authenticate..'));



// app.get('/protected',isLoggedIn, (req, res) => {
//   res.send(`hello ${req.user.displayName} <a href="/logout">Logout</a>`);
// });

// app.get('/logout', (req, res) => {
//   req.logout(() => {
//     console.log('User logged out.');
//   });
//   res.redirect('/');
//   req.session.destroy();
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });