let remote = require('remote');
let win = remote.getCurrentWindow();

document.getElementById("minimize").addEventListener("click", function (e) {
  win.minimize();
});

document.getElementById("maximize").addEventListener("click", function (e) {
  win.maximize();
});

document.getElementById("close").addEventListener("click", function (e) {
  win.close();
});
