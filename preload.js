const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  saveToJSON: (value) => ipcRenderer.send("save-to-json", value)
});
