'use strict'

const actEvents = require('./activities/events')

// const gameEvents = require('./game/events')
// const gameLogic = require('./game')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // $('#game-board').hide()
  $('#sign-up').on('submit', actEvents.onSignUp)
  $('#sign-in').on('submit', actEvents.onSignIn)
  $('#change-password').on('submit', actEvents.onChangePassword)
  $('#create-activity').on('submit', actEvents.onCreateActivity)
  $('#sign-out').on('submit', actEvents.onSignOut)
  $('#get-activities').on('submit', actEvents.onGetActivities)

  actEvents.addHandlers()
})
