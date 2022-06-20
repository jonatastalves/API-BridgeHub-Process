import mongoose from "mongoose";

const DB_USER = 'jonatastalves'
const DB_PASSWORD = 'torres94'
const MONGODB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.piksf3s.mongodb.net/bancoapi?retryWrites=true&w=majority'`
mongoose
    .connect(process.env.MONGODB_URI)

let db = mongoose.connection



export default db