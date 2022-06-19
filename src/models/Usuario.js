import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {   
        nome: {type: String, required: true},
        email: {type: String, unique: true, required: true},
        telefone: {type: Number, required: true},
    },
    {
        versionKey: false
    }
)

const usuarios = mongoose.model('usuarios', userSchema)

export default usuarios;