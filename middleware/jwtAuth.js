const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log("User Token:", token);
  if (token) {
    jwt.verify(token, process.env.secret, (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.redirect("/login");
      }else{
        console.log(decodedToken.id);
        next()
      }
    });
  } else {
    res.redirect("/login");
  }
};

module.exports = { authenticate };
