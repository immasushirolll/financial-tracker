const { app, BrowserWindow, ipcMain } = require('electron/main')
const fs = require('fs');
const path = require('path');
const JSON_PATH = "/home/immasushiroll/Windows/Users/jane8/repos/financial-tracker/data.json";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true,
        nodeIntegration: false
    },
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

// ipcMain is an Event Emitter that handles asynchronous and synchronous messages sent from a web page
// save-to-csv is the channel name, from preload.js
ipcMain.on("save-to-json", (event, value) => {
    let data = [];
    if (fs.existsSync(JSON_PATH)) {
        try {
            data = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
        } catch (err) {
            console.error("Invalid JSON:", err);
            return;
        }
  }

//   this is where the actual "data" schema can be defined
    data.push({ 
        Name: value,    // change value var name to smth better
        timestamp: new Date().toISOString()
    });

    fs.writeFileSync(JSON_PATH, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error("Error writing JSON:", err);
        }
    });
});

app.on("window-all-closed", () => {
    app.quit();
});