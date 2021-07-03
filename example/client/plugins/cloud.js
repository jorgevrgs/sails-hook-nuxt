import { Cloud } from 'parasails'
import { extend } from 'lodash'
import data from './cloud.setup'

export default ({ nuxtState }, inject) => {
  /**
   * Configure Cloud SDK
   *
   * Install dependencies:
   *   - parasails
   *   - jquery
   *   - bowser
   *   - sails.io.js
   *   - socket.io-client
   *
   * @example await Cloud.login.with({emailAddress: 'admin@example.com', password: 'abc123'})
   */
  Cloud.setup(
    extend(data, {
      headers: {
        'x-csrf-token': nuxtState.csrf,
      },
    })
  )

  // Allow to use await this.$cloud.login.with(...args)
  inject('cloud', Cloud)
}
