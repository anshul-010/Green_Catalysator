const express = require('express');
const { connection } = require('./db');
const cors = require('cors');
const { LikeRouter } = require('./routes/ProductLikeRoute');
const app = express();
app.use(express.json())
app.use(cors())
app.use("/product",LikeRouter)
app.get("/",(req,res)=>{
    res.send("welcome to the home page");
})

app.listen("8080",async()=>{
    try {
        await connection
        console.log("Connected to server")
        console.log("Server is running on port 8080")
    } catch (error) {
        console.log(error)
    }
})