module.exports = ({ env }) => ({
  ckeditor: true,
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET')
      },
      actionOptions: {
        upload: {},
        delete: {}
      }
    }
  },
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
