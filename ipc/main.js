/*
 * Nodeschool Istanbul
 * author: Arif Cakiroglu <arif@linux.com> (http://github.com/arifcakiroglu)
 */

var app = require('app')
var BrowserWindow = require('browser-window')
var ipc = require('ipc')

let mainWindow = null;

app.on('ready', function () {
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    'min-width': 500,
    'min-height': 200,
    'accept-first-mouse': true,
    'title-bar-style': 'hidden'
  })
  mainWindow.loadUrl('file://' + __dirname + '/index.html')
  //mainWindow.openDevTools()

  var prefsWindow = new BrowserWindow({
    width: 500,
    height: 500,
    show: false,
    title: 'Preferences'
  })
  prefsWindow.loadUrl('file://' + __dirname + '/prefs.html')

  ipc.on('toggle-prefs', function () {
    if (prefsWindow.isVisible())
      prefsWindow.hide()
    else
      prefsWindow.show()
  })
})
