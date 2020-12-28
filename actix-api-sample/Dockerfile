FROM rust AS builder
WORKDIR /actix-api-sample
COPY Cargo.toml Cargo.toml
COPY Cargo.lock Cargo.lock

RUN mkdir src &&\
    echo "fn main(){}" > src/main.rs &&\
    cargo build --release
COPY ./src ./src

RUN rm -f target/release/deps/actix-api-sample* &&\
    cargo build --release 

FROM debian

COPY --from=builder /actix-api-sample/target/release/actix-api-sample /usr/local/bin/actix-api-sample
CMD ["actix-api-sample"]
