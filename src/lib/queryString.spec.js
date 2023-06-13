const { queryString, parse } = require('./queryString');

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

describe('query string to object', () => {
  it('should crate a valid object when an query string is provider', () => {
    const queryString = 'name=joao&cargo=SoftwareDevelopment';

    expect(parse(queryString)).toEqual({
      name: 'joao',
      cargo: 'SoftwareDevelopment',
    });
  });

  it('should crate a valid object when an single query string is provider', () => {
    const queryString = 'name=joao';

    expect(parse(queryString)).toEqual({
      name: 'joao',
    });
  });
});

describe('Array to query string', () => {
  it('should crate a valid query string when is provider an array', () => {
    const name = 'name=joao&cargo=Software,Development';

    expect(parse(name)).toEqual({
      name: 'joao',
      cargo: ['Software', 'Development'],
    });
  });
});
