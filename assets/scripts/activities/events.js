'use-strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onAddActivity = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  api.addActivity(formData)
    .then(ui.onAddActivitySuccess)
    .catch(ui.onAddActivityFailure)
}

module.exports = {
  onAddActivity
}
