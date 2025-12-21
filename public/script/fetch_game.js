const form = document.querySelector("form")

const linkError = document.querySelector(".link.error")
const nameError = document.querySelector(".name.error")
const descError = document.querySelector(".description.error")

form.addEventListener("submit", async(e)=>{
    linkError.textContent = ""    
    nameError.textContent = ""    
    descError.textContent = ""    
    e.preventDefault()
    const link = form.link.value
    const name = form.name.value
    const description = form.description.value
    try{
      const res = await fetch("/home/game/register",{
            method: "POST",
            body: JSON.stringify({link,name, description}),
            headers: {"Content-Type": "application/json"}
        })
    const data = await res.json()
    console.log(data)
    if(data.error){
        linkError.textContent = data.error.link
        nameError.textContent = data.error.name
        descError.textContent = data.error.description
    }
    }catch(err){
        console.error(err)
    }
})