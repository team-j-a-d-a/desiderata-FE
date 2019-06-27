
'use strict'

const config = require('../config')
const store = require('../store')

const signUp = formData => {
  // console.log('from api signUp')

  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = formData => {
  // console.log('from api signIn')
  // console.log(formData)

  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = formData => {
  // console.log('from api changePassword')
  // console.log('store is', store)

  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createActivity = function (sport) {
  // console.log('We are creating an activity')
  // console.log(sport)
  return $.ajax({
    url: config.apiUrl + '/activities',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {

      'activity': sport

    }
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

const getActivity = (id) => {
  return $.ajax({
    url: config.apiUrl + '/activities/' + id,
    method: 'GET'
  })
}

const updateActivity = (id, formData) => {
  // console.log(id)
  return $.ajax({
    url: config.apiUrl + `/activities/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const deleteActivity = (id) => {
  return $.ajax({
    url: config.apiUrl + '/activities/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = () => {
  // console.log('from api signOut')

  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getActivities,
  getActivity,
  deleteActivity,
  signUp,
  signIn,
  changePassword,
  createActivity,
  updateActivity,
  signOut

}
