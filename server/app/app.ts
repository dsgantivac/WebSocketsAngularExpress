import express from "express"
import * as socketio from 'socket.io'


let app = express();

app.get("/", (req,res) => {
    res.send("Funciona mi prro")
})
app.use(express.json())
let socketController = require("./socketTest") 
app.use(socketController)

let server = app.listen(3000,() => {
    console.log("funciona en el puerto 3000");
})
let io = require("./socket").init(server);
let socketIo = require("./socket") 

io.on("connection", (socket: any) => {
    console.log("client conected");
    console.log(socket.id);
    //estos mensajes son para el cliente
    socket.on('new-message', (message:string) => {
        
        console.log(socket.id + ": "+message);
        //el que esta comentado envia solo al cliente
        //socket.emit('new-message', {action: 'create', post: message});
        //para enviar a todos
        socketIo.getIo().emit('new-message', {action: 'notify', post: message});
      });
})



