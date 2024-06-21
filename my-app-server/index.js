import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"

const app = express()
dotenv.config()
const PORT = process.env.PORT
const DB_URL = process.env.CONNECTION_URL

app.get('/', (req, res)=> {
    res.send("hello")
});

app.listen(PORT, ()=> {
    console.log(`Server running on Port ${PORT}`)
});

mongoose.connect(DB_URL,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("MongoDB database connected")
}).catch((error)=> {
    console.log(error)
})