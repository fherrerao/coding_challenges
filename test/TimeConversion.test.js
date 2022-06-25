const timeConversion = require('../Time conversion.js');

test(('first case'), () => {
  expect(timeConversion('12:45:54PM')).toBe('12:45:54');
});

test(('second case'), () => {
  expect(timeConversion('07:45:54PM')).toBe('19:45:54');
});

test(('third case'), () => {
  expect(timeConversion('07:45:54AM')).toBe('07:45:54');
});

test(('fourth case'), () => {
  expect(timeConversion('12:45:54AM')).toBe('00:45:54');
})
