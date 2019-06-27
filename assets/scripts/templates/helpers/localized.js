'use strict'

const localized = dateStr => {
  if (dateStr) {
    // add the time 12:00 to the end of the dateStr
    // and create a new date object
    const dateObj = new Date(dateStr + ' 12:00')
    // use the date object method to format the
    // date according to the local formatting rules
    // i.e., in US it outputs DD/MM/YY by default
    return dateObj.toLocaleDateString()
  } else {
    return ''
  }
}

module.exports = localized
