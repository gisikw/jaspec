define 'foo', ->
  'A fake foo'

define ['../src/stubbable.js'], (stubbable) ->
  describe 'stubbable', ->
    it 'should have a stubbed foo', ->
      expect(stubbable.foo).toBe 'A fake foo'
