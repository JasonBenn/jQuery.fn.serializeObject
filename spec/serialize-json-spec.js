describe('serializeJSON', function() {
  it('serializes non-nested inputs', function() {
    expect($('#flat input').serializeJSON()).toEqual({ work: "320 3rd St", home: "95 Lansing St" })
  })
})
