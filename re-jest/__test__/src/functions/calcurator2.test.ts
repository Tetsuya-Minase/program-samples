import { twice } from '../../../src/functions/calcurator2';

jest.mock('../../../src/functions/calcurator', () => {
  const original = jest.requireActual('../../../src/functions/calcurator');
  return {
    ...original,
    multiplication: jest.fn().mockReturnValue(10)
  }
});
describe('twice', () => {
  it('test', () => {
    const result = twice(5);
    expect(result).toBe(10);
  });
});
