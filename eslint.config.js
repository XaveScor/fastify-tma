import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    overridesTypeAware: {
      'ts/no-floating-promises': ['error', {
        allowForKnownSafePromises: [
          { from: 'package', name: 'FastifyInstance', package: 'fastify' },
          { from: 'package', name: 'FastifyReply', package: 'fastify' },
          { from: 'package', name: 'SafePromiseLike', package: 'fastify' },
        ],
      }],
    },
  },
})
