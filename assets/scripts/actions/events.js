const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateActivity = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.postActivity(formData)
    .then(ui.onCreateActivitySuccess)
    .catch(ui.onCreateActivityFailure)
}

const onShowAllActivity = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.getActivity(formData)
    .then(ui.onShowAllActivitySuccess)
    // .then(data => {
    //   ui.onShowAllActivitiesSuccess(messageCheck, data)
    // })
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
    .then(ui.onUpdateActivitySuccess)
    .catch(ui.onUpdateActivityFailure)
}

const onDestroyActivity = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  // const messageCheck = 'delete'
  api.delLabs(id)
    .then(ui.onDestroyActivitySuccess)
    // .then(reShowLabs => {
    //   onShowLabs(event, messageCheck)
    // })
    .catch(ui.onDestroyActivityFailure)
}

module.exports = {
  onCreateActivity,
  onShowAllActivity,
  onDestroyActivity,
  onUpdateActivity
}
