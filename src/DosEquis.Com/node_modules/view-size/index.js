'use strict'

var window = require('global/window')

module.exports = function viewportSize () {
  return {
    x: window.innerWidth,
    y: window.innerHeight
  }
}
