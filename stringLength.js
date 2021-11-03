function stringLength(string) {
    if (string.length <= 1 || string.length >= 10) {
        throw new Error("Error: String must be between 1 and 10");
    } else return string.length
}

module.exports = stringLength;