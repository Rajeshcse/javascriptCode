//  *************** Electron part **************************
console.log("App Connected !");
("use strict");
const electron = require("electron");
const apps = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;
require("electron-reload")(__dirname, {
  electron: path.join(__dirname, "node_modules", ".bin", "electron"),
});

function createWindow() {
  win = new BrowserWindow({
    title: "Image Shrink",
    width: 700,
    height: 800,
  });

  // win.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, "index.html"),
  //     protocol: "file",
  //     slashes: true,
  //   })
  // );

  win.loadFile("./index.html");

  // win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

apps.on("ready", createWindow);

apps.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    apps.quit();
  }
});

apps.on("activate", () => {
  if (win == null) {
    createWindow();
  }
});
