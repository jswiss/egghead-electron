const { ipcRenderer } = require('electron');

const versionEl = document.querySelector('#version');
const newWindowButton = document.querySelector('#new-window');
const countEl = document.querySelector('#count');

ipcRenderer.on('window-count', (event, props) => {
  countEl.textContent = props.count;
});

ipcRenderer.send('get-window-count');


// NodeJS has a process global. Neat!
versionEl.innerHTML = process.versions.electron;
console.log(process.versions);

newWindowButton.addEventListener('click', () => {
  ipcRenderer.send('create-window', {
    x: 0,
    y: 0
  });
});