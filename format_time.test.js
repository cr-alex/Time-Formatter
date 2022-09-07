const format_time = require('./format_time');

// Format 1PM
test('covert 1PM to 1300', () => {
  expect(format_time('1PM')).toBe('1300');
});

test('covert 1AM to 0100', () => {
    expect(format_time('1AM')).toBe('0100');
});

test('covert 12AM to 0000', () => {
    expect(format_time('12AM')).toBe('0000');
});

test('covert 12PM to 0000', () => {
    expect(format_time('12PM')).toBe('1200');
});

// Format 01PM
test('covert 1PM to 1300', () => {
    expect(format_time('01PM')).toBe('1300');
});
  
test('covert 1AM to 0100', () => {
    expect(format_time('01AM')).toBe('0100');
});

test('covert 1AM to 0100', () => {
    expect(format_time('01AM')).toBe('0100');
});

// Format 01:30PM
test('covert 01:30PM to 1330', () => {
    expect(format_time('01:30PM')).toBe('1330');
});

test('covert 12:00AM to 0000', () => {
    expect(format_time('12:00AM')).toBe('0000');
});

test('covert 12:30PM to 1230', () => {
    expect(format_time('12:30PM')).toBe('1230');
});

// Format 1:30PM

test('covert 1:30PM to 1330', () => {
    expect(format_time('1:30PM')).toBe('1330');
});

test('covert 2:00PM to 1400', () => {
    expect(format_time('2:00PM')).toBe('1400');
});

test('covert 3:30PM to 1530', () => {
    expect(format_time('3:30PM')).toBe('1530');
});

// test military time

test('covert 12:00 to 1200', () => {
    expect(format_time('12:00')).toBe('1200');
});

test('covert 0200 to 0200', () => {
    expect(format_time('0200')).toBe('0200');
});

test('covert 23:30 to 2330', () => {
    expect(format_time('23:30')).toBe('2330');
});


  
