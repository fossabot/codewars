import addLetters from '.';

describe('addLetters', () => {
  it('should add up letters to one letter', () => {
    const tests = [
      [['a', 'b', 'c'], 'f'],
      [['z'], 'z'],
      [['a', 'b'], 'c'],
      [['c'], 'c'],
      [['z', 'a'], 'a'],
      [['y', 'c', 'b'], 'd'],
      [[], 'z'],
    ];

    tests.forEach(test => {
      expect(addLetters(...test[0])).toEqual(test[1]);
    });
  });
});
