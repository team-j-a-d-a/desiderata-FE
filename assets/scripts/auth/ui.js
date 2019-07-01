'use strict'

const store = require('../store.js')

const onSignUpSuccess = responseData => {
  // console.log('success', responseData)
  $('#message').removeClass('d-none')
  $('#message').text('You have successfully signed up!').addClass('alert-success')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  $('form').trigger('reset')
  $('#sign-up2').addClass('d-none')
}

const onSignUpFailure = responseData => {
  // console.log('failure', responseData)
  $('#message').removeClass('d-none')
  $('#message').text('Sign up failed').addClass('alert-danger')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  $('#idGetList').removeClass('d-none')
  $('#addActivityId').removeClass('d-none')
  $('#bucketList').removeClass('d-none')
  $('#SOCP').removeClass('d-none')
  // console.log('success', responseData)

  $('#message').removeClass('d-none')
  $('#message').text("You're in! Welcome!").addClass('alert-success')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  $('#getList').removeClass('d-none')
  $('#SUSI').addClass('d-none')
  $('form').trigger('reset')
  store.user = responseData.user

  // console.log('store is', store)

}

const onSignInFailure = responseData => {
  // console.log('failure', responseData)
  $('#message').removeClass('d-none')
  $('#message').text('Sign in failed. Try Again!').addClass('alert-danger')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = () => {
  $('#message').removeClass('d-none')
  $('#message').text('Changed password successfully!').addClass('alert-success')
  // $('#message').removeClass()
  $('#message').addClass('success')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  $('form').trigger('reset')
}

const onChangePasswordFailure = () => {
  // $('#message').removeClass('alert-success')
  $('#message').removeClass('d-none')
  $('#message').text('change password failed').addClass('alert-danger')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  // $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#idGetList').addClass('d-none')
  $('#addActivityId').addClass('d-none')
  $('#bucketList').addClass('d-none')
  // $('##bucketList').html('')
  $('#message').removeClass('alert-danger')
  $('#message').removeClass('d-none')
  $('#message').text('Goodbye for now 👋').addClass('alert-success')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  $('#SOCP').addClass('d-none')
  $('#SUSI').removeClass('d-none')
  // $('#change-pw2').addClass('d-none')
  // $('#createForHide').addClass('d-none')
  // $('#notification').addClass('d-none')
  // $('#sign-in2').removeClass('d-none')
  // $('#sign-up2').removeClass('d-none')
  // $('#endMessage').addClass('d-none')
}

const onSignOutFailure = () => {
  $('#message').text('sign out failed ').addClass('alert-danger')
  // $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
