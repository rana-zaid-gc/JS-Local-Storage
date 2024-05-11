const username = document.getElementById("username")
const button = document.getElementById("button")

const uname = document.getElementById("uname")

button.addEventListener("click", () => {
    const value = username.value
    console.log(value)
    localStorage.setItem("name",value);
    location.reload();
})

window.addEventListener("load", ()=>{
    const value =localStorage.getItem("name");
    uname.innerText= value ;
})
