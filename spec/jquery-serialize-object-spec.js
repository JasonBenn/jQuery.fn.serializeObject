describe('serializeObject', function() {
  it('doesn\'t leak globals', function() {
    expect(window.hasPeriod).toBeUndefined();
    expect(window.nest).toBeUndefined();
    expect($.fn.serializeObject).toBeDefined();
  })

  it('understands one non-nested input', function() {
    expect($('#one-simple input').serializeObject()).toEqual({ work: "320 3rd St" })
  })

  it('understands multiple non-nested inputs', function() {
    expect($('#many-simple input').serializeObject()).toEqual({ work: "320 3rd St", home: "95 Lansing St" })
  })

  it('understands a single nested input', function() {
    expect($('#one-nested input').serializeObject()).toEqual({ work: { street: "320 3rd St" } })
  })

  it('understands multiple nested inputs', function() {
    expect($('#many-nested input').serializeObject()).toEqual({ work: { street: "320 3rd St", city: "San Fran", state: "CA" } })
  })
})
