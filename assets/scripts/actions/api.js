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

const patchActivity = (formData, id) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/activities/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData,
    id
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

const delActivity = (id) => {
  return $.ajax({
    url: config.apiUrl + '/activities/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  postActivity,
  getActivity,
  delActivity,
  patchActivity
}
