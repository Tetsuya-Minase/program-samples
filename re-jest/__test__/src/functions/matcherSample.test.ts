describe('matcher sample.', () => {
  it('真偽値', () => {
    // nullであることの確認
    expect(null).toBeNull();
    // null以外だと失敗する
    // expect(undefined).toBeNull();
    
    // undefinedでの確認
    expect(undefined).toBeUndefined();
    // 同じくundefined以外だと失敗する
    // expect(null).toBeUndefined();

    // toBeUndefinedの反対
    expect('hoge').toBeDefined();
    // toBeUndefinedの反対なのでnullは通る
    expect(null).toBeDefined();
    // undefinedは失敗する
    // expect(undefined).toBeDefined();

    // truthyな値であることの確認
    expect('hoge').toBeTruthy();
    expect(1).toBeTruthy();
    // 空文字,0,nullなどfalthyなものは通らない
    // expect('').toBeTruthy();
    // expect(0).toBeTruthy();
    // expect(null).toBeTruthy();

    // falthyな値であることの確認
    expect(0).toBeFalsy();
    expect('').toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    // truthyな値は通らない
    // expect('hoge').toBeFalsy();
  });
  it('数値', () => {
    // 3より大きい
    expect(4).toBeGreaterThan(3);
    // 3.5以上
    expect(4).toBeGreaterThanOrEqual(3.5);
    // 4以上
    expect(4).toBeGreaterThanOrEqual(4);
    // 5より小さい
    expect(4).toBeLessThan(5);
    // 4.5以下
    expect(4).toBeLessThanOrEqual(4.5);
    // 4以下
    expect(4).toBeLessThanOrEqual(4);
    // 数値においてはtoEqualとtoBeは同じ
    expect(4).toEqual(4);
    expect(4).toBe(4);

    const sum = 0.1 + 0.2;
    // 浮動小数点の場合、丸め誤差があり一致しない
    // expect(sum).toBe(0.3);
    // 浮動小数点の確認はtoBeCloseToを使う
    expect(sum).toBeCloseTo(0.3);
  });
  it('文字列', () => {
    // 文字列は正規表現で確認ができる
    expect('HelloWorld').toMatch(/^Hello.+$/);
    // デフォだと部分一致する
    expect('HelloWorld').toMatch(/orl/);
  });

  it('配列、反復可能オブジェクト', () => {
    const list = ['hoge', 'huga', 'piyo'];
    expect(list).toContain('hoge');
    expect(new Set(list)).toContain('huga');
  });

  it('マッチしない場合', () => {
    // notを挟めばできる
    expect('hoge').not.toBe('huga');
    expect('hoge').not.toBeFalsy();
  });
});

export {};