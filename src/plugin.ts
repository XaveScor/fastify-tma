import type { FastifyPluginAsync, FastifyRequest } from 'fastify'
import type { FastifyTMArOptions } from './types'
import { parse, validate } from '@telegram-apps/init-data-node'
import fp from 'fastify-plugin'
import { InvalidAuthDataError, InvalidAuthTypeError, MissingBotTokenError } from './errors'

const plugin: FastifyPluginAsync<FastifyTMArOptions> = async (
  fastify,
  options,
) => {
  const { botToken, decoratorName = 'tmaInitData' } = options

  if (!botToken) {
    throw new MissingBotTokenError()
  }

  const tmaDecorator = {
    validate,
  }

  fastify.decorate('tma', tmaDecorator)

  fastify.decorateRequest(decoratorName, null)
  fastify.decorateRequest('tmaValidate', requestValidate)

  function requestValidate(this: FastifyRequest) {
    const [authType, authData = ''] = (this.headers.authorization || '').split(' ')

    if (authType === 'tma') {
      try {
        fastify.tma.validate(authData, botToken, {
          expiresIn: 3600,
        })

        this.tmaInitData = parse(authData)
      }
      catch (e) {
        throw new InvalidAuthDataError({ cause: e })
      }
    }
    else {
      throw new InvalidAuthTypeError()
    }
  }
}

export const fastifyTMA = fp(plugin, {
  fastify: '5.x',
  name: 'fastify-tma',
})
