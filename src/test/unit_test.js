const assert = require('assert');


describe('How do you testing ', function () {
    // And then we describe our testcases.
    it(`Hello is true`, (done) => {
        hello = true;
        assert.equal(hello, true);
        // Invoke done when the test is complete.
        done();
    });
});