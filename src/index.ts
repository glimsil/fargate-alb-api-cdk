import fastify from 'fastify'

const server = fastify()

const { ADDRESS = 'localhost', PORT = '80' } = process.env;

server.get('/', async (request, reply) => {
  return { message: 'Hello world!' }
})

server.listen({ host: ADDRESS, port: parseInt(PORT, 10) }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})