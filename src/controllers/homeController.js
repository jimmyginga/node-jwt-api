/**
 * Controller file for no auth routes
 * Author: Jimi Nginga
 * Created in 08/2020
 * 
 * importing modules.
 */
const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

/**
 * Func: endpoit to home page
 */
router.get('/', async(req, res)=>{
    try {
        const posts = await Post.find() 
        res.status(200).send({mensagem: `Home page, posts: ${posts}`})
    } catch (err) {
        return res.status(400).send({mensagem: `Error traing list post: ${posts}`})
    }
})

module.exports = app => app.use('/api', router)