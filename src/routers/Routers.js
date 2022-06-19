import express from "express";
import usuarioController from "../controller/usuarioController.js"

class RotasUsuario{
    static rotas(app){
        app.post('/add_user', (req,res)=>{
            usuarioController.cadastrarUser(req,res)
        })
        app.get('/users',(req,res)=>{
            usuarioController.listarUser(req,res)
        })
        app.get('/users/:id',(req,res)=>{
            usuarioController.listarUserID(req,res)
        })
        app.put('/edit_user/:id', (req,res)=>{
            usuarioController.atualizarUserID(req,res)
        })
        app.delete('/delete_user/:id',(req,res)=>{
            usuarioController.excluirUserID(req,res)
        })

    }       

}

export default RotasUsuario;







