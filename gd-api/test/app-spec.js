const assert = require('assert');

describe('App', function() {
    describe('dummy', function() {
      it('should do bugger all', function(done) {
          console.log('running my first test');
          assert.strictEqual('a', 'a');
          done();
      });
    });
  });