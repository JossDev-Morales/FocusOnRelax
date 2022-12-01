//select
let typeSelect2B = document.querySelector(".typeT")
let typeSelect = document.querySelector(".typeS")
//li
let typeItem
let li1 = document.querySelector(".Verde")
let li2 = document.querySelector(".Amarillo")
let li3 = document.querySelector(".Rojo")
//actions

typeSelect2B.addEventListener("click", ()=>{
    typeSelect.classList.toggle("focus")
})
//li Actions    
document.addEventListener("click", (e)=>{
    if (e.target != typeSelect2B && e.target != typeSelect) {
        typeSelect.classList.remove("focus")
    }
    
})