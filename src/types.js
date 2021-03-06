'use strict'

var ccTypes = require('creditcards-types')
var camel = require('camel-case')
var extend = require('xtend')

module.exports = extend(ccTypes, {
  get: function getTypeByName (name) {
    return ccTypes.types[camel(name)]
  }
})
