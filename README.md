# @temporal/node-fetch

Simple `async`/`await` based [node-fetch](https://www.npmjs.com/package/node-fetch) wrapper.

# Support

1. Currently supports only `get` requests.

# Installation

```bash
npm i -S @temporal/node-fetch
```

# Usage

## `get(url, [options])`

Makes a `HTTP GET` request.

**Arguments**
- `url` *(string)*: The URL to make a get request 
- (Optional) `options` *(object)*: Custom [options](#Options)

**Returns**

Promise that resolves to a [TemporalResponse](#TemporalResponse) object or rejects with a [TemporalNodeFetchError](#TemporalNodeFetchError)

```javascript
const { get } = require('@temporal/node-fetch');

await get(someURL);
```

# Options

Options have the following defaults:

```js
{
  timeout: 6000, // same as the timeout option of `node-fetch`
  headers: {}, // custom headers; `Accept: application/json` is already included
  query: {} // query string parameters to be included in the url
  errorName: 'TemporalNodeFetch' // custom error name
}
```

The `query` parameters are stringified with the node's built-in [querystring](https://nodejs.org/api/querystring.html) module.

# TemporalResponse

This is a plain javascript object literal

```js
{
  status: 200, // the HTTP status from the `get` operation
  data: {} // the json response data from the `get` operation
}
```

# TemporalNodeFetchError

This error has the following attributes:

```js
error.name = 'TemporalNodeFetchError'; // if `errorName` option is 'Test', then this becomes 'TestError'
error.message = '<the error message>';
error.status = 500; // HTTP error status from the `get` operation
// you can also read the regular `error.stack`
```
