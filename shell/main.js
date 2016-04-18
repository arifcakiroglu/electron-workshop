/*
 * Nodeschool Istanbul
 * author: Arif Cakiroglu <arif@linux.com> (http://github.com/arifcakiroglu)
 */

 const shell = require('electron').shell;

 shell.openExternal('https://nodeschool.io/istanbul');

 /*
 * Shell Api: https://github.com/electron/electron/blob/master/docs/api/shell.md
 *
 * shell.openExternal(URL)
 * shell.showItemInFolder(fullPath) - example: shell.showItemInFolder(__dirname)
 * shell.beep()
 * shell.openItem(fullPath) - example: shell.openItem(__dirname)
 * shell.moveItemToTrash(fullPath) - example: Nooo! Don't Even Think About It :)
 */
