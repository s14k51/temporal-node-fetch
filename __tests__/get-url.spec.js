const getURL = require('../src/get-url');

describe('getURL', () => {
  const testURL = 'https://example.example';

  it('no query string parameters', () => {
    expect(getURL(testURL, {}))
      .toStrictEqual('https://example.example');
  });

  it('query string parameters', () => {
    const query = {
      test1: 'test1',
      test2: 'test2',
    };

    expect(getURL(testURL, query))
      .toStrictEqual('https://example.example?test1=test1&test2=test2');
  });

  it('query string in URL', () => {
    const query = {
      test1: 'test1',
      test2: 'test2',
    };

    expect(getURL('https://example.example?x=x', query))
      .toStrictEqual('https://example.example?x=x&test1=test1&test2=test2');
  });
});
