use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};

// こう書くことで、`/`にGetのリクエストが来たときのハンドリングができる
#[get("/")]
async fn greet() -> impl Responder {
    // ステータス200(OK)で、bodyに`Hello world!`を入れて返す
    HttpResponse::Ok().body("Hello world!")
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
        .service(greet)
        // routingを指定していない関数には、ここで指定することができる
        // ↓であれば、`/hey`にgetのリクエストが来たとき
        .route("/hey", web::get().to(manual_greet))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
