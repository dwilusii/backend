// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });

// Register plugins
fastify.register(require('fastify-static'), require('./config/static').public);
fastify.register(
  require('fastify-static'),
  require('./config/static').publicCss  
);
fastify.register(
  require('fastify-static'),
  require('./config/static').publicImg
);
fastify.register(
  require('fastify-static'),
  require('./config/static').publicJs
);
fastify.register(
  require('fastify-static'),
  require('./config/static').publicMapbox
);

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
    await fastify.listen(5000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()