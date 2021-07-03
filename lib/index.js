/**
 * Dependencies
 */

/**
 * Sails Nuxt hook
 *
 * @param  {SailsApp} sails
 * @return {Dictionary} [hook definition]
 */
module.exports = function (sails) {
  return {
    /**
     * defaults
     *
     * The implicit configuration defaults merged into `sails.config` by this hook.
     *
     * @type {Dictionary}
     */
    defaults: {
      nuxt: require('./nuxt.config'),
    },

    /**
     * configure()
     *
     * @type {Function}
     */
    configure: function () {},

    initialize: require('./initialize')(sails),

    routes: require('./routes')(sails),
  };
};
