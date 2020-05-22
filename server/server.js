// ===================================================================
//	           Requires                                                    
// ===================================================================
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

// ===================================================================
//	           Creacion de la aplicacion express                                                    
// ===================================================================
const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

// ===================================================================
//	           Middlewares                                                    
// ===================================================================
app.use(express.static(publicPath));

// Comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket')




// ===================================================================
//	           Iniciar el servidor                                                    
// ===================================================================
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});