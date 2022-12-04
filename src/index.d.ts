import { Dispatcher } from 'undici'

declare function koreanbots({
  token,
  id,
  servers,
  shards,
}: {
  token: string
  id: string
  servers: number
  shards?: number
}): Promise<Dispatcher.ResponseData>
