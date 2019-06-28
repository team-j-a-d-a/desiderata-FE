'use strict'

const desiderataTemplate = require('../templates/desiderata-listing.handlebars')

const onCreateActivitySuccess = responseData => {
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

const onShowAllActivitySuccess = function (responseData) {
  const activityHtml = desiderataTemplate({ activities: responseData.activities })
  $('#list').text('Show Activities success')
  $('#list').removeClass()
  $('#list').addClass('success')
  // $('#change-pw').trigger('reset')
  // $('#add-tool').trigger('reset')
  // $('.update-toolForm').trigger('reset')
  // $('#add-appliance').trigger('reset')
  // $('.update-form').trigger('reset')
  // $('#content').show()
  $('.d-none').html(activityHtml)
}

const onDestroyActivitySuccess = responseData => {
  $('#list').text('Destroy Activity success. Click Show All Activities to see')
  $('#list').removeClass()
  $('#list').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

const onUpdateActivitySuccess = responseData => {
  $('#list').text('Update Activity success. Click Show All Activities to see')
  $('#list').removeClass()
  $('#list').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

module.exports = {
  onCreateActivitySuccess,
  onShowAllActivitySuccess,
  onDestroyActivitySuccess,
  onUpdateActivitySuccess
}
