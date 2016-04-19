/*
 * Nodeschool Istanbul
 * author: Arif Cakiroglu <arif@linux.com> (http://github.com/arifcakiroglu)
 */

 const app = require( 'app' );
 const BrowserWindow = require( 'browser-window' );


 let mainWindow = null;

 app.on( 'ready', function() {
  
   let options = {
     width: 600,
     height: 400,
     title : "Electron app"
   };

   mainWindow = new BrowserWindow(options);
   mainWindow.loadURL( 'file://' + __dirname + '/index.html' );
 });
