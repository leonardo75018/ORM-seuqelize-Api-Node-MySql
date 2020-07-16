const database = require("../models")


class PersonnesCtrl {
    static async prendAllPeople(req, res) {
        try {
            //le resultat de la data cherché dans la bd 
            const allPeople = await database.personnes.findAll()
            //conservion en json
            return res.status(200).json(allPeople)

        } catch (err) {
            return res.status(500).json(err.message)

        }





    }


}

module.exports = PersonnesCtrl;


