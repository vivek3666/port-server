var express = require("express");
const { testAPI} = require("../controllers/auth.controllers");
var router = express.Router();

router.get("/test", testAPI);

module.exports = router;
