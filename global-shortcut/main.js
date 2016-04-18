/*
 * Nodeschool Istanbul
 * author: Arif Cakiroglu <arif@linux.com> (http://github.com/arifcakiroglu)
 */

 const electron = require('electron');
 const app = electron.app;
 const globalShortcut = electron.globalShortcut;

 app.on('ready', function() {
   globalShortcut.register('CommandOrControl+X', function() {
     console.log('CommandOrControl+X is pressed');
   });
 });

 app.on('will-quit', function() {
   globalShortcut.unregister('CommandOrControl+X');
   globalShortcut.unregisterAll();
 });
