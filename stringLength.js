function stringLength(string) {
    if (string.length < 1 || string.length > 10) {
        return "Error: String must be between 1 and 10";
    } else return 'String is OKAY'
}

module.exports = stringLength;