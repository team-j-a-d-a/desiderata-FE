'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const activityEvents = require('./actions/events.js')

const authEvents = require('./auth/events')
// const activeEvents = require('./activities/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#create').on('submit', activityEvents.onAddActivity)
  // $('#getList').on('click', activityEvents.onShowAllActivity)
  $('#getList').on('click', function (event) {
    activityEvents.onShowAllActivity(event, 'Here are your activities')
  })
  $('#bucketList').on('submit', '.update-activity', activityEvents.onUpdateActivity)
  // $('#create').on('submit', activityEvents.onCreateActivity)
  $('#bucketList').on('click', '.remove-activity', activityEvents.onDestroyActivity)
  // $('#get-activities').on('submit', activeEvents.onGetActivities)
})
