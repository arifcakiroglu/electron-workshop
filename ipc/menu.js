var remote = require('remote')
var Menu = remote.require('menu')
var ipc = require('ipc')
var MenuItem = remote.require('menu-item')

// Build our new menu
var menu = new Menu()
menu.append(new MenuItem({
  label: 'Delete',
  click: function() {
    // Trigger an alert when menu item is clicked
    alert('Deleted')
  }
}))
menu.append(new MenuItem({
  label: 'More Info...',
  click: function() {
    // Trigger an alert when menu item is clicked
    alert('Here is more information')
  }
}))
menu.append(new MenuItem({
  label: 'Preferences',
  click: function() {
    ipc.send('toggle-prefs')
  }
}))

document.getElementById('preferences').addEventListener('click', function () {
  ipc.send('toggle-prefs')
});

// Add the listener
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.js-context-menu').addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    menu.popup(remote.getCurrentWindow());
    return false;
  }, false);
})
