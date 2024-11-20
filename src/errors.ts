import createError from '@fastify/error'

export const MissingBotTokenError = createError(
  'FST_ERR_TMA_MISSING_BOT_TOKEN',
  'Missing bot token',
)
export const InvalidAuthDataError = createError(
  'FST_ERR_TMA_INVALID_AUTH_DATA',
  'Invalid auth data',
)
export const InvalidAuthTypeError = createError(
  'FST_ERR_TMA_INVALID_AUTH_TYPE',
  'Invalid authorization header',
)
