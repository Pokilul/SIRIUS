/**
 * Creates a new Error object with the given message and status code.
 * @param {string} message - The error message.
 * @param {number} code - The HTTP status code to set on the error object.
 * @returns {Error} - The new Error object.
 */
function error (message, code) {
    let e = new Error(message);

    if (code) {
        e.statusCode = code;
    }

    return e;
}

module.exports = error;