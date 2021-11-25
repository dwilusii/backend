// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const path = require('path')

// Register plugins
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/', 
})
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public/css'),
  prefix: '/css', 
  decorateReply: false
})
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public/img'),
  prefix: '/img', 
  decorateReply: false
})
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public/js'),
  prefix: '/js', 
  decorateReply: false
})
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public/mapbox'),
  prefix: '/mapbox', 
  decorateReply: false
})

// Declare a route
fastify.get('/', async (request, reply) => {
  reply.sendFile('index.html'); // serving path.join(__dirname, 'public', 'index.html') directly
})

// Declare a route
fastify.get('/world', async (request, reply) => {
  return { hello: 'world'};
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()