import usuarios from "../models/Usuario.js"
import Response from "../utils/Response.js"

class usuarioController{
    static cadastrarUser(req, res){
        // dando erro mas cadastra
        const usuario = new usuarios(req.body)
        usuario.save((erro)=>{
            if(erro){
                res.status(400).send({Mensagem: Response[400], Erro: erro})
            } else {
                res.status(201).send({Mensagem: Response[201], Resultado: usuario})
            }
        })
    }
    
    static listarUser(req, res){
        usuarios.find((erro, usuarios)=>{
            if(erro || usuarios.length == 0){
                res.status(404).send({Mensagem: Response[404]})
            } else {
                res.status(200).send(usuarios)
            }
        })
    }
    
    static listarUserID(req, res){
        const id = req.params.id 
        usuarios.findById(id, (erro, usuario)=> {
        if(erro){
            res.status(404).send({Mensagem: Response[404], Erro: erro})
        } else {
            res.status(200).send({Mensagem: Response[200], Resultado: usuario})
        }
    })
    }
    
    static atualizarUserID(req, res){
        const id = req.params.id
        usuarios.findByIdAndUpdate(id, {$set: req.body}, {new: true}, (usuario)=>{
            
            res.status(200).send({Mensagem: Response[200], Resultado: usuario})
            
        })
    }
    
    static excluirUserID(req, res){
        const id = req.params.id
        usuarios.findByIdAndDelete(id, (usuario)=> {
            res.status(200).send({Mensagem: Response[200]})
        })
    }
}

export default usuarioController;
