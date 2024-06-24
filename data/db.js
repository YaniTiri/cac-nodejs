const {Sequelize} = require ("sequelize")


//nombre de la bbdd - user - contraseña - {donde se aloja la bbdd?, lenguaje? puerto?}
const db = new Sequelize ("posteos2024", "yanina", "Yanina_2024",{
    host: "mysql-yanina.alwaysdata.net",
    dialect:"mysql",
    port:3306
})

module.exports = db