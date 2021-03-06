import stockList from '.';

describe('stockList', () => {
  it('should sum quantity of books for each category', () => {
    expect(
      stockList(['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'], ['A', 'B']),
    ).toEqual('(A : 200) - (B : 1140)');

    expect(
      stockList(['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'], ['A', 'B', 'C', 'W']),
    ).toEqual('(A : 0) - (B : 114) - (C : 70) - (W : 0)');
  });
});
