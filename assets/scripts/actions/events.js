const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onAddActivity = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // console.log('form data is ', formData) // REMINDER TO REMOVE
  api.postActivity(formData)
    .then(ui.onAddActivitySuccess)
    .catch(ui.onAddActivityFailure)
}

const onShowAllActivity = (event) => {
  event.preventDefault()
  // const form = event.target
  // const formData = getFormFields(form)
  api.getActivity()
    .then(ui.onShowAllActivitySuccess)
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
  api.delActivity(id)
    .then(ui.onDestroyActivitySuccess)
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
