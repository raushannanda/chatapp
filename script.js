
const express = require('express')
const app = express()
app.use(express.static(__dirname))
const http = require('http')

const server = http.createServer(app)
const {Server, Socket} = require('socket.io')

const io = new Server(server,{
    cors:{
        origin:[
            'http://localhost',
            'http://192.168.153.125'
        ],
        methods:['GET','POST']
    }
})
io.on('connection',(socket)=>{
    console.log('a user connected')
    socket.on('disconnect',()=>{
        console.warn('a user disconnected')
    })
    socket.on('chat',(msg)=>{
        socket.broadcast.emit('chat',msg)
    })
})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

server.listen(3000,()=>{
    console.log("listening on port 3000")
})