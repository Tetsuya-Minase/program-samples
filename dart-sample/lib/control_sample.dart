String checkNull(String str) {
  // nullじゃなければstrを返却。nullなら`??`より後の値が返却。
  return str ?? 'nullだったよ';
}
