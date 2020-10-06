//! 構造体のサンプル  
//! 構造体はstructで宣言できる。
//! 種類は3つあり、
//! * タプル(名前付きタプル)
//! * C言語スタイルの構造体
//! * ユニット。これはフィールドを持たず、ジェネリック型を扱う際に有効です。

struct Person<'a> {
  // The 'a defines a lifetime
  name: &'a str,
  age: u8,
}

// ユニット
struct Nil;
// タプル
struct Pair(i32, i32);
// C言語スタイルの構造体
struct Point {
  x: f32,
  y: f32
}
// 構造体は構造体のフィールドになれる
struct Rectangle {
  top_left: Point,
  bottom_right: Point,
}

pub fn structSample(){
  // 変数から構造体を作成する
  let name = "Peter";
  let age = 27;
  let peter = Person { name, age };
  // 変数を経由しなくても問題なし
  let bob = Person { bob, 20 };

  // Pointをインスタンス化
  let point: Point = Point { x: 10.3, y: 0.4 };
  // pointのフィールドにアクセスする。
  println!("point coordinates: ({}, {})", point.x, point.y);
  // 構造体から別の構造体を作成する
  // 指定しなかった要素は元の要素を引き継ぐ
  let anotherPoint = Point { x: 20.3, ...point};
  // anotherPoint.yはpoint.yと同じ値になる
  println!("second point: ({}, {})", anotherPoint.x, anotherPoint.y);

  // `let`を使用してpointを分解できる
  let Point{ x: pointX, y: pointY } = point;
  println!("pointX: {}, pontY: {}", pointX, pointY);
}