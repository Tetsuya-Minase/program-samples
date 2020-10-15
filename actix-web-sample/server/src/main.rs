use actix_files;
use actix_web::{web, App, HttpResponse, HttpServer, Responder, Result};
use serde::Serialize;

async fn index() -> Result<actix_files::NamedFile> {
    Ok(actix_files::NamedFile::open("target/public/index.html")?)
}

// 返したいデータ
// json文字列化したいため`#[derive(Serialize)]`をつける
// Serializeは返却する構造体全てにつける必要がある
// →`SecondDataResponse`にだけ付けてもエラーになる
#[derive(Serialize)]
struct SecondData {
    id: i32,
    name: String,
}
// レスポンス用のデータ
#[derive(Serialize)]
struct SecondDataResponse {
    // ↑で定義した構造体のリストを返却する
    list: Vec<SecondData>,
}

async fn first() -> impl Responder {
    // 文字列のリストを作成
    let first_data: Vec<String> = vec!["hoge".to_owned(), "huga".to_owned(), "piyo".to_owned()];
    // リストから文字列へ変換
    let first_data_response = serde_json::to_string(&first_data).unwrap();
    // `ContentType: application/json`で返却
    HttpResponse::Ok()
        .content_type("application/json")
        .body(first_data_response)
}
async fn second() -> impl Responder {
    // 返却用データを作成
    let data: Vec<SecondData> = vec![
        SecondData {
            id: 1,
            name: "hoge".to_owned(),
        },
        SecondData {
            id: 2,
            name: "huga".to_owned(),
        },
        SecondData {
            id: 3,
            name: "piyo".to_owned(),
        },
    ];
    // SecondDataResponseに合わせた上で文字列化
    let second_data_response = serde_json::to_string(&SecondDataResponse { list: data }).unwrap();

    HttpResponse::Ok()
        .content_type("application/json")
        .body(second_data_response)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            // ルートにアクセスされたときは`index.html`を返す
            .route("/", web::get().to(index))
            .service(
                // scopeを指定することで以降指定するrouteは`/api`が先頭についているのと同義になる
                web::scope("/api")
                    // ここは`/api/first`にリクエストが来たとき
                    .route("/first", web::get().to(first))
                    // ここは`/api/second`にリクエストが来たとき
                    .route("/second", web::get().to(second)),
            )
            // 上記までにマッチしなければ、フォルダに飛ばす
            .service(actix_files::Files::new("", "target/public"))
            // どこにもマッチしなければ`index.html`を返す
            .default_service(web::route().to(index))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
