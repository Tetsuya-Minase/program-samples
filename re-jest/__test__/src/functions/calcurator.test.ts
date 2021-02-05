import { division, sum } from '../../../src/functions/calcurator';

describe('sum', () => {
  it('2 + 3 = 5', () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });
});

describe('division', () => {
  it('6 / 3 = 2', () => {
    const result = division(6, 3);
    expect(result).toBe(2);
  });

  it('6 / 0 = error!', () => {
    // エラーになることの確認。
    // そのまま実行するとエラーで落ちるので関数でラップしてあげる
    // ThrowErrorの引数にErrorを渡して上げると内容が同じか比較してくれる
    expect(() => division(6, 0)).toThrowError(new Error('Do not divide by 0.'));
  });
});
