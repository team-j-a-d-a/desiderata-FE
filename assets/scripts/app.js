'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const activityEvents = require('./actions/events.js')

const authEvents = require('./auth/events')
const activeEvents = require('./activities/events')

$(() => {
  $('#create').on('submit', activeEvents.onAddActivity)
  $('#getList').on('submit', activityEvents.onShowAllActivities)
  $('.d-none').on('submit', '.update-activity', activityEvents.onUpdateActivity)
  $('#create').on('submit', activityEvents.onCreateActivity)
  $('.d-none').on('click', '.remove-activity', activityEvents.onDestroyActivity)
})
