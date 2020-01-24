import 'reflect-metadata';

const metaDataKey = Symbol('sample');

/**
 * 下記のpropertyを受け取る
 * @param target decoratorを付けたclassのprototype
 * @param member memberの名前
 * @param parameterIndex 関数のパラメーターリスト内のパラメーターのインデックス
 */
function parameterDecoratorSample(target: any, member: string, parameterIndex: number) {
  const parameters = Reflect.getOwnMetadata(metaDataKey, target, member) || [];
  parameters.push(parameterIndex);
  // metadata付与
  Reflect.defineMetadata(metaDataKey, parameters, target, member);
  
}

function methodDecorator(target: any, propKey: string, desc: PropertyDescriptor) {
  const method = desc.value;
  desc.value = function() {
    const parameters = Reflect.getMetadata(metaDataKey, target, propKey);
    
    if (parameters) {
      for (const parameterIndex of parameters) {
        if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined ) {
          throw new Error('Missing required argument!');
        }
      }
    }
    return method.apply(this, arguments);
  }
  
}

class SampleClassParameter {
  @methodDecorator
  greet(@parameterDecoratorSample name: string) {
    return `Hello! ${name}`;
  }
}

console.log(new SampleClassParameter().greet('Tom'));