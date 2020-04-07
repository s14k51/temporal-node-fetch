// Write your tests here

const { get } = require('../src');
const TemporalNodeFetchError = require('../src/TemporalNodeFetchError');

describe('get', () => {
  it('non-ok status', async () => {
    await expect(get('https://httpstat.us/404'))
      .rejects
      .toThrow(TemporalNodeFetchError('TemporalNodeFetch', 'Not Found', 404));
  });

  it('204 status', async () => {
    expect(await get('https://httpstat.us/204')).toStrictEqual({ status: 204, data: {} });
  });

  it('205 status', async () => {
    expect(await get('https://httpstat.us/205')).toStrictEqual({ status: 205, data: {} });
  });

  it('200 status', async () => {
    expect(await get('https://httpstat.us/200')).toStrictEqual({
      status: 200,
      data: {
        code: 200,
        description: 'OK',
      },
    });
  });

  it('3 second timeout', async () => {
    const errorMessage = 'FetchError: network timeout at: https://httpstat.us/200?sleep=4000&test=test';
    const options = {
      timeout: 3000,
      errorName: 'Test',
      query: {
        test: 'test',
      },
    };

    await expect(get('https://httpstat.us/200?sleep=4000', options))
      .rejects
      .toThrow(TemporalNodeFetchError('Test', errorMessage, 500));
  });

  it('default 6 second timeout', async () => {
    jest.setTimeout(7000);

    const errorMessage = 'FetchError: network timeout at: https://httpstat.us/200?sleep=7000';
    const options = {
      errorName: 'Test',
    };

    await expect(get('https://httpstat.us/200?sleep=7000', options))
      .rejects
      .toThrow(TemporalNodeFetchError('Test', errorMessage, 500));
  });
});
