module.exports = function (sails) {
  return async function () {
    const { Nuxt, Builder } = require('nuxt');

    const config = sails.config.nuxt;

    const nuxt = new Nuxt(config);

    if (nuxt.options.dev) {
      await new Builder(nuxt).build();
    }

    sails.nuxt = nuxt;
  };
};
