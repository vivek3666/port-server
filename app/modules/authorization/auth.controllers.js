const User = require("../authorization/data-access/schemas/user.schema");
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err) {
      return res.send(err);
    } else {
      if (user) {
        if (user.authenticate(req.body.password)) {
          const token = jwt.sign(
              { _id: user._id, email: user.email },
              "JWT_SECRET",
              { expiresIn: "1d" }
          );
          res.status(200).json({token,user});
        } else {
          return res.status(400).json({
            message: "Invalid Password",
          });
        }
      } else {
        return res.status(201).json({
          message: "User doesnt exist. Please SignUp",
        });
      }
    }
  });
};

exports.register = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err) {
      return res.send(err);
    } else {
      if (user) {
        return res.status(201).json({
          message: "User already present",
        });
      } else {
        const { firstName, lastName, password, email, phoneNo, city } = req.body;
        const _user = new User({firstName, lastName, password, email, phoneNo, city});
        _user.save().then((data)=>{
          if (data) {
            return res.status(201).json({
              result:'success'
            });
          }
        }).catch((err)=> {
          return res.status(400).json({
            message: err,
          });
        });
      }
    }
  });
};

exports.validateToken = (req, res, next) => {
  if(req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "JWT_SECRET", (err, user) => {
      if (err) {
        res.send(err.message)
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.send({message:'missing token'})
  }
};


