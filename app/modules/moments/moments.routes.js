var express = require("express");
const { getAllMoments, createMoment, updateMoment, deleteMoment} = require("./moments.controllers");
const {validateToken} = require("../authorization/auth.controllers");
var router = express.Router();

router.get("/moments",validateToken,getAllMoments);
router.post("/moments/moment",validateToken, createMoment);
router.put("/moments/moment/:momentId",validateToken, updateMoment);
router.delete("/moments/moment/:momentId",validateToken, deleteMoment);

module.exports = router;
