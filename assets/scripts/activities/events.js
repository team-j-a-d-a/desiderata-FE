'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onCreateActivity = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createActivity(formData)
    .then(ui.onCreateActivitySuccess)
    .catch(ui.onCreateActivityFailure)
}

const onGetActivities = function (event) {
  event.preventDefault()
  api.getActivities()
    .then(ui.onGetActivitiesSuccess)
    .catch(ui.onError)
}

const onUpdateActivity = function (event) {
  const id = $(event.target).closest('section').data('id')

  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updateActivity(id, formData)
    .then(function (responseData) {
      onGetActivities(event)
    })
    .catch(ui.onError)
}
// const onDeleteActivity = (event) => {
//   event.preventDefault()
//   const activityId = $(event.target).closest('section').data('id')
//   api.deleteActivity(activityId)
//     .then(() => onGetActivities(event))
//     .catch(ui.failure)
// }
const onDeleteActivity = (event) => {
  const id = $(event.target).data('id')
  event.preventDefault()
  api.deleteActivity(id)
    .then(() => {
      api.getActivities()
        .then(ui.onDeleteActivitySuccess)
    })
    .catch(ui.failure)
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// const onGetActivities = (event) => {
//   event.preventDefault()
//   api.getActivities()
//     .then(ui.getBooksSuccess)
//     .catch(ui.failure)
// }

// const onClearActivities = (event) => {
//   event.preventDefault()
//   ui.clearBooks()
// }

// const onDeleteActivity = (event) => {
//   const id = $(event.target).data('id')
//   event.preventDefault()
//   api.deleteActivity(id)
//     .then(function (data) {
//       onGetActivities(event)
//     })
//     .catch(ui.failure)
// }

const addHandlers = () => {
  $('#getActivitiesButton').on('click', onGetActivities)
  $('#content').on('click', '.delete-activity', onDeleteActivity)
  $('#content').on('click', '.update-activity', function (event) {
    $(event.target).closest('section').find('.update-activity-form').show()
  })
  $('#content').on('submit', '.update-activity-form', onUpdateActivity)
}

// const dbHandlers = () => {
//   $('#getGames').on('click', onGetGames)
//   $('#createGame').on('submit', onCreateGame)
//   $('.btnupdate').on('click', onShowUpdateGame)
//   $('.content').on('click', '.btnupdate', onShowUpdateGame)
//   $('.content').on('click', '.delete-game', onDeleteGame)
//   $('.content').on('submit', '#updateGame', onUpdateGame)
// }

module.exports = {
  addHandlers,
  onGetActivities,
  onUpdateActivity,
  onDeleteActivity,
  onSignUp,
  onSignIn,
  onChangePassword,
  onCreateActivity,
  onSignOut
}
