import sumArray from '.';

describe('sumArray', () => {
  it('should sum all numbers except the highest and lowest', () => {
    expect(sumArray([6, 2, 1, 8, 10])).toEqual(16);
  });
});
