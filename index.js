const btn =document.querySelector(".btn")
const nav =document.querySelector(".nav__menu")
const link =document.querySelectorAll(".link")


btn.addEventListener("click",()=>{
    btn.classList.toggle("active")
    nav.classList.toggle("active")
})
link.forEach((l)=>{
    l.addEventListener("click",()=>{
        nav.classList.toggle("active")
        btn.classList.toggle("active")
    })
})
