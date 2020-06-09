const { app, BrowserWindow, screen } = require('electron');
const url = require('url');
const path = require('path');

let win = null;

function createWindow() {
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // ブラウザウインドウを作成
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    webPreferences: {
      nodeIntegration: true
    }
  })


  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // dev toolを開く
  win.webContents.openDevTools();

  win.on('closed', () => win = null);

  return win;
};

app.allowRendererProcessReuse = true;

app.on('ready', () => setTimeout(createWindow, 400));
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
