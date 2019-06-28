'use strict'
const config = require('../scripts/config')
const store = require('../scripts/store')

const addActivity = (formData) => {
  console.log(store)
  return $.ajax({
    url: config.apiUrl + `/activities`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  addActivity
}
