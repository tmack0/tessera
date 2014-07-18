$(document).on('dp.change', '#ds-range-picker-from', function(e) {
  var from = $('#ds-range-picker-from').data("DateTimePicker").getDate()
  console.log('set from time: ' + moment(from).fromNow())
})

$(document).on('dp.change', '#ds-range-picker-until', function(e) {
  var until = $('#ds-range-picker-until').data("DateTimePicker").getDate()
  console.log('set until time: ' + moment(until).fromNow())
})

$(document).on('click', '.ds-recent-range-picker li, .ds-recent-range-picker a, .ds-custom-range-picker ul li, .ds-custom-range-picker ul li a', function(e) {
  var range = $(e.target).attr('data-ds-range')

  if (range === 'custom') {
    $('.ds-recent-range-picker').hide()
    $('.ds-custom-range-picker').show()

    var now          = moment().utc().startOf('minute')
    now.minute( Math.round(now.minute() / 15) * 15) // quantize to 15-min interval
    var until_picker = $('#ds-range-picker-until').data("DateTimePicker")
    until_picker.setDate(now)
    until_picker.setMaxDate(now.endOf('day'))

    // set to now -3 hours
    // $('#ds-range-picker-from').data("DateTimePicker").setDate(moment())

  } else if (range === 'recent') {
    $('.ds-custom-range-picker').hide()
    $('.ds-recent-range-picker').show()

  } else {
    ds.manager.set_time_range(range, null)
  }
    return false
})
