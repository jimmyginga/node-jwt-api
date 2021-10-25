/**
 * Controller file for posts routes 
 * 
 * Author: Jimi Nginga
 * Created in 08/2020
 * 
 * Importing modules.
 */
const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const authMiddleware = require('../middlewares/auth')

router.use(authMiddleware)
/**
 * Func to show all posts
 */
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('user')
        return res.status(200).send({posts})
    } catch (err) {
        return res.status(400).send({mensagem : `error when try to list posts:${err}` })
    }
})
/**
 * Func to show a post
 */
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId).populate('user')
        return res.status(200).send({post})
    } catch (err) {
        return res.status(400).send({mensagem : 'error when try to list post: '+ err})
    }
})
/**
 * Func to create a new post
 */
router.post('/', authMiddleware, async (req, res) => {
    const {title} = req.body
    try {
        if( await Post.findOne({title}) )return res.status(400).send({mensagem: 'non-existent pos'})

        const post =  await Post.create({user: req.userId, ...req.body})

        return res.status(200).send({post})       
    } catch (err) {
        return res.status(400).send({mensagem : `error when try to create post: ${err}`})         
    }
})
/**
 * Func to edit a post by ID
 */
router.put('/:postId', async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.postId, {...req.body}, {new:true})
        return res.status(400).send({post})
    } catch (err) {
        return res.status(400).send({mensagem : `error when try to update post: ${err}`})
    }
})
/**
 * Func to delete Post
 */
router.delete('/:postId', async (req, res) => {
   try {
       await Post.findByIdAndRemove(req.params.postId)
       return res.status(200).send() 
   } catch (err) {
        return res.status(400).send({mensagem : `error when try to delete post: ${err}`})
   }
})
//Exporting module and create a his route
module.exports = app => app.use('/api/posts', router)