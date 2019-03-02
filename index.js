const electron = require('electron');
const path = require('path');

const {
    app,
    BrowserWindow
} = electron;

app.on('ready', () => {
    //console.log(path.resolve("./index.html"));
    var startPage = path.resolve("./index.html");
    const mainWindow = new BrowserWindow({});
    mainWindow.loadURL(startPage);
});