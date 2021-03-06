import removeNb from '.';

describe('removeNb', () => {
  it('should return array of all numbers which are the possible removed numbers in the sequence', () => {
    expect(removeNb(26)).toEqual([
      [15, 21],
      [21, 15],
    ]);
    expect(removeNb(100)).toEqual([]);
  });
});
