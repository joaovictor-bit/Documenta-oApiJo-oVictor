import express from "express"
import swaggerUI from "swagger-ui-express"
import swaggerSpec from "./swagger.js"

//usuario routes
import usuariosRoutes from "./routes/usuario.js"



const app = express()
app.use(express.json())
const PORT = 5000


/** 
 * @swagger
 * /consulta:
 *  get:
 *      summary: Rota inicial da API
 *      tags: [inicial]
 *      responses:
 *          200:
 *              description: API is Running
 *      
*/


app.get("/consulta",(req,res)=>{
    res.status(200).json({msg:"API is Running"})
})




app.use("/usuarios",usuariosRoutes)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec))



app.listen(PORT, () =>{
    console.log(`Servidor is running on http://localhost:${PORT} 👌`)
    console.log(`Servidor is running on http://localhost:${PORT}/api-docs 👌`)
    

})