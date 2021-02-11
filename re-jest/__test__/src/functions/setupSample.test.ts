beforeEach(() => {
  console.log('このファイル内のテストケースの前に実行される');
});
xdescribe('setup and teardown sample.', () => {
  beforeAll(() => {
    console.log('全テストケースの前に実行される');
  });
  afterAll(() => {
    console.log('全テストケースの後に実行される');
  });
  beforeEach(() => {
    console.log('各テストケースの前に実行される');
  });
  afterEach(() => {
    console.log('各テストケースの後に実行される');
  });

  it('テスト1', () => {
    console.log('テスト1');  
  });
  it('テスト2', () => {
    console.log('テスト2');  
  });

  it('テスト3', () => {
    console.log('テスト3');  
  });

});

export {};