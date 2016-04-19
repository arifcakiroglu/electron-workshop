/*
 * Nodeschool Istanbul
 * author: Arif Cakiroglu <arif@linux.com> (http://github.com/arifcakiroglu)
 */

 const electron = require('electron');
 const app = electron.app;
 const BrowserWindow = electron.BrowserWindow;

 var mainWindow;

 app.on('ready', function() {
   var electronScreen = electron.screen;
   var size = electronScreen.getPrimaryDisplay().workAreaSize;

   console.log("Work Area Size:", size);
   console.log("Position of the Mouse Pointer:", electronScreen.getCursorScreenPoint());

   mainWindow = new BrowserWindow({ width: size.width, height: size.height });
 });
