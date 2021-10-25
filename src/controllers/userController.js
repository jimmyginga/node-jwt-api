/**
 * Controller file for user
 * Author: Jimi Nginga
 * Created in 08/2020
 * 
 * importing modules.
 */ 
express = require('express')
const User = require('../models/User')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv-safe').config()


/**
 * Func to geretate token for requests
 * @param {user.id} params 
 */
function generateToken(params = {}){
    return jwt.sign( params, process.env.SECRET, { expiresIn: 86400 })
}

/**
 * Func to list all users
 */
router.get('/', async(req, res)=>{
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (err) {
        return res.status(400).send({mensagem: `error when try to list users: ${err}`})
    }
})
/**
 * Func tolist user by ID
 */
router.get('/:userId', async(req, res)=>{
    try {
        const user = await User.findById(req.params.userId)
        return res.status(200).send({user})
    } catch (err) {
        return res.status(400).send({mensagem: `error when try to list a user: ${err}`})
    }
})
/**
 * Func to update user
 */
router.put('/:userId', async(req, res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, {...req.body}, {new:true})

        return res.status(200).send({user, token: generateToken({id: req.params.userId})  })
    } catch (err) {
        return res.status(400).send({mensagem: `error when try to update user: ${err}`})
    }
})
/**
 * Func to create user
 */
router.post('/register', async(req, res)=>{
    const { mail } = req.body
    try {
        if( await User.findOne({ mail }))
            return res.status(400).send({mensagem: "Usário existente."})

        const user = await User.create(req.body)
        user.password = undefined
        return res.send({ 
            user,
            token: generateToken({id: user.id}) 
         })
    } catch (err) {
        return res.status(400).send({mensagem : `error when try to create user: ${err}`})
    }
})
/**
 * Func to login and get a valid token
 */
router.post('/login', async(req, res)=>{
    const { mail, password } = req.body
    
    const user = await User.findOne({mail}).select('+password')
  
    if(!user)
        return res.status(400).send({mensagem: "user non-existent."})

    if(! await bcrypt.compare(password, user.password))
        return res.status(400).send({ mensagem : "invalid password" })
    
    user.password = undefined;
    res.send({ 
        user, 
        token: generateToken({id: user.id, name: user.name, mail: user.mail})
     })
})
//Exporting module and setting route
module.exports = app => app.use('/api/user', router)