/*
 * Nodeschool Istanbul
 * author: Arif Cakiroglu <arif@linux.com> (http://github.com/arifcakiroglu)
 */

 const electron = require('electron');
 const app = electron.app;
 const Menu = electron.Menu;
 const Tray = electron.Tray;
 const path = require('path');
 const BrowserWindow = require('browser-window');

 let iconPath = path.join(__dirname, 'tray.png');
 let NotiIconPath = path.join(__dirname, 'tray-notification.png');

 let appIcon = null;
 let win = null;

 app.on('ready', function(){

   appIcon = new Tray(iconPath);

   win = new BrowserWindow({show: false});

   let i = 0;

   setInterval(function(){
     if(i){
       appIcon.setImage(NotiIconPath)
       i = 0
     }else{
       appIcon.setImage(iconPath)
       i = 1
     }
   },1000)

   let contextMenu = Menu.buildFromTemplate([
     {
      label: 'Toggle DevTools',
      accelerator: 'Alt+Command+I',
      click: function() {
        win.show();
        win.toggleDevTools();
      }
     },
     { label: 'Item2', type: 'radio' },
     { label: 'Item3', type: 'radio', checked: true },
   ]);
   appIcon.setToolTip('This is my application.');
   appIcon.setContextMenu(contextMenu);
 });
