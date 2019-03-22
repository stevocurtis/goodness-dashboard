function getTimestamp() {
    const now = new Date();
    return now.toLocaleString();
}

module.exports.getTimestamp = getTimestamp;