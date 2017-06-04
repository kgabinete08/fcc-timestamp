const timestamp = require('./dateAndTimestamp');

test('it returns null when input is not a valid date string', () => {
  // partial date matches such as 'hello world 1990' will return weird results
  const input = 'Hello World'
  expect(timestamp.getDateAndTimestamp(input)).toBeNull();
});

test('it returns a natural date and unix timestamp when input is a valid date string', () => {
  const input = 'June 20, 1990';
  const result = {
    naturalDate: 'June 20, 1990',
    unixTime: 645865200
  };
  expect(timestamp.getDateAndTimestamp(input)).toEqual(result);
});

test('it returns a natural date and unix timestamp when input is a unix string', () => {
  const input = '645865200'
  const result = {
    naturalDate: 'June 20, 1990',
    unixTime: 645865200
  };
  expect(timestamp.getDateAndTimestamp(input)).toEqual(result);
});
