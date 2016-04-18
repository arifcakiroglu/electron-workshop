/*
 * Nodeschool Istanbul
 * author: Arif Cakiroglu <arif@linux.com> (http://github.com/arifcakiroglu)
 */

const app = require( 'app' );
const BrowserWindow = require( 'browser-window' );
let mainWindow = null;

let ApplicationMenu, Menu;
Menu = require('menu');

ApplicationMenu = function(){
  var mainMenu = Menu.buildFromTemplate([
    {
      label : 'Test',
      submenu : [
        { label: 'Hello' },
        { label: 'Nodeschool' },
        { label: 'Istanbul' }
      ]
    },
    {
      label : 'Test',
      submenu : [
        { label: 'Hello' },
        { label: 'Nodeschool' },
        { label: 'Istanbul' }
      ]
    }
  ]);
  app.setApplicationMenu(mainMenu);
};


app.on( 'ready', function() {

  let options = {
    width: 600,
    height: 400,
    title : "Menu example"
  };

  ApplicationMenu();

  mainWindow = new BrowserWindow(options);
  mainWindow.loadURL( 'file://' + __dirname + '/index.html' );
});
