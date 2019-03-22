const dateService = require('./date.service');
const expect = require("chai").expect;

describe('Date Service Module', function () {
    describe('getTimestamp', function () {
        it('should return a date', function (done) {
            const now = dateService.getTimestamp();
            expect(now).to.not.be.empty;
            done();
        });
    });
});