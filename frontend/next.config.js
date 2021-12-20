module.exports = {
  publicRuntimeConfig: {
    airtableApiKey: process.env.AIRTABLE_API_KEY
  },
  i18n: {
    locales: ['de', 'fr', 'it', 'en'],
    defaultLocale: 'de',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [`@svgr/webpack`],
    });

    return config;
  },
};
