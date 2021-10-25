/**
 * model file to persist uses data in database
 * Author: Jimi Nginga
 * Created in 08/2020
 * 
 * importing modules.
 */ 
const mongoose = require('../database/config')
const User = require('./User')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    }
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post