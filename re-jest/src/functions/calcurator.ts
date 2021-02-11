export function sum(a: number, b: number) {
  return a + b;
}
export function division(dividend: number, divisor: number) {
  if (divisor === 0) {
    throw new Error('Do not divide by 0.');
  }
  return dividend / divisor;
}
export function multiplication(a: number, b: number) {
  return a * b;
}
