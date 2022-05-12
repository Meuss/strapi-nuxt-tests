module.exports = ({ env }) => ({
  navigation: {
    enabled: true,
    config: {
      additionalFields: ['audience'],
      contentTypes: ['api::page.page'],
      contentTypesNameFields: {
        'api::page.page': ['title']
      },
      allowedLevels: 2
    }
  }
})
