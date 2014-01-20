describe('serializeJSON', function() {
  it('for very simple inputs', function() {
    expect($('#one-simple input').serializeJSON()).toEqual({ work: "320 3rd St" })
  })

  it('for non-nested inputs', function() {
    expect($('#many-simple input').serializeJSON()).toEqual({ work: "320 3rd St", home: "95 Lansing St" })
  })

  it('for simple nested inputs', function() {
    expect($('#one-nested input').serializeJSON()).toEqual({ work: { street: "320 3rd St" } })
  })

  it('for nested inputs', function() {
    expect($('#many-nested input').serializeJSON()).toEqual({ work: { street: "320 3rd St", city: "San Fran", state: "CA" } })
  })
})
