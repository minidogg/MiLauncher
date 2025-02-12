export function Launch(url){
    let win = window.open("https://classroom.google.com")
    win.document.write(/*html*/`
        <body style="margin:0;">
            <title>Home</title>

            <embed src="https://hexbois.com" style="width:100vw;height:100vh;">

            <script>
            window.addEventListener("beforeunload", (ev)=>{
                ev.returnValue = "a"
                ev.preventDefault()
                return "aa"
            })
            </script>
        </body>
    `)
    let icon = win.document.createElement("link")
    icon.rel = "icon"
    icon.href = "https://www.gstatic.com/classroom/ic_product_classroom_144.png"
    win.document.head.appendChild(icon);

    win.document.querySelector("embed").src = url
}