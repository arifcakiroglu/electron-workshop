/*
 * Nodeschool Istanbul
 * author: Arif Cakiroglu <arif@linux.com> (http://github.com/arifcakiroglu)
 */

const app = require( 'app' );
const BrowserWindow = require( 'browser-window' );

let mainWindow = null;

app.on( 'ready', function() {

 /* [options Object]

    width Integer - Window's width in pixels. Default is 800.
    height Integer - Window's height in pixels. Default is 600.
    x Integer - Window's left offset from screen. Default is to center the window.
    y Integer - Window's top offset from screen. Default is to center the window.
    useContentSize Boolean - The width and height would be used as web page's size, which means the actual window's size will include window frame's size and be slightly larger. Default is false.
    center Boolean - Show window in the center of the screen.
    minWidth Integer - Window's minimum width. Default is 0.
    minHeight Integer - Window's minimum height. Default is 0.
    maxWidth Integer - Window's maximum width. Default is no limit.
    maxHeight Integer - Window's maximum height. Default is no limit.
    resizable Boolean - Whether window is resizable. Default is true.
    movable Boolean - Whether window is movable. This is not implemented on Linux. Default is true.
    minimizable Boolean - Whether window is minimizable. This is not implemented on Linux. Default is true.
    maximizable Boolean - Whether window is maximizable. This is not implemented on Linux. Default is true.
    closable Boolean - Whether window is closable. This is not implemented on Linux. Default is true.
    alwaysOnTop Boolean - Whether the window should always stay on top of other windows. Default is false.
    fullscreen Boolean - Whether the window should show in fullscreen. When explicity set to false the fullscreen button will be hidden or disabled on OS X. Default is false.
    fullscreenable Boolean - Whether the maximize/zoom button on OS X should toggle full screen mode or maximize window. Default is true.
    skipTaskbar Boolean - Whether to show the window in taskbar. Default is false.
    kiosk Boolean - The kiosk mode. Default is false.
    title String - Default window title. Default is "Electron".
    icon NativeImage - The window icon, when omitted on Windows the executable's icon would be used as window icon.
    show Boolean - Whether window should be shown when created. Default is true.
    frame Boolean - Specify false to create a Frameless Window. Default is true.
    acceptFirstMouse Boolean - Whether the web view accepts a single mouse-down event that simultaneously activates the window. Default is false.
    disableAutoHideCursor Boolean - Whether to hide cursor when typing. Default is false.
    autoHideMenuBar Boolean - Auto hide the menu bar unless the Alt key is pressed. Default is false.
    enableLargerThanScreen Boolean - Enable the window to be resized larger than screen. Default is false.
    backgroundColor String - Window's background color as Hexadecimal value, like #66CD00 or #FFF or #80FFFFFF (alpha is supported). Default is #FFF (white).
    hasShadow Boolean - Whether window should have a shadow. This is only implemented on OS X. Default is true.
    darkTheme Boolean - Forces using dark theme for the window, only works on some GTK+3 desktop environments. Default is false.
    transparent Boolean - Makes the window transparent. Default is false.
    type String - The type of window, default is normal window. See more about this below.
    titleBarStyle String - The style of window title bar. See more about this below.
    webPreferences Object - Settings of web page's features. See more about this below.
    */

  let options = {
    width: 600,
    height: 400,
    title : "Electron app"
  };

  mainWindow = new BrowserWindow(options);
  mainWindow.loadURL( 'file://' + __dirname + '/index.html' );
});
