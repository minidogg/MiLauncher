import { Launch } from "./launch.js"

import data from './data.json'

function CreateGameEl({name, link, img, standardBlank}){
    let div = document.createElement("div")
    div.classList.add("game")

    let icon = document.createElement("img")
    icon.src = img
    div.appendChild(icon)

    let title = document.createElement("p")
    title.textContent = name
    div.appendChild(title)

    div.addEventListener("click", ()=>{Launch(link, standardBlank)})

    return div
}

/** @type {HTMLDivElement} */
let gameDivEl;
export function Init(){
    gameDivEl = document.querySelector("#games")
    InitSearch()
}

/** @type {HTMLInputElement} */
let searchInput;
function InitSearch(){
    searchInput = document.querySelector("#search")
    searchInput.addEventListener("change", ()=>{
        let query = searchInput.value.toLowerCase()
        Array.from(gameDivEl.children).forEach(child=>{
            child.style.display = child.querySelector("p").textContent.toLowerCase().includes(query)?"block":"none"
        })
    })
}

export function AppendAllGames(){
    data.game_data.forEach(game=>{
        let el = CreateGameEl(game)
        gameDivEl.appendChild(el)
    })
}