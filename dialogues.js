const { dialog, app, nativeImage } = require('electron');
const fs = require('fs');
const path = require('path');

function showMessage(browserWindow) {
  dialog.showMessageBox(browserWindow, {
    // changes appearance on Windows, does nothing on Mac
    type: 'info',
    icon: nativeImage.createFromPath('./kitten.jpg'),
    message: 'Hello',
    detail: 'Just a friendly meow',
    buttons: ['Meow', 'Close'],
    defaultId: 0
  }, (clickedIndex) => {
    console.log(clickedIndex);
  });
}

module.exports = {
  showMessage,
}