// import a biblioteca
// Ela server para ler os comentários do tipo @swagger no codigo
import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {


        //define a versão da espaecificação da API usada pelo swagger
        //OPENAPI é o padrão usado para documentar APIs
        openapi: "3.0.0",

        info:{
            //titulo da API que que vai aparecer no SWAGGER
            title: "API em NODEJS com express",
            //versao da API
            version:"1.0.0",
            //pequena descrição
            describe: "Documentação de API com SWAGGER"
        },

        servers:[
            {
                //URL base da API
                url: "http://localhost:5000"
            }
        ]


    },
    // apis define e, quais arquivos o SWAGGER deve procurar
    //os comerntários com @SWAGGER
    apis:["./server.js","./routes/usuario.js"]
}

// Aqui o swagger-jsdoc lê as configurações do objeto "options"
// e gera a docmentação de API em formato JSON
const swaggerSpec = swaggerJSDoc(options);

//Exporta a documentação pronta
//para que ela possa ser usada em outro arquivo, como no server.js

export default swaggerSpec