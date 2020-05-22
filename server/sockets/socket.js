const {io} = require('../server')
io.on('connection', (client)=>{



    console.log('Cliente conectado :)');

    // Emitir al cliente
    // client.emit('enviarMensaje', {
    //     usuario: 'Administrador',
    //     mensaje: 'Bienvenido a esta aplicacion'
    // });

    client.on('disconnect', ()=>{
        console.log('El cliente se fue :(')
    });


    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback)=>{
        console.log(data);

        // Solo recibira respuesta el propio cliente
        // client.emit('enviarMensaje', {
        //     data
        // })

        client.broadcast.emit('enviarMensaje', data)
        callback({
            resp: 'El mensaje fue enviando al chat'
        });
        // if(message.usuario){
        //     callback({
        //         resp:  'TODO SALIO BIEN ! :)'
        //     })
        // }
        // else{
        //     callback({
        //         resp: 'TODO SALIO MAL ! :('
        //     });
        // }
        
    });

})