'use strict'

let apiUrl
const apiUrls = {
  production: 'https://polar-crag-68481.herokuapp.com',
  development: 'http://localhost:7165'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
