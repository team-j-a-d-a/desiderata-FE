'use strict'

const desiderataTemplate = require('../templates/appliance-listing.handlebars')

const onCreateActivitySuccess = responseData => {
  $('#message').text('Add Activity success. Click Show All Activities to view')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#add-tool').trigger('reset')
  $('.update-toolForm').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
  $('#content').hide()
}

const onShowAllActivitiesSuccess = function (data, responseData) {
  const activityHtml = desiderataTemplate({ activities: responseData.activities })
  $('#message').text('Show Activities success')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-pw').trigger('reset')
  $('#add-tool').trigger('reset')
  $('.update-toolForm').trigger('reset')
  $('#add-appliance').trigger('reset')
  $('.update-form').trigger('reset')
  $('#content').show()
  $('#content').html(activityHtml)
}

module.exports = {
  onCreateActivitySuccess,
  onShowAllActivitiesSuccess
}
