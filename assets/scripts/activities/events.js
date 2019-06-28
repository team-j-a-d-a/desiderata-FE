'use strict'

const onGetActivities = function (event) {
  event.preventDefault()
  api.getActivities()
    .then(ui.onGetActivitiesSuccess)
    .catch(ui.onError)
}

module.exports = {
  onGetActivities

}
