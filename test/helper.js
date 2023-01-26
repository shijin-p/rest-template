import Fastify from 'fastify'
import fp from 'fastify-plugin'
import App from '../app.js'

// We need to load the env configuration
process.env.NODE_ENV = 'development'

export async function build (t, opts = {}) {
  const app = Fastify()

  await app.register(fp(App), { testing: true, ...opts })

  t.teardown(app.close.bind(app))

  return app
}
