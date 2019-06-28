'use strict'
const config = require('assets/config.js')
const store = require('assets/store.js')

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
