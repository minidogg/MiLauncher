import { Launch } from "./launch.js"

import data from './data.json'

function CreateGameEl({name, link, img}){
    let div = document.createElement("div")
    div.classList.add("game")

    let icon = document.createElement("img")
    icon.src = img
    div.appendChild(icon)

    let title = document.createElement("p")
    title.textContent = name
    div.appendChild(title)

    div.addEventListener("click", ()=>{Launch(link)})

    return div
}

export function AppendAllGames(){
    const gameDivEl = document.querySelector("#games")

    console.log(data.game_data)

    data.game_data.forEach(game=>{
        console.log(game)
        let el = CreateGameEl(game)
        gameDivEl.appendChild(el)
    })
}