import express from "express";


const app = express();
const port = 3000
// const DB_USER = 'jonatastalves'
// const DB_PASSWORD = 'torres94'


// // mongoose
// //     .connect(
//     //         `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.piksf3s.mongodb.net/bancoapi?retryWrites=true&w=majority'`
//     //         )
//     //         .then(()=>{
//         //             app.listen(port, ()=>{
//             //                 console.log(`Servidor disponível em http://localhost:${port}, conectado ao mongoDB!`)
//             //             });
//             //         })
//             //         .catch((err)=> console.log(err))
            
            
            
app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Server Online" });
  });

