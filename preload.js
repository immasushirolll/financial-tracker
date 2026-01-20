console.log("preload loaded");

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    saveToJSON: (data) => ipcRenderer.send("save-to-json", data),
    router: (page) => ipcRenderer.send("router", page)
});
