define ['cs!../src/bar.coffee'], (bar) ->
  describe 'bar', ->
    describe '.identity', ->
      it 'should be "I am bar"', ->
        expect(bar.identity).toBe 'I am bar'
