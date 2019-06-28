'use strict'

const onAddActivitySuccess = responseData => {
  console.log('Success', responseData)
}

const onAddActivityFailure = responseData => {
  console.log('Failure', responseData)
}

const onGetActivitiesSuccess = responseData => {
  $('#create-activity-message').html('Success!')
  // console.log(responseData.activities)
  const showActivitiesHtml = showActivitiesTemplate({ activities: responseData.activities })
  $('.content').html(showActivitiesHtml)
  $('#update-activity-form').removeClass('hide')
  $('.handlebars').removeClass('hide')
  setTimeout(() => {
    $('#create-activity-message').html('')
    $('#create-activity-message').removeClass('success')
  }, 5000)
}
const failure = (error) => {
  console.error(error)
}
module.exports = {
  onAddActivitySuccess,
  onAddActivityFailure,
  onGetActivitiesSuccess,
  failure
}
