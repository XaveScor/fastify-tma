import createError from '@fastify/error'

export const MissingBotTokenError = createError(
  'FST_ERR_TMA_MISSING_BOT_TOKEN',
  'Missing bot token',
)
export const InvalidAuthData = createError(
  'FST_ERR_TMA_INVALID_AUTH_DATA',
  'Invalid auth data',
)
export const InvalidAuthType = createError(
  'FST_ERR_TMA_INVALID_AUTH_TYPE',
  'Invalid authorization header',
)
