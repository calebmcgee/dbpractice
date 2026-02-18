const express = require("express");
const {getIndex, getNew, postNew} = require("../controllers/indexController");
const indexRouter = express.Router();

indexRouter.get("/", getIndex);
indexRouter.get("/new", getNew);
indexRouter.post("/new", postNew);

module.exports = indexRouter;