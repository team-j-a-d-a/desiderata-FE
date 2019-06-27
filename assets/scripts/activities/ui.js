'use strict'
const showActivitiesTemplate = require('../templates/activity-listing.handlebars')

const store = require('../store')

const onSignUpSuccess = responseData => {
  // console.log('success', responseData)
  $('#create-activity-message').text('Signed up successfully!')
  $('#create-activity-message').removeClass()
  $('#create-activity-message').addClass('success')
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#create-activity-message').html('Please sign in to create an activity.')
  setTimeout(() => {
    $('#create-activity-message').html('')
    $('#create-activity-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
  $('#sign-up').hide()
}

const onSignUpFailure = responseData => {
  // console.log('failure', responseData)
  $('#create-activity-message').text('Sign up was not successful. Please try again.')
  $('#create-activity-message').removeClass()
  $('#create-activity-message').addClass('failure')
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  // console.log('success', responseData)
  $('#create-activity-message').text('Signed in successfully!')
  $('#create-activity-message').removeClass()
  $('#create-activity-message').addClass('success')
  $('.nav-buttons').removeClass('hide')
  // $('#game-board').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#activity-create').show()
  $('#sign-out').show()
  $('#change-password').show()
  $('#create-activity').show()
  $('#activity-create').show()
  $('#create-activity-message').html('You are in! Create a new activity!')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#create-activity-message').html('')
    $('#create-activity-message').removeClass('success')
  }, 5000)

  store.user = responseData.user
  $('form').trigger('reset')
  // console.log('store is', store)
}

const onSignInFailure = responseData => {
  // console.log('failure', responseData)
  $('#create-activity-message').text('Sign in failed. Please check your password and email.')
  $('#create-activity-message').removeClass()
  $('#create-activity-message').addClass('failure')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = () => {
  $('#create-activity-message').html('Password Changed Successfully!')
  $('#create-activity-message').removeClass()
  $('#create-activity-message').addClass('success')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#create-activity-message').html('')
    $('#create-activity-message').removeClass('success')
  }, 5000)
}

const onChangePasswordFailure = () => {
  $('#create-activity-message').text('Password change failed! Please try again.')
  $('#create-activity-message').removeClass()
  $('#create-activity-message').addClass('failure')
  $('form').trigger('reset')
}

const onCreateActivitySuccess = function (responseData) {
  store.responseData = responseData
  // console.log(store.game)
  // add success message to content
  $('#create-activity-message').html('Sports activity has been created!')
  $('#create-activity-message').addClass('success')
  $('#getActivitiesButton').show()
  $('.handlebars').removeClass('hide')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#create-activity-message').html('')
    $('#create-activity-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')

  $('#get-activities').show()
}
const onSignOutSuccess = () => {
  $('#create-activity-message').text('Signed out successfully!')
  $('#create-activity-message').removeClass()
  $('#create-activity-message').addClass('success')
  $('#change-password').hide()
  $('#create-activity').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#get-activities').hide()
  $('.btn-danger').hide()
  $('.nav-buttons').hide()
  $('form').trigger('reset')
  $('.handlebars').addClass('hide')
}

const onSignOutFailure = () => {
  $('#create-activity-message').text('Try signing out again!')
  $('#create-activity-message').removeClass()
  $('#create-activity-message').addClass('failure')
  $('form').trigger('reset')
}

const onGetActivitiesSuccess = responseData => {
  $('#create-activity-message').html('Success!')
  // console.log(responseData.activities)
  const showActivitiesHtml = showActivitiesTemplate({ activities: responseData.activities })
  $('.content').html(showActivitiesHtml)
  $('#update-activity-form').removeClass('hide')
  $('.handlebars').removeClass('hide')
  setTimeout(() => {
    $('#create-activity-message').html('')
    $('#create-activity-message').removeClass('success')
  }, 5000)
}

// const clearActivities = () => {
//   $('.content').empty()
// }

const failure = (error) => {
  console.error(error)
}

const onUpdateActivitySuccess = responseData => {
  const showActivitiesHtml = showActivitiesTemplate({ activities: responseData.activities })
  $('#create-activity-message').text('Activity has been updated!')
  $('.content').html(showActivitiesHtml)
}

const onDeleteActivitySuccess = function (responseData) {
  const showActivitiesHtml = showActivitiesTemplate({ activities: responseData.activities })
  $('.content').html(showActivitiesHtml)
  $('#create-activity-message').html('Activity deleted')

  $('#create-activity-message').addClass('success')
  setTimeout(() => {
    $('#create-activity-message').html('')
    $('#create-activity-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onCreateActivitySuccess,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onGetActivitiesSuccess,
  onDeleteActivitySuccess,
  onUpdateActivitySuccess,
  // clearActivities,
  failure
}
