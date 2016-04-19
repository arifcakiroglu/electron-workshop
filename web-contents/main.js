/*
 * Nodeschool Istanbul
 * author: Arif Cakiroglu <arif@linux.com> (http://github.com/arifcakiroglu)
 */

 const app = require( 'app' );
 const BrowserWindow = require( 'browser-window' );
 const fs = require('fs');

 let mainWindow = null;

 app.on( 'ready', function() {

   let options = {
     width: 600,
     height: 400,
     title : "Electron app"
   };

   mainWindow = new BrowserWindow(options);
   mainWindow.loadURL( 'http://github.com' );


   mainWindow.webContents.on('did-finish-load', function() {

     let title = mainWindow.webContents.getTitle();
     mainWindow.webContents.insertCSS('* {color: red !important }');

     console.log(title);

     mainWindow.webContents.printToPDF({}, function(error, data) {
        if (error) throw error;
        fs.writeFile(  __dirname + "/" + title + ".pdf", data, function(error) {
          if (error)
            throw error;
          console.log("Write PDF successfully.");
        })
      });

   });

 });
