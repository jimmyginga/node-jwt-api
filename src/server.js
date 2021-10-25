/**
 * Aplication server file
 * Author: Jimi Nginga
 * Created in 08/2020
 * 
 * importing modules.
 */ 
const http = require('http')
const port = process.env.PORT || 3003
const app = require('./app')
const server = http.createServer(app)

/**
 * Func listen, responsible for observing port 3003 and connecting the application to it
 */
server.listen(port, err =>{
    if(err) console.log(`Erro ao iniciar servidor ${err}`)
    console.log(`Servidor em execução na porta ${port}`)
})