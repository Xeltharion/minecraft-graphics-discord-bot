const forever = require("forever");
const fs = require("fs");
let date = new Date();
let logDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

if (!fs.existsSync("logs")) {
  fs.mkdirSync("logs");
}

forever.startDaemon("bot.js", {
  silent: false,
  uid: `minecraft-graphics`,
  killTree: true,
  watch: true,
  watchIgnoreDotFiles: false,
  watchIgnorePatterns: [".git", "logs/*", "logs"],
  watchDirectory: __dirname,
  logFile: `minecraft-graphics-daemon.log`,
  outFile: `logs/run-${logDate}.log`,
  errFile: `logs/err-${logDate}.log`,
  append: true
});
