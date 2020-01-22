/**
 * 下記のpropertyを受け取る
 * @param target decoratorを付けたmethodのclassのprototype
 * @param propertyKey decoratorを付けたmethodの名前
 * @param descriptor methodのproperty descriptor ※targetがes5未満だとundefinedになる
 */
function methodDecoratorSample(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  return undefined;
}

class SampleClassMethod {
  @methodDecoratorSample
  greet(message: string) {
    return `Hello! ${message}`;
  }
}

console.log(new SampleClassMethod().greet('test'));
