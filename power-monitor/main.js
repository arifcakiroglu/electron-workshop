/*
 * Nodeschool Istanbul
 * author: Arif Cakiroglu <arif@linux.com> (http://github.com/arifcakiroglu)
 */

 const electron = require('electron');
 const app = electron.app;

 var mainWindow;

 app.on('ready', function() {

   // Only Windows
   electron.powerMonitor.on('on-battery',function(){
     console.log('The system changes to battery power.');
   });

  electron.powerMonitor.on('suspend', function() {
    console.log('The system is going to sleep');
  });

 });
