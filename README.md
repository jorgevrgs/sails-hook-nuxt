# sails-hook-nuxt - Nuxt for Sails.js v1

## Installation

```
npm i sails-hook-nuxt
```

![npm](https://img.shields.io/npm/v/sails-hook-nuxt?style=for-the-badge)

[![Node.js Package](https://github.com/jorgevrgs/sails-hook-nuxt/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/jorgevrgs/sails-hook-nuxt/actions/workflows/npm-publish.yml)

## How to use

- Create a config file `config/nuxt.js` with content `module.exports.nuxt = {}` with the content of your `nuxt.config.js` file. See [Config section](#config)
- Create a folder `client` in your Sails app path.
- Use as usual to set there the Nuxt files, i.e. `client/pages/index.vue`
- Run the Sails app with `sails lift`.
- Open your server in the browser `http://localhost:1337`
- To avoid building Nuxt for other scripts disable the hook setting at `.sailsrc`with the value `"{ hooks: {"nuxt": false} }` or the env variable, i.e. `sails_hooks__nuxt=false sails run rebuild-cloud-sdk`.

Check the `example` folder for more info.

## Config

### Default

The default configuration sets only the value of `srcDir` to `client/` folder.

```js
module.exports = {
  srcDir: 'client'
}
```

### Sails config

Create a config/nuxt file:

```js
module.exports.nuxt = {
  // ... nuxt.config.js content
};
```

### Nuxt.config.js

Alternatively, to preserve the nuxt.config.js file:

Create a nuxt.config.js file

```js
// nuxt.config.js
module.exports = {
  // ... confing content
};
```

```js
// config/nuxt.js
module.exports.nuxt = require('../nuxt.config');
```

## Eslint

Configure your eslint file in the cliente folder. Check example folder for more information.

```
npm i -D @nuxtjs/eslint-config
```

Create a file `client/.eslintrc`

```
{
  "extends": ["@nuxtjs"]
}
```
