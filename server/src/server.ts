import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify() // Inicia uma aplicação
const prisma = new PrismaClient()

// ROTAS

app.get('/users', async () => {

  const users = await prisma.user.findMany()
  return users
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
