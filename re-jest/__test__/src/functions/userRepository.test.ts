import { getUserById } from '../../../src/functions/userRepository';
describe('getUserById', () => {
  it('取得できる場合', () => {
    const result = getUserById('user1');
    // Objectの値の確認はtoEqualを使う
    expect(result).toEqual({id: 'user1', name: 'Taro', age: 20});
    // toBeで比較するとObjec.isでの比較になるため↓は同値にならずテストがコケる
    // expect(result).toBe({id: 'user1', name: 'Taro', age: 20});
  });
});