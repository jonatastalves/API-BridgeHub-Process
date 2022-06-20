import express from "express";
import db from "./config/dbConexao.js";
import RotasUsuario from "./routers/Routers.js";

const port = process.env.PORT || 3000

const app = express();
app.use(express.json());

db.on("error", console.log.bind(console, "Houve um erro ao se conectar com o banco de dados"))
db.once("open", ()=>{
    console.log("Banco de dados conectado com sucesso")
})

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Server Online" });
});

app.listen(port, ()=>{
    console.log(`Servidor disponível em http://localhost:${port}, conectado ao mongoDB!`)
});

RotasUsuario.rotas(app);




            
