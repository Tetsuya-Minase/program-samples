function doGet() {
    const resData = JSON.stringify({ message: 'Hello World!' });
    // ContentServiceを利用して、responseを作成
    // そのまま返してもエラーになる
    ContentService.createTextOutput();
    const output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent(resData);
    // return response-data
    return output;
}