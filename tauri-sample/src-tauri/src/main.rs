#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::{
  generate_context,
  command,
  Builder,
  Menu,
  generate_handler
};

#[command]
fn custom_greet(name: String) -> String {
  format!("Hello {}!", name).into()
}

fn main() {
  let context = generate_context!();
  Builder::default()
    .menu(Menu::os_default(&context.package_info().name))
    .invoke_handler(generate_handler![custom_greet])
    .run(context)
    .expect("error while running tauri application");
}
