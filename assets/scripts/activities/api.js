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

const getActivities = function () {
  return $.ajax({
    url: config.apiUrl + '/activities',
    method: 'GET',

    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const getActivity = (id) => {
//   return $.ajax({
//     url: config.apiUrl + '/activities/' + id,
//     method: 'GET'
//   })
// }



module.exports = {
  addActivity,
  getActivities
}
