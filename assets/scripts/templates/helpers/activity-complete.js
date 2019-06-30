// helper file to create conditional if statment for list status
// to be created later using resource: https://code-maven.com/handlebars-conditionals
'use strict'

const formData = require('../../actions/events.js')
const activity = require('../../templates.desiderata-listing.handlebars')

const formatActivityDone = function (formData) {
  if activity.id === false) {
    return {{activity[incomplete]}}
  } else {
    return [activity[complete]
  }
}

// const formData = require('../../actions.events.js')
//
// const formatActivityDone = function (formData) {
//   if (formData.actvity.completed === false) {
//     return activity.incomplete
//   } else {
//     return activity.complete
//   }
// }
//
module.exports = formatActivityDone
