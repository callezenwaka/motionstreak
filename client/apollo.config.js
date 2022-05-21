module.exports = {
  client: {
    service: {
      name: 'motionstreak',
      // URL to the GraphQL API
      url: 'http://localhost:4001/api',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
      'src/**/*.ts',
    ],
  },
}