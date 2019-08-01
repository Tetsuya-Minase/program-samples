import 'dart:math';
import 'package:meta/meta.dart';

String closure(int number) {
  // ラムダもかける
  int square(int num) => pow(num, 2);
  int half(int num) => (num / 2).round();

  return 'square: ${square(number)} / half: ${half(number)}';
}

// 名前付きパラメータ。呼び出すときに仮引数名をつけて関数を呼び出せる
// @requiredをつけると変数が必須になる(付いてないのは省略可)
String namedParameter({@required String firstName, String lastName}) {
  return '$firstName $lastName';
}
