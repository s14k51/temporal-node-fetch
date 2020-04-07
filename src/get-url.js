const querystring = require('querystring');

module.exports = function getUrl(url, query) {
  const queryParameters = querystring.stringify(query);

  if (queryParameters) {
    return url.includes('?') ? `${url}&${queryParameters}` : `${url}?${queryParameters}`;
  }

  return url;
};
