const express=require('express')
const cors=require('cors')
const logic=require('././services/logic')
const server=express()
server.use(cors({
    origin:'http://localhost:3000'
}))

server.use(express.json())
server.listen(8000,()=>{
    console.log('Server connected the port number 8000');
})

server.get('/get-all-books',(req,res)=>{
    logic.allBooks()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
server.get('/get-all-branches',(req,res)=>{
    logic.allBranches()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})