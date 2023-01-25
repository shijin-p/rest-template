/**
 * Small utilty for generating a cryptographically strong random string,
 * that can be used as key for signing cookies.
 */
const {
  generateKey
} = await import('node:crypto')

generateKey('hmac', { length: 160 }, (err, key) => {
  if (err) throw err
  console.log(key.export().toString('hex'))
})
