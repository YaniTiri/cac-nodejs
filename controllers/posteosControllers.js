
const posteosModel = require ("../models/posteoModel.js")

/* CRUD */
//LEER TODOS LOS POSTEOS
const traerPosteos= async (req,res)=>{
    //res.send("Te envio desde la BD todos los posteos")
    try {
        const posteos = await posteosModel.findAll() // metodo de sequelize
        res.json(posteos)
    } catch (error) {
        res.json({message: error.message})
        
    }
}

//LEER UN POSTEO
const traerUnPosteo= async (req,res)=>{
    //res.send("Te envio  UN posteo")

    try {
        const posteo = await posteosModel.findByPk(req.params.id)
        res.json(posteo)
    } catch (error) {
        res.json({message: error.message})
    }
}

//CREAR UN REGISTRO
const crearUnPosteo = async (req, res) =>{
    try {
        await posteosModel.create(req.body)
        res.json({"message": "Registro creado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//ACTUALIZAR UN POSTEO
const actualizarPosteo = async (req,res) =>{
    try {
        await posteosModel.update(req.body, {
            where :{id:req.params.id}
        })
        res.json({"message": "Registro actualizado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//BORRAR POSTEOS ***
const borrarPosteo = async (req, res) =>{
    try {
        await posteosModel.destroy({where :{id:req.params.id}})
        res.json({"message": "Registro eliminado correctamente"})
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports= {traerPosteos,traerUnPosteo,crearUnPosteo, actualizarPosteo, borrarPosteo}