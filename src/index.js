import * as constants from './constants.js'
import indexHtml from './_index.html'
import styleCss from './_style.css'
import * as games from './games.js'

console.log("%cMiLauncher "+constants.version, "color:#ff00ff;font-size:25px;")

window.addEventListener("beforeunload", (ev)=>{
    ev.returnValue = "a"
    ev.preventDefault()
    return "aa"
})

document.body.innerHTML = indexHtml
document.querySelector("#style").innerHTML = styleCss

games.AppendAllGames()