import express from "express"


const router = express.Router()


let usuariossesi= [
    
        {id: 1, nome: "joao", email: "joaovictor@gmail.com"},
        {id: 2, nome: "teixeira", email: "joaoteixeira@gmail.com"}

    
]


/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista de usuários
 *     tags: [usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios retornada com sucesso
 */




router.get("/",(req,res)=>{
    res.status(200).json(usuariossesi)
})




/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário cadastrado com sucesso
 */





router.post("/",(req,res)=>{
    const {nome, email} = req.body


    const user = {id: usuariossesi.length + 1,
        nome,
        email}


    usuariossesi.push(user)
    return res.status(201).json(user)
})


export default router