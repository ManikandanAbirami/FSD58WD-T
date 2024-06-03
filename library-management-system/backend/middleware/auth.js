const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access denied.");

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log("verified:", verified);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};

const verifyRole = (roles) => {
  // roles ['Admin', 'Editor']
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      // req.user.role: 'Viewer'
      next();
    } else {
      res.status(403).send("Forbidden");
    }
  };
};

module.exports = { auth, verifyRole };
