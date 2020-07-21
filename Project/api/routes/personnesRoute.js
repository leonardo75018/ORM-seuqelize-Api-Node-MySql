
const express = require("express")
const Router = express.Router();
const PersonnesCtrl = require("../controllers/PersonnesCtrl");
// const router = Router();



//Afficher toute les personnes qui son dans la base de données 
Router.get("/personnes", PersonnesCtrl.prendAllPeople)

//Retrouver des personnes atravers leurs id 
Router.get("/personnes/:id", PersonnesCtrl.takeOnePersonne)

//Création d'une nouvelle personne 
Router.post("/personnes", PersonnesCtrl.createPersonnes)

//Modifier profile
Router.put("/personnes/:id", PersonnesCtrl.modifierProfile)

//effacer un registre
Router.delete("/personnes/:id", PersonnesCtrl.effacerProfile)

module.exports = Router