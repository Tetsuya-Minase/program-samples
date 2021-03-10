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
      count: 3,
      data: [
        {id: 1, value: 'サンプルプログラムを書く', completionDate: '2021-03-10', isCompleted: true},
        {id: 2, value: 'テストコード書く', completionDate: '2021-03-11', isCompleted: false},
        {id: 3, value: '記事を書く', completionDate: '2021-03-12', isCompleted: false},
      ]
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
