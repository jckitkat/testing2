const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

function openWindow(url) {
  var openedWindow = window.open(url, "self", "toolbars=yes")
  await delay(1000)
  openedWindow.document.body.innerHTML = '<h1>"test"</h1>'
}

openWindow('https://chrome.google.com/webstorex')
