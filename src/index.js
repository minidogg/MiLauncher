import indexHtml from './_index.html'
import styleCss from './_style.css'
import noChromiumHtml from './_no_chromium.html'

import * as constants from './constants.js'
import * as games from './games.js'
import * as launch from './launch.js'

let isChromium = !!window.chrome;

window.addEventListener("beforeunload", (ev)=>{
    ev.returnValue = "a"
    ev.preventDefault()
    return "aa"
})

document.body.innerHTML = isChromium?indexHtml:noChromiumHtml
document.querySelector("#style").innerHTML = styleCss

if(isChromium){
    launch.Init()
    games.Init()
    games.AppendAllGames()
}