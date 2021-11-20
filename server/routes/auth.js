const express = require("express");
const router = express.Router();
const { signup, getUser, login } = require("../controllers/user");

router.post("/signup", signup);
router.get("/", getUser);
router.post("/login", login);

module.exports = router;
