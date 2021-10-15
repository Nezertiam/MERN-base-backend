const router = require("express").Router();
const exampleController = require("../controllers/example.controller.js");

router.get("/", exampleController.example);

module.exports = router;