const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');

const io = require('socket.io')(server, 
    { 
        cors: 
        { 
            origin: "*", 
            method: ["GET", "POST"]
        }   
    }
);

app.use(cors());

const PORT = process.env.PORT || 4000; 

app.get("/", (req, res) => {
    res.send("Server is Up...");
});

server.listen(PORT, ()=> console.log(`Server is listening on port ${PORT}`));