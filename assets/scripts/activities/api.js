'use strict'
const config = require('../config')
const store = require('../store')

const addActivity = (formData) => {
  console.log(formData)
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
