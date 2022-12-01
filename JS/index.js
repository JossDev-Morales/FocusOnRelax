let display = "focus"

let btnHome = document.querySelector(".home-s")
let btnRelax = document.querySelector(".relax-s")
let btnAlarm = document.querySelector(".Alarm-s")
let btnToDo = document.querySelector(".toDo-s")
let btnConfig = document.querySelector(".conf-s")

//displays
//bar
let barhome = document.querySelector(".home-b")
let barFOR = document.querySelector(".relax-b")
let barAlarm = document.querySelector(".ALARM-b")
let barToDO = document.querySelector(".toDo-b")
//content
let conthome= document.querySelector(".home-m")
let contFOR= document.querySelector(".FOR-m")
let contalarm= document.querySelector(".Alarm-m")
let contToDo= document.querySelector(".toDo-m")
//confbar
let confbar = document.querySelector(".configuracion")
//configdisplay

btnConfig.addEventListener("click",()=>{
	confbar.classList.toggle("focus")
})

btnHome.addEventListener("click", ()=>{
	barToDO.classList.remove("focus")
	barAlarm.classList.remove("focus")
	barFOR.classList.remove("focus")
	barhome.classList.add("focus")
	//content
	contalarm.classList.remove("focus")
	contFOR.classList.remove("focus")
	contToDo.classList.remove("focus")
	conthome.classList.add("focus")
	confbar.classList.remove("focus")
})
btnRelax.addEventListener("click",()=>{
	barhome.classList.remove("focus")
	barAlarm.classList.remove("focus")
	barToDO.classList.remove("focus")
	barFOR.classList.add("focus")
	//content
	contalarm.classList.remove("focus")
	contFOR.classList.add("focus")
	contToDo.classList.remove("focus")
	conthome.classList.remove("focus")
	confbar.classList.remove("focus")
})
btnAlarm.addEventListener("click", ()=>{
	barFOR.classList.remove("focus")
	barToDO.classList.remove("focus")
	barhome.classList.remove("focus")
	barAlarm.classList.add("focus")
	//content
	contalarm.classList.add("focus")
	contFOR.classList.remove("focus")
	contToDo.classList.remove("focus")
	conthome.classList.remove("focus")
	confbar.classList.remove("focus")
})
btnToDo.addEventListener("click", ()=>{
	barAlarm.classList.remove("focus")
	barFOR.classList.remove("focus")
	barhome.classList.remove("focus")
	barToDO.classList.add("focus")
	//content
	contalarm.classList.remove("focus")
	contFOR.classList.remove("focus")
	contToDo.classList.add("focus")
	conthome.classList.remove("focus")
	confbar.classList.remove("focus")
})