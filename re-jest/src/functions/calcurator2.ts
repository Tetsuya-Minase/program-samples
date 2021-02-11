import { Calcurator } from './CalcuratorClass';
import { multiplication } from './calcurator';
export function twice(a: number) {
  return multiplication(a, 2);
}
export function add2(a: number) {
  return new Calcurator().sum(a, 2);
}