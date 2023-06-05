import fastify from 'fastify'

const app = fastify() // Inicia uma aplicação

// ROTAS

app.get('/hello', () => {
  return 'Hello'
})

// API RESTFUL

app
  .listen({
    // Faz o servidor rodar nessa porta e como é uma promise, tem essa arrowfunction pra avisar quando está pronto, já que pode demorar
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
