import path from 'path'
import fs from 'fs'

let bundleJS = fs.readFileSync("./dist/bundle.js", "utf-8")
let outputButton = `<button onclick='let win = window.open("https://google.com");win.eval(atob("${btoa(bundleJS)}"))'>Start</button>`
fs.writeFileSync("./dist/button.txt", outputButton, "utf-8")