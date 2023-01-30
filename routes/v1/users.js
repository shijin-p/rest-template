import S from 'fluent-json-schema'

// Exporting a constant named `autoPrefix` will tell
// to `fastify-autoload` that this plugin must be loaded
// with the prefix option. In this way every route declared
// inside this plugin and its children will have the prefix
// as part of the path.
export const autoPrefix = 'users'

export default async function getAll (fastify, opts) {
  fastify.route({
    method: 'POST',
    path: '/login',
    handler: login,
    schema: {
      response: {
        200: S.object()
          .prop('status', S.string())
      }
    }
  })

  fastify.route({
    method: 'GET',
    path: '/',
    handler: getAll,
    schema: {
      response: {
        200: S.object()
          .prop('status', S.string())
          .prop('name', S.string())
      }
    }
  })

  async function login (req, reply) {
    // const asd = await this.mongo.db.collection('users').findOne()
    return { status: 'ok' }
  }

  async function getAll (req, reply) {
    const { name } = await this.mongo.db.collection('users').findOne()
    return { status: 'ok - get all users', name }
  }
}
