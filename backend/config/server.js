module.exports = ({env}) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '69f4f97cb8af322c26dd6c40ae198a87'),
    },
    autoReload: {enabled: true}
  },
});
