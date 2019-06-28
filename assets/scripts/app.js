'use strict'

const actEvents = require('./activities/events')

// const gameEvents = require('./game/events')
// const gameLogic = require('./game')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#get-activities').on('submit', actEvents.onGetActivities)
})
