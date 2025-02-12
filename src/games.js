import { Launch } from "./launch.js"

export let games_data = [
    {name: "Hexbois", link:"https://hexbois.com", img:"https://hexbois.com/img/logo-curved-large.png"}
]

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

    games_data.forEach(game=>{
        console.log(game)
        let el = CreateGameEl(game)
        gameDivEl.appendChild(el)
    })
}