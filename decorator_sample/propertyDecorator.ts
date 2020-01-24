/**
 * 下記のpropertyを受け取る
 * @param target decoratorを付けたpropertyのclassのprototype
 * @param member member名
 */
function propertyDecoratorSample(target: any, member: string): any {
  const propertyDescriptor: PropertyDescriptor = {
    configurable: false,
    enumerable: false,
    value: 'huga',
    writable: true
  }
  return propertyDescriptor;
}


class SampleClassProperty {
  @propertyDecoratorSample
  private name?: string;

  constructor(name: string) {
    
    this.name = name;
  }
}

console.log(new SampleClassProperty('hoge'));
