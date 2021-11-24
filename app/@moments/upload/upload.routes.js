var express = require("express");
const {validateToken} = require("../../modules/authorization/auth.controllers");
const {uploadProfileImage} = require("./upload.controller");
var router = express.Router();

router.post("/upload",uploadProfileImage);

module.exports = router;
