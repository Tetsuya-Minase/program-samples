// グローバル変数はあらゆるスコープの外で宣言する
static LANGUAGE: &str = "Rust";
const THRESHOLD: i32 = 10;

fn is_big(n: i32) -> bool {
  // 関数内から定数を参照
  n > THRESHOLD
}

pub fn constant_sample() {
  let n = 16;

  // main 関数の中から定数を参照
  println!("This is {}", LANGUAGE);
  println!("The threshold is {}", THRESHOLD);
  println!("{} is {}", n, if is_big(n) { "big" } else { "small" });

  // 定数は変更不可なので↓はエラーになる
  // THRESHOLD = 5;
}