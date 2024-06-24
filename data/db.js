const {Sequelize} = require ("sequelize")


//nombre de la bbdd - user - contraseña - {donde se aloja la bbdd?, lenguaje? puerto?}
const db = new Sequelize ("posteos2024", "root", "Yanina_2023",{
    host: "localhost",
    dialect:"mysql",
    port:3306
})

module.exports = db