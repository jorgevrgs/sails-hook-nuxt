/**
 * Dependencies
 */

/**
 * Sails Nuxt hook
 *
 * @param  {SailsApp} sails
 * @return {Dictionary} [hook definition]
 */
module.exports = function(sails) {
  return {
    /**
     * defaults
     *
     * The implicit configuration defaults merged into `sails.config` by this hook.
     *
     * @type {Dictionary}
     */
    defaults: {
      nuxt: {
        srcDir: 'client',

        // Global page headers (https://go.nuxtjs.dev/config-head)
        head: {
          titleTemplate: '%s - web',
          title: 'web',
          meta: [
            { charset: 'utf-8' },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
          ],
          link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },

        // Global CSS (https://go.nuxtjs.dev/config-css)
        css: [],

        // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
        plugins: [],

        // Auto import components (https://go.nuxtjs.dev/config-components)
        // components: true,

        // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
        buildModules: [
          // https://go.nuxtjs.dev/eslint
          // '@nuxtjs/eslint-module',
          // https://go.nuxtjs.dev/stylelint
          // '@nuxtjs/stylelint-module',
          // https://go.nuxtjs.dev/vuetify
          // '@nuxtjs/vuetify',
        ],

        // Modules (https://go.nuxtjs.dev/config-modules)
        modules: [
          // https://go.nuxtjs.dev/axios
          // '@nuxtjs/axios',
        ],

        // Axios module configuration (https://go.nuxtjs.dev/config-axios)
        axios: {},

        // Build Configuration (https://go.nuxtjs.dev/config-build)
        build: {},
      },
    },

    /**
     * configure()
     *
     * @type {Function}
     */
    configure: function() {},

    initialize: async function() {
      const { Nuxt, Builder } = require('nuxt');

      const config = sails.config.nuxt;

      const nuxt = new Nuxt(config);

      if (nuxt.options.dev) {
        await new Builder(nuxt).build();
      }

      sails.nuxt = nuxt;
    },

    routes: {
      after: {
        'GET /*': {
          fn: async function(req, res, next) {
            sails.nuxt.render(req, res, next);
          },
        },
      },
    },
  };
};
