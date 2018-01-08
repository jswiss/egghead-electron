const { app, Menu } = require('electron');
const { showMessage } = require('./dialogues.js');
const isWindows = process.platform === 'win32';


function setMainMenu(mainWindow) {
  const template = [
    {
      label: isWindows ? 'File' : app.getName(),
      submenu: [
        {
          label: 'Say Hello',
          click() {
            showMessage(mainWindow);
          }
        },
        {
          label: 'Save Memory Usage Info',
          click() {

          }
        },
        {
          label: 'Open File',
          click() {

          }
        },
        {
          label: isWindows ? 'Exit' : `Quit ${app.getName()}`,
          accelerator: isWindows ? 'Alt+F4' : 'CmdOrCtrl+Q',
          click() {
            app.quit();
          }
        },
        { type: 'separator' },
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        // does nothing, just a visual line
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectall' },
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

module.exports = {
  setMainMenu,
}