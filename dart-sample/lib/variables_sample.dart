setVariables() {
  // 型は推論してくれるので指定しなくてもOK
  var number = 42;
  // 指定すればそれになる
  String hoge = 'hoge';
  bool isHuga = false;
  int intNumber = 10;
  double doubleNumber = 3.141592;
  List<String> list = ['hoge', 'huga', 'piyo'];
  Map<String, String> map = {'key1': 'hoge', 'key2': 'huga', 'key3': 'piyo'};
  Set<String> set = {'hoge', 'huga', 'piyo'};

  // 型がなんでも良い場合は`Object`を使う
  Object obj = 'なんでもいい場合';
  // AかBの型が欲しいけどって言う場合は`dynamic`を使う
  dynamic dynamicVariable = '限定したい場合';

  // 再代入不可にするにはfinalをつける
  final List<int> finalList = [1, 2, 3];
  // なので、下記はエラー
  // finalList = [4, 5, 6];
  // 再代入はできないが中身は変えられる
  finalList[0] = 10;

  // compile時定数にしたい場合は`const`をつける
  const List<int> consList = [1, 2, 3];
  // constの変数は中身も変えられない
  // 実行時エラーになる
  // consList[1] = 10;

  // 関数の呼び出し
  printInteger(number);
}

printInteger(int number) {
  // $変数名で変数の内容を展開できる
  print('the number is $number');
}
