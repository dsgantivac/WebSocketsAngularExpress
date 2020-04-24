let io:any

module.exports = {
    init: (httpServer:any) => {
        io = require("socket.io")(httpServer);
        return io;
    },
    getIo: () => {
        if(io ){
            return io
        }else{
            throw new Error("io not defined")
        }
    }
};