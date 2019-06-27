// testing for handlebars

const store = require('../store.js')
const config = require('../config.js')

const postActivity = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/activities/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getActivity = (formData) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/activities/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

module.exports = {
  postActivity,
  getActivity
}
