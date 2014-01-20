(function(jQuery) {
  jQuery.fn.serializeObject = function() {
    var raw = this.serializeArray().map(function(input) {
      return [input.name, input.value]
    })
    var obj = {}

    raw.forEach(function(pair) {
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
}($))
