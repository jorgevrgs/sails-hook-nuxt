/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 * > Modify the default destination from assets/js to client/plugins
 */

export default {
  /* eslint-disable */
  methods: {
    grantCsrfToken: { verb: 'GET', url: '/api/v1/security/csrf-token' },
    sendEmail: {
      verb: 'POST',
      url: '/api/v1/emails/send',
      args: ['emailAddress', 'subject', 'name', 'message'],
    },
    signup: {
      verb: 'POST',
      url: '/api/v1/entrance/signup',
      args: ['emailAddress', 'password', 'fullName'],
    },
    login: {
      verb: 'PUT',
      url: '/api/v1/entrance/login',
      args: ['emailAddress', 'password', 'rememberMe'],
    },
    confirmEmail: {
      verb: 'PUT',
      url: '/api/v1/entrance/confirm-email',
      args: ['token'],
    },
    sendPasswordRecoveryEmail: {
      verb: 'POST',
      url: '/api/v1/entrance/send-password-recovery-email',
      args: ['emailAddress'],
    },
    updatePasswordAndLogin: {
      verb: 'POST',
      url: '/api/v1/entrance/update-password-and-login',
      args: ['password', 'token'],
    },
    updatePassword: {
      verb: 'PUT',
      url: '/api/v1/account/update-password',
      args: ['oldPassword', 'newPassword', 'confirmPassword'],
    },
    updateProfile: {
      verb: 'PUT',
      url: '/api/v1/account/update-profile',
      args: ['firstName', 'lastName', 'emailAddress'],
    },
    updateBillingCard: {
      verb: 'PUT',
      url: '/api/v1/account/update-billing-card',
      args: [
        'stripeToken',
        'billingCardLast4',
        'billingCardBrand',
        'billingCardExpMonth',
        'billingCardExpYear',
      ],
    },
    logout: { verb: 'GET', url: '/api/v1/account/logout', args: [] },
  },
  /* eslint-enable */
}
