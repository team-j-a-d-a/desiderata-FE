'use strict'
const config = require('../config.js')
const store = require('../store.js')

const addActivity = (formData) => {
  // console.log(store)
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
