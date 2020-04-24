import express from "express"


let socketIo = require("./socket") 
let router = express.Router();

router.post("/socket/send", (req,res)=> {
    let clientId = req.body.clientId;
    let message = req.body.message;
    //socketIo.getIo().sockets.socket(clientId).emit('new-message', {action: 'create', post: message});
    console.log(socketIo.getIo().clients().sockets[clientId].id);
    socketIo.getIo().clients().sockets[clientId].emit('new-message', {action: 'create', post: message})
    res.send("melo prro")
})


router.post("/socket", (req,res)=> {
    let message = req.body.message;
    socketIo.getIo().emit('new-message', {action: 'create', post: message});
    res.send("funciona");
})

module.exports = router