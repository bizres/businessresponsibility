module.exports = {
  publicRuntimeConfig: {
    airtableApiKey: process.env.AIRTABLE_API_KEY
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [`@svgr/webpack`],
    });

    return config;
  },
};
