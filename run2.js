
function openWindow(url) {
  var openedWindow = window.open(url, "self", "toolbars=yes")
  openedWindow.document.body.innerHTML = '<h1>"test"</h1>'
}

openWindow('https://chrome.google.com/webstorex')
