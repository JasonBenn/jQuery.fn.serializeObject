describe('serializeJSON', function() {
  it('doesn\'t leak globals', function() {
    expect(window.hasPeriod).toBeUndefined();
    expect(window.nest).toBeUndefined();
    expect($.fn.serializeJSON).toBeDefined();
  })

  it('understands one non-nested input', function() {
    expect($('#one-simple input').serializeJSON()).toEqual({ work: "320 3rd St" })
  })

  it('understands multiple non-nested inputs', function() {
    expect($('#many-simple input').serializeJSON()).toEqual({ work: "320 3rd St", home: "95 Lansing St" })
  })

  it('understands a single nested input', function() {
    expect($('#one-nested input').serializeJSON()).toEqual({ work: { street: "320 3rd St" } })
  })

  it('understands multiple nested inputs', function() {
    expect($('#many-nested input').serializeJSON()).toEqual({ work: { street: "320 3rd St", city: "San Fran", state: "CA" } })
  })
})
