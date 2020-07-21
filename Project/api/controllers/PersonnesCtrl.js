const database = require("../models")
const { static } = require("express")



//Afficher toute les personnes qui son dans la base de données 
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


    //Retrouver des personnes atravers leurs id 
    static async takeOnePersonne(req, res) {
        const { id } = req.params
        try {
            const onePersonne = await database.personnes.findOne({
                where:
                {
                    id: Number(id)

                }
            })
            return res.status(200).json(onePersonne)

        } catch (error) {
            return res.status(500).json(err.message)
        }
    }


    //Création d'une nouvelle personne 
    static async createPersonnes(req, res) {
        //Ma méthode 
        // const newPersonne ={nom,prenom,email}=req.body
        //Tuto méthode 
        const newPersonne = req.body
        try {
            const newPersonneCreate = await database.personnes.create(newPersonne)
            return res.status(200).json(newPersonneCreate)
        }

        catch (error) {
            return res.status(500).json(err.message)

        }
    }




    //Modifier mon profile
    static async modifierProfile(req, res) {
        const { id } = req.params
        const newInfos = req.body

        try {
            await database.personnes.update(newInfos, { where: { id: Number(id) } }
            )
            const profilModifier = await database.personnes.findOne({ where: { id: Number(id) } })
            return res.status(200).json(profilModifier)
        }

        catch (error) {
            return res.status(500).json(error.message)

        }

    }



    //effacer un registre
    static async effacerProfile(req, res) {
        const { id } = req.params

        try {
            await database.personnes.destroy({ where: { id: Number(id) } })
            return res.status(200).json("ok")


        }

        catch (error) {
            return res.status(500).json(error.message)

        }

    }



}

module.exports = PersonnesCtrl;


