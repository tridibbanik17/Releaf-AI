const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const passport = require("passport");
const sequelize = require("./db");
const initializePassport = require("./passport-config");
const bodyPaser = require("body-parser");
const { isAuthenticated } = require("./utils.js");

require("dotenv").config();

initializePassport(passport);

const User = require("./models/User");

const app = express();

const authRoutes = require("./routes/auth.js");
const searchRoutes = require("./routes/search.js");
const userRoutes = require("./routes/user.js");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({ db: sequelize }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyPaser.json());

// Routes
app.use("/auth", authRoutes);
app.use("/search", searchRoutes);
app.use("/user", isAuthenticated, userRoutes);

// Start server
sequelize.sync({ alter: true }).then(() => {
  app.listen(5000, () =>
    console.log("Server is running on http://localhost:5000")
  );
});
