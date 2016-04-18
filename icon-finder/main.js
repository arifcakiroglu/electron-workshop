/*
 * Nodeschool Istanbul
 * author: Arif Cakiroglu <arif@linux.com> (http://github.com/arifcakiroglu)
 */

 // https://github.com/maxogden/menubar
 const menubar = require('menubar')

 let mb = menubar({
   height : 509,
   y : 30,
   "always-on-top": true,
   "showDockIcon": true
 })

 mb.on('ready', function ready () {
   console.log('running...')
 })
