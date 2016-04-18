/*
 * Nodeschool Istanbul
 * author: Arif Cakiroglu <arif@linux.com> (http://github.com/arifcakiroglu)
 */

const app = require( 'app' );
const BrowserWindow = require( 'browser-window' );
const dialog = require('dialog');

let mainWindow = null;

app.on( 'ready', function() {
  let options = {
    width: 900,
    height: 600,
    title : "Dialog Example"
  };

  mainWindow = new BrowserWindow(options);
  mainWindow.loadURL( 'file://' + __dirname + '/index.html' );
});
