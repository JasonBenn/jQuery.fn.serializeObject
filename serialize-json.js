$.fn.serializeJSON = function() {
  return _.object(_.map(this.serializeArray(), _.values))
}
