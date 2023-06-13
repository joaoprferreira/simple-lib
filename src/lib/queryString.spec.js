const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('should crate a valid query string when an object is provider', () => {
    const obj = {
      name: 'joao',
      cargo: 'SoftwareDevelopment',
    };

    expect(queryString(obj)).toBe('name=joao&cargo=SoftwareDevelopment');
  });

  it('should create a valid query string when an array is passed in value', () => {
    const obj = {
      name: 'joao',
      cargo: ['Software', 'Development'],
    };

    expect(queryString(obj)).toBe('name=joao&cargo=Software,Development');
  });

  it('should create a valid query string when an object is passed in value', () => {
    const obj = {
      name: 'joao',
      cargo: {
        name: 'Software',
        secondName: 'Development',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});
