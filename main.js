const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 250,
    height: 380,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'icons-timer-96.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.setResizable(false)
  win.loadFile('index.html')

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

try {
  require('electron-reloader')(module)
} catch (_) {}