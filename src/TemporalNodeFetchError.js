/* eslint-disable unicorn/filename-case */

function TemporalNodeFetchError(name, message, status) {
  const error = new Error(message);

  error.name = `${name}Error`;
  error.status = status;

  return error;
}

module.exports = TemporalNodeFetchError;
