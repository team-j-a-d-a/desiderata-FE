'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const activityEvents = require('./actions/events.js')

$(() => {
  // your JS code goes here
  $('#getList').on('submit', activityEvents.onShowAllActivities)
  $('.d-none').on('submit', '.update-activity', activityEvents.onUpdateActivity)
  $('#create').on('submit', activityEvents.onCreateActivity)
  $('.d-none').on('click', '.remove-activity', activityEvents.onDestroyActivity)
// $('.#bucketList').on('click', '.clearLabsButton', searchEvents.onClearLabs)
})
