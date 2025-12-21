document.addEventListener("DOMContentLoaded", (e)=>{
    e.preventDefault()
    const form = document.querySelector("form");

    form.addEventListener("submit",async(e)=>{
        e.preventDefault()
        const user = form.user.value
        const pass = form.pass.value
        
    const res = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({user, pass}),
        headers: {"Content-Type": "application/json"}
    })
    } )
})