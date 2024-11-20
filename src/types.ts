import type { InitData, validate } from '@telegram-apps/init-data-node'

declare module 'fastify' {
  export interface FastifyInstance {
    tma: {
      validate: typeof validate
    }
  }

  export interface FastifyRequest {
    tmaValidate: () => void
    tmaInitData?: InitData | null
  }
}

export interface FastifyTMArOptions {
  botToken: string
  /** @default 'tmaInitData'  */
  decoratorName?: string
}
