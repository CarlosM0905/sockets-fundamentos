var socket = io();

// Los on son para escuchar eventos
socket.on('connect', function () {
    console.log('Conectado al servidor!')
})

socket.on('disconnect', function () {
    console.log('El server se cayo F!')
})

// Los emits son para enviar informacion

socket.emit('enviarMensaje', {
    mensaje: 'Pude ingresar al servidor!'
},
function (resp) {
    console.log("Respuesta del server", resp);
});

socket.on('enviarMensaje', (data) => {
    console.log(data);
})