const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('should crate a valid query string when an object is provider', () => {
    const obj = {
      name: 'joao',
      cargo: 'SoftwareDevelopment',
    };

    expect(queryString(obj)).toBe('name=joao&cargo=SoftwareDevelopment');
  });
});
