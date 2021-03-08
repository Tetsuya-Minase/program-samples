const http = require('http');
const port = 8080;

const sendResponse = (statusCode, body, response) => {
  response.writeHead(statusCode, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'OPTIONS, POST, GET', 'Access-Control-Max-Age': 2592000, 'Access-Control-Allow-Headers': '*' });
  response.end(JSON.stringify(body));
}

const router = (request, response) => {
  const path = request?.url;
  const method = request?.method;

  if (!path.startsWith('/api/v1')) {
    sendResponse(404, { result: 'not found' }, response);
    return;
  }
  if (path.endsWith('/json/sample') && method === 'GET') {
    const result = {
      key: 'sample',
      data: {
        hoge: {
          id: 1,
          value: 'hogehoge'
        },
        huga: {
          id: 2,
          value: 'hugahuga'
        },
        piyo: {
          id: 3,
          value: 'piyopiyo'
        }
      }
    }
    sendResponse(200, result, response);
    return;
  }
  if (path.endsWith('/json/sample') && method === 'POST') {
    sendResponse(200, { result: request.body }, response);
    return;
  }
  sendResponse(200, { result: 'OK' }, response);
}

const server = http.createServer((request, response) => {
  process.on('uncaughtException', (e) => console.log(e));
  router(request, response);
});
server.listen(port, '127.0.0.1', () => {
  console.log(`server start! port: ${port}`);
});
