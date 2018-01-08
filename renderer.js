const versionEl = document.querySelector('#version');

// NodeJS has a process global. Neat!
versionEl.innerHTML = process.versions.electron;
console.log(process.versions)