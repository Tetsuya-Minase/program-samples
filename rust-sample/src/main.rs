//! ドキュメントコメントを書きたい場合の書き方は2通りある。    
//! `/`3つのときはこのコメントの下の内容に対するドキュメントになる。  
//! `//!`で書いた場合はこのソースコードに対するコメントになる。  
//! ドキュメントコメントはマークダウン形式で書ける。  
//! コードブロックも書くことができる。  
//! ```
//! fn hoge() {
//!   prntln!("hoge!");
//! }
//! ```
//! ドキュメントコメントを出力するには`cargo doc`でできる。  
//! ブラウザで見たければ、`cargo doc --open`

mod struct_sample;

/// こちらのコメントはmain関数に対するコメント。  
/// 基本文法のサンプルを書いていく
fn main() {
    // コメントは`/`2つ
    /* これで
     * ブロックコメントが書ける
     * この2つのコメントはコンパイラに無視される
    */
  
    // フォーマットしてプリントするやり方は複数ある
    format!("テキストを文字列に書き込むだけ。そのため標準出力には出てこない。");
    print!("format!と同じだが、標準出力に出てくる。");
    println!("print!と同じだが、一行毎に改行される。");
    println!("途中になにか入れたい場合は、{}とすればそこに挿入される。", "test");
    println!("順番の指定もできる。一個目: {0} / 二個目: {1} / 一個目: {0}", "hoge", "huga");
    println!("名前の指定もできる。 id: {id} / name: {name} / age: {age}", id="0001", name="Piyota", age="20");
    eprint!("print!と同じ。こちらは標準エラーに出力される");
    eprintln!("println!と同じ。こちらは標準エラーに出力される");
    // 変数宣言はlet。型定義は変数名の後ろに`:型名`で定義
    // 1文字はchar。
    let char1: char = 'a';
    // 文字列はString
    let str1: String = String::from("Hello World!");
    // 符号付き整数はi8, i16, i32, i64, i128, isize(ポインタのサイズ)になる。
    let num1: i32 = 10;
    // サフィックスで型指定可能
    let num2 = 10i32;
    // 符号なし整数もある。u8, i16, u32, u64, u128, usize(ポインタのサイズ)。
    let num3: u32 = 100;
    // 浮動小数点。f32 or f64
    let float1: f32 = 3.141592;
    // 真偽値。true / false
    // 使わない変数は頭に`_`をつけて置かないとbuild時に警告が出る(なので、ホントは全部付けた方が良い)
    let _boolean: bool = true;
    
    // 型定義は書かなくても推論してくれる。
    let char2 = 'b';
    // 整数はi32がデフォルト
    let num4 = 10;
    // 小数の場合はf64がデフォルト
    let float2 = 1.41421356;
  
    // 変数は基本的にimmutable。
    let sample = 1000;
    // cannot assign twice to immutable variable `sample` と怒られる。
    // sample = 10;
  
    // mutをつけるとmutableになる
    let mut sample2 = 1;
    sample2 = 2;
    // mutableでも型は変えられない。
    // mismatched types expected integer, found `bool` と怒られる。
    // sample2 = true;
    // 変数はshadowingで上書き可能
    let sample2 = true;
  
    // 配列。[型; 要素数]で型定義できる
    let list: [i32; 3] = [1, 3, 5];
    // タプル。(型, 型,...)で型定義できる
    let tuple: (i32, bool, char) = (1, true, 'c');

    // `struct_sample.rs`の`struct_sample`を実行
    struct_sample::struct_sample();
  }
  