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

function greetDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  descriptor.value = function () {
    return `こんにちは。${arguments[0]}`;
  };
}

class MethodDecoratorGreeter {
  @greetDecorator
  greet(name: string) {
    return `Hi! ${name}`;
  }
}
console.log(new MethodDecoratorGreeter().greet('Tom'));

function reflectDecorator(type: 'original' | 'change') {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // 後で実行したいので退避しておく
    const originalMethod = descriptor.value;
    switch(type) {
      case 'original':
        descriptor.value = function() {
          return Reflect.apply(originalMethod, this, arguments);
        }
        break;
      case 'change':
        descriptor.value = function() {
          return '変更した';
        }
    }
  }
}

class ReflectSample {
  @reflectDecorator('original')
  noCange() {
    return '元のメソッド';
  }

  @reflectDecorator('change')
  change() {
    return '元のメソッド';
  }
}
const reflectSample = new ReflectSample();
console.log(`noChange: ${reflectSample.noCange()}`);
console.log(`change  : ${reflectSample.change()}`);
