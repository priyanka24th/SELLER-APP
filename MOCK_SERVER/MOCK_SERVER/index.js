const jsonServer = require('json-server')
const sellers = require('./sellers/index')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

server.use(jsonServer.bodyParser)
server.use(middlewares)

server.listen(port, () => {
    console.log('JSON Server is running')
})
server.get('/seller', (request, response) => {
    if (request.method === 'GET') {
        //const users = require('./sellers/index')
        response.status(200).json(sellers())
    }
})

server.get('/seller/:id', (request, response) => {
    if (request.method === 'GET') {
        response.setHeader('Content-Type', 'application/json');
        productName = request.params['id']
        console.log('param',request.params)
        response.status(200).json(sellers()[productName])
    }
})

// server.get('/seller/Andorid', (request, response) => {
//     if (request.method === 'GET') {
//         response.status(200).json(sellers().Android)
//     }
// })

// server.get('/seller/MacBook', (request, response) => {
//     if (request.method === 'GET') {
//         response.status(200).json(sellers().MacBook)
//     }
// })

// server.get('/seller/chip', (request, response) => {
//     if (request.method === 'GET') {
//         response.status(200).json(sellers().chip)
//     }
// })

// server.get('/seller/HeadSet', (request, response) => {
//     if (request.method === 'GET') {
//         response.status(200).json(sellers().Headset)
//     }
// })