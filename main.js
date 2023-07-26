const { app, BrowserWindow } = require('electron')
// const {menu} = require('menu.js')
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      minWidth:400,
      minHeight:400
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })