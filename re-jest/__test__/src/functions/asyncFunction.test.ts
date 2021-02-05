import { resolveSample, rejectSample } from '../../../src/functions/asyncFunction'

describe('async function', () => {

  it('非同期の確認', () => {
    // resolvesをつけることでPromiseがresolveされるまで待つ
    expect(resolveSample()).resolves.toBe('OK');
    // 何もつけないとPromiseが返ってきてすぐ比較されるので一致しない
    // expect(resolveSample()).toBe('OK');
  
    // rejectsをつけることでPromiseがrejectされるまで待つ
    expect(rejectSample()).rejects.toBe('Error');
  });
  it('asyncを使った場合', async () => {
    // 結果を待ってから取得した値でチェックする
    const result = await resolveSample();
    expect(result).toBe('OK');
  });
  it('asyncを使った場合(エラー時)', async () => {
    // テストが間違ってエラーにならない場合、テストが通ってしまうため想定した数assertionが呼ばれることのチェック
    expect.assertions(1);
    // rejectされてErrorになるためcatchしてあげる必要がある
    try {
      await rejectSample();
    } catch (e) {
      expect(e).toMatch('Error');
    }
  });
});