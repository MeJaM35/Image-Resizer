const { app, BrowserWindow } = require('electron');
const path = require('path');

const isMac = process.platform === 'darwin';

function main() {
    const mainWindow = new BrowserWindow({
        title:"Image Resizer",
        width:500,
        height:600
    });

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

app.whenReady().then(() => {
    main();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          main()
        }
      })
}
);


app.on('window-all-closed', () => {
    if (!isMac) {
      app.quit()
    }
  })