define(['../src/foo.js'], function (foo) {
  describe('foo', function () {
    describe('.identity', function () {
      it('should be "I am foo"', function () {
        expect(foo.identity).toBe("I am foo");
      });
    });
  });
});
