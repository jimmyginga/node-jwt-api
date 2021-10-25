/**
 * Controller file for painel
 * Author: Jimi Nginga
 * Created in 08/2020
 * 
 * importing modules.
 */
const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth')

//Auth meedleware
router.use(authMiddleware)
/**
 *Function that redirects to the application's panel if the user is authenticated and has a valid token
 */
router.get('/', (req, res)=>{
    res.status(200).send({
        mensgen: 'login efetuado com sucesso.',
        userId: req.userId,
        userName: req.userName,
        userMail: req.userMail
    })
    console.log('Done!')
})
//Exportando o módulo, e adicionando a rota.
module.exports = app => app.use('/api/painel', router)