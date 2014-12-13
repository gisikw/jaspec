define ['../src/nonAmd.js'], ->
  describe 'nonAmd', ->
    it 'works just fine', ->
      expect(globalNamespacePollution).toBe "I'm a bad developer"
