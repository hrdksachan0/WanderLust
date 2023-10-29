class ExpressError extends Error {
  constructor(statusCode, message) {
    super(); //calling the parent constructor method of Error.
    this.statusCode = statusCode;
    this.message = message;
  }
}
module.exports = ExpressError;
