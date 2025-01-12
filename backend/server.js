const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const passport = require("passport");
const sequelize = require("./db");
const initializePassport = require("./passport-config");
const bodyPaser = require("body-parser");
const { isAuthenticated } = require("./utils.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

initializePassport(passport);

const User = require("./models/User");

const corsOptions = {
  origin: process.env.ORIGIN,
  credentials: true,
  methods: ["GET", "POST", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};

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
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(cookieParser());

console.log("Allowed Origin: ", process.env.ORIGIN);

// Routes
app.use("/auth", authRoutes);
app.use("/search", searchRoutes);
app.use("/user", isAuthenticated, userRoutes);

// Start server
sequelize.sync({ alter: true }).then(() => {
  app.listen(5000, () => console.log("Server is running on port 5000"));
});
