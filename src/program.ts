// **** Application entry point ****

import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

let mainWindow: Electron.BrowserWindow | null;

function createWindow() {

    mainWindow = new BrowserWindow({
        width: 700,
        height: 700,
        webPreferences: {
            experimentalFeatures: true, // enables css grids
        }
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "../assets/index.html"),
        protocol: 'file:',
        slashes: true,
        hash: "/"
    }));

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
