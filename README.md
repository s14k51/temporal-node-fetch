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

Promise that resolves to a plain json object

```javascript
const { get } = require('@temporal/node-fetch');

await get(someURL);
```

# Options

```js
{
  timeout: 6000, // default: 6000 ms; same as the timeout option of `node-fetch`
  headers: {}, // custom headers; `Accept: application/json` is already included
  query: {} // query string parameters to be included in the url
}
```

The `query` parameters are stringified with the node's built-in [querystring](https://nodejs.org/api/querystring.html) module.
