const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateActivity = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.postLabs(formData)
    .then(ui.onCreateActivitySuccess)
    .catch(ui.onCreateActivityFailure)
}

const onShowAllActivities = (event, messageCheck) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.getLabs(formData)
    .then(ui.onShowAllActivitiesSuccess)
    // .then(data => {
    //   ui.onShowAllActivitiesSuccess(messageCheck, data)
    // })
    .catch(ui.onShowAllActivitiesFailure)
}

module.exports = {
  onCreateActivity,
  onShowAllActivities
}
