
const http = require('http')

const server = http.createServer((request, response) => {
    //detenemos el servidor con 'control + c'
    console.log('method:  ', request.method)
    console.log('url: ',request.url)
    console.log('headers: ', request.headers)

    // GET /hola -> hola mundo
    // POST /hola -> aqui puedes crear un recurso
    // DELETe /hola -> aqui puedes borrar un recurso
    // GET /adios -> adios :c

    if(request.method === 'GET' && request.url === '/hola'){
        response.write('Hola mundo')
    }else if(request.method === 'POST' && request.url === '/hola'){
        response.write('Aqui puedes crear un recurso')
    }else if(request.method === 'DELETE' && request.url === '/hola'){
        response.write('Aqui puedes borrar un recurso')
    }else if(request.method === 'PUT' && request.url === '/hola'){
        response.write('Aqui puedes reemplazar un recurso')
    }else if(request.method === 'PATCH' && request.url === '/hola'){
        response.write('Aqui puedes actualizar un recurso')
    }else if(request.method === 'GET' && request.url === '/adios'){
        response.write('Saquese perro cochino')
    }

    response.end()
})

server.listen(8080, () => {
    console.log('Server Listening')
})


//metodo a una ruta tal para hacer una accion 
// GET /koders -> lista de koders
// POST /koders -> crear un koders
// DELETE /koders/123(iD) -> eliminar un koders

