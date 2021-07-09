export default {
  nuxtServerInit ({ commit }, { req, beforeNuxtRender }) {
    if (process.server) {
      beforeNuxtRender(({ nuxtState }) => {
        // Get csrf token
        const csrf = req.csrfToken()

        // Available as window.__NUXT__.csrf
        nuxtState.csrf = csrf

        // Require define mutations
        commit('SET_CSRF', csrf)
      })
    }
  }
}
