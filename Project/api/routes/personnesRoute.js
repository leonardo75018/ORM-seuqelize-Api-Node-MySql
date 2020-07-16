
const express = require("express")
const Router = express.Router();
const PersonnesCtrl = require("../controllers/PersonnesCtrl");


// const router = Router();

Router.get("/personnes", PersonnesCtrl.prendAllPeople)

module.exports = Router;