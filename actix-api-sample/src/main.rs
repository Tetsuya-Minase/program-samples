use actix_web::{
  delete, get, post, put, web, App, Error, HttpRequest, HttpResponse, HttpServer, Responder,
};
use futures::future::{ready, Ready};
use serde::Deserialize;
use serde::Serialize;
mod http_client;

#[derive(Deserialize)]
struct UserArticle {
  user_id: String,
  article_id: i32,
}
#[derive(Deserialize)]
struct ArticleQuery {
  start: i32,
  results: i32,
}
#[derive(Deserialize)]
struct User {
  user_id: String,
  name: String,
  age: i32,
}
#[derive(Serialize)]
struct UserResponse {
  user_id: String,
  name: String,
  age: i32,
}
impl Responder for UserResponse {
  type Error = Error;
  type Future = Ready<Result<HttpResponse, Error>>;
  fn respond_to(self, _req: &HttpRequest) -> Self::Future {
      let body = serde_json::to_string(&self).unwrap();
      ready(Ok(HttpResponse::Ok()
          .content_type("application/json")
          .body(body)))
  }
}

#[get("/users/{user_id}")]
async fn get(web::Path(user_id): web::Path<String>) -> impl Responder {
  HttpResponse::Ok().body(format!("user_id is {}", user_id))
}
#[get("/users/{user_id}/articles/{article_id}")]
async fn get_article(user_article: web::Path<UserArticle>) -> impl Responder {
  HttpResponse::Ok().body(format!(
      "user_id is {}. article_id is {}.",
      user_article.user_id, user_article.article_id
  ))
}
#[get("/articles")]
async fn get_articles(query: web::Query<ArticleQuery>) -> impl Responder {
  HttpResponse::Ok().body(format!(
      "start is {}. results is {}.",
      query.start, query.results
  ))
}
#[get("/json")]
async fn get_json() -> impl Responder {
  let result = http_client::http_client_module::get().await;
  HttpResponse::Ok()
  .content_type("application/json")
  .body(result)
}

#[post("/user")]
async fn post(user_data: web::Json<User>) -> impl Responder {
  UserResponse {
      user_id: user_data.user_id.clone(),
      name: user_data.name.clone(),
      age: user_data.age,
  }
}
#[put("/")]
async fn put() -> impl Responder {
  HttpResponse::Ok().body("put ok")
}
#[delete("/")]
async fn delete() -> impl Responder {
  HttpResponse::Ok().body("delete ok")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
  HttpServer::new(|| {
      App::new()
          .service(get)
          .service(get_article)
          .service(get_articles)
          .service(get_json)
          .service(post)
          .service(put)
          .service(delete)
  })
  // ローカルホストのport8080で起動
  .bind("127.0.0.1:8080")?
  .run()
  .await
}
