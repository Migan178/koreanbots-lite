'use-strict'

const { request } = require('undici')

const URL = 'https://koreanbots.dev/api/v2/bots/'

/**
 *
 * @param  {{token: string; id: string; servers: number; shards?: number;}}
 */
exports.koreanbots = async ({ token, id, servers, shards }) => {
  const a = await request(`${URL}${id}/stats`, {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ servers: servers, shards: shards }),
  })
  console.log(await a.body.json())
  return a
}
