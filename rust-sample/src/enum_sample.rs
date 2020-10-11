enum WebEvent {
  // Unitっぽい定義
  PageLoad,
  PageUnload,
  // タプルっぽい定義もできる
  KeyPress(char),
  Paste(String),
  // c言語風構造体っぽくも定義できる
  Click { x: i32, y: i32 },
}

// 名称が長すぎるか一般的な場合、TypeAliasを使って変更できる
enum VeryVerboseEnumOfThingsToDoWithNumbers {
  Add,
  Subtract,
}
// type alias作成
type Operations = VeryVerboseEnumOfThingsToDoWithNumbers;
// これがよく使われるのはimplブロックでselfを参照したとき。
impl VeryVerboseEnumOfThingsToDoWithNumbers {
  fn run(&self, x: i32, y: i32) -> i32 {
    match self {
      Self::Add => x + y,
      Self::Subtract => x - y,
    }
  }
}

// 渡されたWebEvent野無いようによって出力する文字を変える
fn inspect(event: WebEvent) {
  match event {
    WebEvent::PageLoad => println!("page loaded"),
    WebEvent::PageUnload => println!("page unloaded"),
    // enumから値を取り出す
    WebEvent::KeyPress(c) => println!("pressed '{}'.", c),
    WebEvent::Paste(s) => println!("pasted \"{}\".", s),
    // clickから値を取り出す
    WebEvent::Click { x, y } => {
      println!("clicked at x={}, y={}.", x, y);
    }
  }
}

pub fn enum_sample() {
  // KeyPressにxを渡す
  let pressed_key = WebEvent::KeyPress('x');
  // Paseteに文字列を渡す(`.to_owned`でStringに変換)
  let pasted = WebEvent::Paste("my text".to_owned());
  let click = WebEvent::Click { x: 20, y: 80 };
  let load = WebEvent::PageLoad;
  let unload = WebEvent::PageUnload;

  inspect(pressed_key);
  inspect(pasted);
  inspect(click);
  inspect(load);
  inspect(unload);

  // type aliasを介して参照できる
  let add = Operations::Add;
}
