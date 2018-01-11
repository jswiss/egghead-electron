const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
require('electron-debug')({ showDevTools: true });
let windows = [];
const { setMainMenu } = require('./main-menu.js');

function sendWindowCount() {
  windows.forEach(win => {
    win.webContents.send('window-count', { count: windows.length });
  });
}

function createBrowserWindow(browserWindowOpts) {
  let win = new BrowserWindow(Object.assign({
    width: 500,
    height: 400
  }, browserWindowOpts));

  windows.push(win);
  win.loadURL(path.join('file://', __dirname, 'index.html'));

  win.on('close', () => {
    windows.splice(windows.indexOf(win), 1);
    sendWindowCount();
  });
}



// app.on('ready', () => {
//   mainWindow = new BrowserWindow({
//     show: false,
//   });
//   mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
//   mainWindow.on('ready-to-show', () => {
//     mainWindow.show();
//     setMainMenu(mainWindow);
//   });
// });


app.on('ready', () => {
  createBrowserWindow();
  ipcMain.on('create-window', (event, props) => createBrowserWindow(props));
  ipcMain.on('get-window-count', sendWindowCount);
});






