pub mod http_client_module {
  use actix_web::client::{Client, Connector};
  use openssl::ssl::{SslConnector, SslMethod};

  pub async fn get() -> String {
    let builder = SslConnector::builder(SslMethod::tls()).unwrap();
    let client = Client::builder()
        .connector(Connector::new().ssl(builder.build()).finish())
        .finish();
    let result = client
      .get("https://test.server/api/v1/json")
      .send()
      .await
      .unwrap()
      .body()
      .limit(20_000_000) // 最大payloadサイズ
      .await
      .unwrap();
   
    result.iter().map(|&s| s as char).collect::<String>()
  }
}
