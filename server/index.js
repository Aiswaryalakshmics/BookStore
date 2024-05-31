// to load .env file
require('dotenv').config()

// import express server
const express = require('express')

// import cors
const cors = require('cors')

// import router
const router = require('./Router/routes')

// import db
require('./DB/connection')

// to create express server
const server = express()

//use cors
server.use(cors())

// parse json data using server app
server.use(express.json())

// customise port for server app
const PORT = 4000 || process.env.PORT

// to run server app
server.listen(PORT,()=>{
    console.log(`Book-store started at port : ${PORT}`);
})

// resolve request to localhost:4000
// server.get('/',(req,res)=>{
//    res.send(`<h1>Project Fair Server Started and Waiting For Client Requests !!! </h1>`)
// })

server.use("/books",router)  // localhost:4000/books