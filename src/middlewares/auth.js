/**
 * meedleware file to check json web token status
 * Author: Jimi Nginga
 * Created in 08/2020
 * 
 * importing modules.
 */ 
const jwt = require('jsonwebtoken')
require('dotenv-safe').config()
/**
 * Função middleware de autenticação de usuário
 * @param {for requests} req 
 * @param {pfor response} res 
 * @param {to next if true} next 
 */

const jwtverify = (req, res, next)=>{
    const header = req.headers.authorization.split(" ")[1]
    if(header === undefined)return res.status(403).json({message:'fobiden, please, insert a valid token'})
    if(! header)return res.status(401).send({mensagem: 'No token provided'})

    jwt.verify(header, process.env.SECRET, (err, decoded)=>{
        if(err) return res.status(500).send({mensagem: 'Token authentication error.'})
    
    req.userId = decoded.id
    return next()
    })
}
//Exporting module and create a his route
module.exports = jwtverify