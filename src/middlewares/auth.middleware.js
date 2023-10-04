const jwt = require("jsonwebtoken");

const validation = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, "secretkey");
    if (decoded) {
      req.body["user"] = decoded.userID;
      next();
    } else {
      res.status(400).json({ err: "Please login first" });
    }
  } else {
    res.status(400).json({ err: "Please login first" });
  }
};

module.exports = validation