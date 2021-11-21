var express = require("express");
const {login, register} = require("./auth.controllers");
var router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
