class SampleClass {
  // `_`をつけるとprivateになる
  String _name;
  int _age;

  SampleClass(String name, int age) {
    this._name = name;
    this._age = age;
  }

  // 名前付きのコンストラクタ
  SampleClass.initialized() {
    this._name = 'sample';
    this._age = 20;
  }

  String get name => this._name;
  int get age => this._age;

  void selfIntroduction() {
    print('name: $_name, age: $_age');
  }
}
