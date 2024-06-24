
const express = require ("express")
const router= express.Router()

const {traerPosteos,traerUnPosteo,crearUnPosteo,actualizarPosteo, borrarPosteo} = require ("../controllers/posteosControllers.js")

router.get ("/",traerPosteos) 
router.get ("/:id",traerUnPosteo)
router.post ("/",crearUnPosteo)
router.put ("/:id",actualizarPosteo)
router.delete ("/:id",borrarPosteo)
            /*res.send ("aca guardamos un posteo (req.body) en la bd")
            }) 
            router.put ("/:id",(req,res)=>{
                res.send ("aca actualizamos un posteo en la bd")
                }) 
                router.delete ("/:id",(req,res)=>{
                    res.send ("aca borramos un posteo en la bd")
                    }) 
 */
                    module.exports= router