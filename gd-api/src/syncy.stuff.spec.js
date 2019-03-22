const syncyStuff = require('./syncy.stuff');
const expect = require("chai").expect;

describe('Syncy Stuff Module', function () {
    describe('somethingSync', function () {
        it('should run a function syncronously', function (done) {
            syncyStuff.somethingSync();
            done();
        });
    });

    describe('somethingASync', function () {
        it('should run a function asyncronously', function (done) {
            syncyStuff.somethingASync();
            done();
        });
    });

    describe('somethingASyncAsPromise', function () {
        it('should run a function asyncronously and return a promise', function (done) {
            const pr = syncyStuff.somethingASyncAsPromise();
            pr.then(() => {
                console.log('promise complete');
            });
            done();
        });
    });
});