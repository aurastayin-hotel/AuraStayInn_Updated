const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    title: "Hotel AURA Stay Inn", // Set your app name
    icon: path.join(__dirname, 'Hotel AURA Stay Inn.ico'), // Windows App Logo
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Option A: Load your Vercel Hosted Web App URL
  mainWindow.loadURL('https://hotel-aura-stay-in.vercel.app/');

  // Option B: Or load local index.html directly
  mainWindow.loadFile('index.html');

  // Remove default menu bar (optional)
  mainWindow.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});