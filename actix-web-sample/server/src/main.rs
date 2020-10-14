use actix_files;
use actix_web::{web, App, HttpResponse, HttpServer, Responder, Result};

async fn index() -> Result<actix_files::NamedFile> {
    Ok(actix_files::NamedFile::open("target/public/index.html")?)
}

// `#[get(...)]`を指定しないと使うときに指定するときもできる
async fn manual_greet() -> impl Responder {
    HttpResponse::Ok().body("Hey! Hey!! Hey!!!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
        // ルートにアクセスされたときは`index.html`を返す
        .route("/", web::get().to(index))
        // routingを指定していない関数には、ここで指定することができる
        // ↓であれば、`/hey`にgetのリクエストが来たとき
        .route("/hey", web::get().to(manual_greet))
        // 上記までにマッチしなければ、フォルダに飛ばす
        .service(actix_files::Files::new("", "target/public"))
        // どこにもマッチしなければ`index.html`を返す
        .default_service(
            web::route().to(index)
        )
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
