# ActixWebSample
ActixWeb + Angularのサンプル

# 起動方法
```
$ npm run build
$ cd server
$ cargo run
```

# 動作確認
## localhost:8080/
Angularのページが表示される

## localhost:8080/api/〜
以下2つの実装しているパスであれば、ページでなく文字列が返ってくる

* localhost:8080/api/first
* localhost:8080/api/second

## 実装していないパス
`/`にリダイレクトされAngularのページが表示されること。