# sails-hook-nuxt - Nuxt for Sails.js v1

## Installation

```
npm i sails-hook-nuxt
```

![David](https://img.shields.io/david/jorgevrgs/sails-hook-nuxt?style=for-the-badge)

![npm](https://img.shields.io/npm/v/sails-hook-nuxt?style=for-the-badge)

## How to use

WARNING: IN DEVELOPMENT, NOT FOR PRODUCTION READY

- Create a config file `config/nuxt.js` with content `module.exports.nuxt = {}` with the content of your `nuxt.config.js` file.
- Create a folder `client` in your Sails app path.
- Use as usual to set there the Nuxt files, i.e. `client/pages/index.vue`
- Open your server in the browser `http://localhost:1337`
- To disable the hook set at .sailsrc the value `"{ hooks: {"nuxt": false} }`
