require = require('esm')(module, {
  'cjs': {
    vars: true,
    extensions: true,
    namedExports : true,
    interop : true,
    paths : true,
    cache: true
  },
  'await': true
})

module.exports = require('./app').default
