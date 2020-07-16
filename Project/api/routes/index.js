const bodyPaser = require("body-parser")
const perosonnes = require("./personnesRoute")


module.exports = app => {
    app.use(bodyPaser.json())
    app.use(perosonnes)

    app.get('/', (req, res) => res.send("hello")


    )
}