use actix_files;
use actix_web::{get, web, App, HttpResponse, HttpServer, Responder, Result};

// こう書くことで、`/`にGetのリクエストが来たときのハンドリングができる
#[get("/")]
async fn index() -> Result<actix_files::NamedFile> {
    println!("indexだよ");
    Ok(actix_files::NamedFile::open("target/debug/public/index.html")?)
}

// `#[get(...)]`を指定しないと使うときに指定するときもできる
async fn manual_greet() -> impl Responder {
    HttpResponse::Ok().body("Hey! Hey!! Hey!!!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
        // マクロでroutingを指定した関数はserviceに渡せばOK
        .service(actix_files::Files::new("", "target/debug/public").show_files_listing())
        .service(index)
        // routingを指定していない関数には、ここで指定することができる
        // ↓であれば、`/hey`にgetのリクエストが来たとき
        .route("/hey", web::get().to(manual_greet))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
