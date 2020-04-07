const fetch = require('node-fetch');
const TemporalNodeFetchError = require('./TemporalNodeFetchError');
const getURL = require('./get-url');

module.exports = async function get(url, options = {}) {
  // eslint-disable-next-line object-curly-newline
  const { query = {}, headers = {}, errorName = 'TemporalNodeFetch', timeout = 6000 } = options;
  const resourceURL = getURL(url, query);

  try {
    const response = await fetch(resourceURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        ...headers,
      },
      timeout,
    });
    const { status, statusText, ok } = response;

    if (!ok) {
      return Promise.reject(TemporalNodeFetchError(errorName, statusText, status));
    }

    let data;

    if (status === 204 || status === 205) {
      data = {};
    } else {
      data = await response.json();
    }

    return { status, data };
  } catch (error) {
    const { name, message } = error;

    return Promise.reject(TemporalNodeFetchError(errorName, `${name}: ${message}`, 500));
  }
};
