// Authentication middleware
module.exports.isAuthenticated = (req, res, next) => {
  console.log("Is authenticated: " + req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized" });
};
