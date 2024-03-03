import Express from "express";
import {createServer} from "http";
import {Server} from "socket.io";
import cors from "cors"

const port = 2323;

const app = Express();
const httpServer = createServer(app)
const io = new Server(httpServer,{
    cors:{
        origin: "http://localhost:5173",
        methods:["GET", "POST"],
        credentials: true
    }
});

app.use(cors(
    {
        origin: "http://localhost:5173",
        methods:["GET", "POST"],
        credentials: true
    }
));

app.get('/',(req, res) =>{
    res.send('Hello');
})

io.on("connection", (socket)=>{
    console.log(`User Connected`);
    console.log(`Id ${socket.id}`);
})

httpServer.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
