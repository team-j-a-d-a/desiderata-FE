'use strict'

const desiderataTemplate = require('../templates/desiderata-listing.handlebars')

const onAddActivitySuccess = responseData => {
  $('#list').text('Add Activity success. Click Show All Activities to view')
  $('#list').removeClass()
  $('#list').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  // $('#change-pw').trigger('reset')
  // $('#add-tool').trigger('reset')
  // $('.update-toolForm').trigger('reset')
  // $('#add-appliance').trigger('reset')
  // $('.update-form').trigger('reset')
  // $('#content').hide()
}

const onAddActivityFailure = responseData => {
  $('#list').text('Add Activity failed.')
}

const onShowAllActivitySuccess = function (responseData) {
  // const activityJson = JSON.stringify(responseData)
  console.log(desiderataTemplate)
  const activityHtml = desiderataTemplate({ activities: responseData.activities })
  $('#list').text('Show Activities success')
  $('#list').removeClass()
  $('#list').addClass('success')
  $('#bucketList').html(activityHtml)
  console.log('success')
}

const onShowAllActivityFailure = responseData => {
  console.log('fail')
  // $('#list').text('Show Activity failed.')
}

const onDestroyActivitySuccess = responseData => {
  $('#list').text('Destroy Activity success. Click Show All Activities to see')
  $('#list').removeClass()
  $('#list').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const onDestroyActivityFailure = responseData => {
  $('#list').text('Destroy Activity failed.')
}

const onUpdateActivitySuccess = responseData => {
  $('#list').text('Update Activity success. Click Show All Activities to see')
  $('#list').removeClass()
  $('#list').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const onUpdatedActivityFailure = responseData => {
  $('#list').text('Add Activity failed.')
}

module.exports = {
  onAddActivitySuccess,
  onAddActivityFailure,
  onShowAllActivitySuccess,
  onShowAllActivityFailure,
  onDestroyActivitySuccess,
  onDestroyActivityFailure,
  onUpdateActivitySuccess,
  onUpdatedActivityFailure
}
