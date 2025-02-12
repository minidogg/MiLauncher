import * as constants from './constants.js'
import indexHtml from './_index.html'
import styleCss from './_style.css'
import * as games from './games.js'

window.addEventListener("beforeunload", (ev)=>{
    ev.returnValue = "a"
    ev.preventDefault()
    return "aa"
})

document.body.innerHTML = indexHtml
document.querySelector("#style").innerHTML = styleCss

games.Init()
games.AppendAllGames()