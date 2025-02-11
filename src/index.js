import * as constants from './constants.js'
import indexHtml from './_index.html'
import styleCss from './_style.css'

console.log("%cMiLauncher "+constants.version, "color:#ff00ff;font-size:25px;")

document.querySelector("body").innerHTML = indexHtml
document.querySelector("#style").innerHTML = styleCss