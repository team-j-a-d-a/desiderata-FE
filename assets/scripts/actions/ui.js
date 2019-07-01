'use strict'

const desiderataTemplate = require('../templates/desiderata-listing.handlebars')

const onAddActivitySuccess = responseData => {
  $('#message').removeClass('d-none')
  $('#message').removeClass('alert-danger')
  $('#message').addClass('alert-success')
  $('#message').text('Add Activity success. Click Show All Activities to view')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  $('#create').trigger('reset')
  $('#change-pw').trigger('reset')
  $('.update-activity').trigger('reset')
}

const onAddActivityFailure = responseData => {
  $('#message').removeClass('d-none')
  $('#message').removeClass('alert-success')
  $('#message').addClass('alert-danger')
  $('#message').text('Add Activity failed.')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  $('#create').trigger('reset')
  $('#change-pw').trigger('reset')
  $('.update-activity').trigger('reset')
}

const onShowAllActivitySuccess = function (responseData) {
  // const activityJson = JSON.stringify(responseData)
  const activityHtml = desiderataTemplate({ activities: responseData.activities })
  $('#message').removeClass('d-none')
  $('#message').removeClass('alert-danger')
  $('#message').addClass('success')
  $('#message').text('Showing all activities')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  $('#create').trigger('reset')
  $('#change-pw').trigger('reset')
  $('.update-activity').trigger('reset')
  $('#bucketList').html(activityHtml)
  // console.log('success')
}

const onShowAllActivityFailure = responseData => {
  // console.log('fail')
  $('#message').removeClass('d-none')
  $('#message').removeClass('alert-success')
  $('#message').addClass('alert-danger')
  $('#message').text('Show Activity failed.')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  $('#create').trigger('reset')
  $('#change-pw').trigger('reset')
  $('.update-activity').trigger('reset')
}

const onDestroyActivitySuccess = responseData => {
  $('#message').removeClass('d-none')
  $('#message').removeClass('alert-danger')
  $('#message').addClass('alert-success')
  $('#message').text('Delete Activity success. Click Show All Activities to view')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  $('#create').trigger('reset')
  $('#change-pw').trigger('reset')
  $('.update-activity').trigger('reset')
}

const onDestroyActivityFailure = responseData => {
  $('#message').removeClass('d-none')
  $('#message').removeClass('alert-success')
  $('#message').addClass('alert-danger')
  $('#message').text('Delete Activity failed.')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  $('#create').trigger('reset')
  $('#change-pw').trigger('reset')
  $('.update-activity').trigger('reset')
}

const onUpdateActivitySuccess = responseData => {
  $('#message').removeClass('d-none')
  $('#message').removeClass('alert-danger')
  $('#message').addClass('alert-success')
  $('#message').text('Update Activity success. Click Show All Activities to view')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  $('#create').trigger('reset')
  $('#change-pw').trigger('reset')
  $('.update-activity').trigger('reset')
}

const onUpdatedActivityFailure = responseData => {
  $('#message').removeClass('d-none')
  $('#message').removeClass('alert-success')
  $('#message').addClass('alert-danger')
  $('#message').text('Update Activity failed.')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  $('#create').trigger('reset')
  $('#change-pw').trigger('reset')
  $('.update-activity').trigger('reset')
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
