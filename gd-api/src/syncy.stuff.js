module.exports.somethingSync = function () {
    console.log('running somethingSync');
}

module.exports.somethingASync = function () {
    console.log('running somethingASync');
}

module.exports.somethingASyncAsPromise = function () {
    return new Promise((resolve) => {
        const message = 'running somethingASyncAsPromise';
        console.log(message);
        resolve(message);
    });
}