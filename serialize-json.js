$.fn.serializeJSON = function() {
  var raw = _.map(this.serializeArray(), _.values)
  var obj = {}

  _.each(raw, function(pair) {
    var key = pair[0],
        value = pair[1]
    if (hasPeriod(key)) {
      var keys = key.split('.')
      nest(keys, value, obj)
    } else {
      obj[key] = value
    }
  })

  return obj
}

function hasPeriod(str) {
  return /\./.test(str);
}

function nest(keys, value, obj) {
  if (keys.length > 0) {

    var key = keys.shift()

    if (obj[key] === undefined) {
      if (keys.length === 0) {
        obj[key] = value
      } else {
        obj[key] = {}
      }
    }
    var nestingBookmark = obj[key]
  }

  if (keys.length !== 0) {
    nest(keys, value, nestingBookmark)
  }
}
