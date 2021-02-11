import { twice, add2 } from '../../../src/functions/calcurator2';
import { Calcurator } from './../../../src/functions/CalcuratorClass';
import { mocked } from 'ts-jest/utils';

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

jest.mock('../../../src/functions/CalcuratorClass');
describe('sum', () => {
  it('test', () => {
    mocked(Calcurator).mockImplementation(() => {
      return {
        sum: () => {
          return 5;
        },
      };
    });
    const result = add2(3);
    expect(result).toBe(5)
  });
});