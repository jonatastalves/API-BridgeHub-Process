import mongoose from "mongoose";

const DB_USER = 'jonatastalves'
const DB_PASSWORD = 'torres94'

mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apiCluster.piksf3s.mongodb.net/bancoapi?retryWrites=true&w=majority'`)

let db = mongoose.connection



export default db