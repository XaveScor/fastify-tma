import { fastifyTMA } from 'fastify-tma'

export default async function (fastify, _opts) {
  await fastify.register((instance, _, done) => {
    instance.register(fastifyTMA, {
      botToken: '123',
    })

    instance.addHook('onRequest', req => req.tmaValidate())

    instance.get('/tma', async () => {
      return { hello: 'world' }
    })

    done()
  })

  fastify.get('/', async () => {
    return { hello: 'world' }
  })
}
