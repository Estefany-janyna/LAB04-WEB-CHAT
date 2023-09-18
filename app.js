// const express = require('express')
// const app = express()

// const http = require('http')
// const server = http.createServer(app)

// const{Server} = require('socket.io')
// const io= new Server(server)

// io.on('connection',(socket)=>{
//     // console.log('Un usuario se ha conectado')
//     // socket.on('disconnect',()=>{
//     //     console.log('Un usuario se ha desconectado')
//     // })

//     socket.on('chat',(msg)=>{
//             // console.log('Mensaje: ' + msg)
//         io.emit('chat', msg)
//      })
// })

// app.get('/',(req, resp)=>{
//     // resp.send('<h1>  Aplicación de chat </h1>')
//     resp.sendFile(`${__dirname}/cliente/index.html`)
// })

// server.listen(3000, () =>{
//     console.log('Servidor corriendo en http://localhost:3000')
// })




const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

// Configurar Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

io.on('connection', (socket) => {
    socket.on('chat', (msg) => {
        io.emit('chat', msg);
    });
});

app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/cliente/index.html');
});

server.listen(3000, () =>{
    console.log('Servidor corriendo en http://localhost:3000')
})