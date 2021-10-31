/**
 * model file to persist post data in database
 * Author: Jimi Nginga
 * Created in 08/2020
 * 
 * importing modules.
 */ 
const mongoose = require('../database/config')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mail:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

/**
 * Função [pre-save], emcriptando password antes de armazenar no db
 */
UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})
/**
 * Hash password for update
 */
UserSchema.pre('findOneAndUpdate', async function(next){
    const hash = await bcrypt.hash(this._update.password, 10)
    this._update.password = hash
    next()
})
//Atribuindo à constante User a model com a estrutuda da UserSchema
const User = mongoose.model('User', UserSchema)
//Exportando o módulo, e adicionando a rota.
module.exports = User