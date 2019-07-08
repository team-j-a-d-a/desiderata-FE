const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddActivity = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // console.log('form data is ', formData) // REMINDER TO REMOVE
  api.postActivity(formData)
    // .then(ui.onAddActivitySuccess)
    .then(function (responseData) { onShowAllActivity(event, 'Activity successfully created') })
    .catch(ui.onAddActivityFailure)
}

const onShowAllActivity = (event, txt) => {
  event.preventDefault()
  // const form = event.target
  // const formData = getFormFields(form)
  api.getActivity()
    // .then(ui.onShowAllActivitySuccess)
    .then(data => { ui.onShowAllActivitySuccess(data, txt) })
    .catch(ui.onShowAllActivityFailure)
}

const onUpdateActivity = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const form = event.target
  const formData = getFormFields(form)
  // const messageCheck = 'update'
  api.patchActivity(formData, id)
    // .then(reShowLabs => {
    //   onShowLabs(event, messageCheck)
    // })
    // .then(ui.onUpdateActivitySuccess)
    .then(function (responseData) { onShowAllActivity(event, 'Activity successfully updated') })
    .catch(ui.onUpdateActivityFailure)
}

const onDestroyActivity = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  // const messageCheck = 'delete'
  api.delActivity(id)
    // .then(ui.onDestroyActivitySuccess)
    .then(function (responseData) { onShowAllActivity(event, 'Activity successfully deleted') })
    // .then(reShowLabs => {
    //   onShowLabs(event, messageCheck)
    // })
    .catch(ui.onDestroyActivityFailure)
}

module.exports = {
  onAddActivity,
  onShowAllActivity,
  onDestroyActivity,
  onUpdateActivity
}
