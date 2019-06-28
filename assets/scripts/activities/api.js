
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
  getActivities
  // getActivity

}
