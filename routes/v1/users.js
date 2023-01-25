
import S from 'fluent-json-schema'

export default async function status (fastify, opts) {
    // There are two ways of declaring routes in Fastify,
    // the "full" declaration and the "shorthand" declaration.
    // The "shorthand" declaration is very similar to Express.
    // Both can do the same things, there are no differences.
    // I prefer the "full" declaration as I like to be explicit.
    // See https://www.fastify.io/docs/latest/Routes/.
    fastify.route({
      method: 'GET',
      path: '/status',
      handler: onStatus,
      // Fastify does an extensive use of JSON schemas.
      // It uses them for validating external input
      // (thanks to https://github.com/ajv-validator/ajv)
      // or improving the serialization speed of responses
      // (thanks to https://github.com/fastify/fast-json-stringify).
      // Since writing plain JSON schema is rather boring
      // and error prone, we have created `fluent-json-schema`,
      // a nice library to help you maintaining JSON schemas.
      // Another reason to write your route definition with
      // the schema configured, is that you will get automatic
      // documentation with https://github.com/fastify/fastify-swagger
      schema: {
        // The description field will be used by the swagger
        // generator to describe the route.
        description: 'Returns status and version of the application',
        response: {
          // You can define different schemas
          // based on the response status code.
          // Be aware that if you are using a response
          // schema and you don't define property, this property
          // will not be serialized in the final response, even if you
          // are returing it in your route handler.
          200: S.object()
            .prop('status', S.string())
            .prop('version', S.string())
        }
      }
    })
  
    async function onStatus (req, reply) {
      return { status: 'ok' }
    }
  }