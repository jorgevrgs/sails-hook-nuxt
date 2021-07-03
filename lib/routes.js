module.exports = function (sails) {
  return {
    after: {
      'GET /*': {
        fn: function (req, res, next) {
          sails.nuxt.render(req, res, next);
        },
      },
    },
  };
};
