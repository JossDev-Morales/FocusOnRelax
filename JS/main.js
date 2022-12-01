let arraynew=[]
if (localStorage.getItem("Tareas") == null) {
  localStorage.setItem("Tareas",'[]')
}


getTareasStorage().forEach(element => {
  
  arraynew.push(element)
});

let typeItem
let li1 = document.querySelector(".Normal")
let li2 = document.querySelector(".Importante")
let li3 = document.querySelector(".Urgente")



const input = document.querySelector(".itemtext");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector(".ul-do");
const empty = document.querySelector(".empty");
let typeE

setInterval(() => {
  document.addEventListener("click", (e)=>{
    if (e.target == li1) {
        typeItem = "Normal"
        
    } 
    if (e.target == li2) {
        typeItem = "Importante"
        
    } 
    if (e.target == li3) {
        typeItem = "Urgente"
        
    }
    
      
    
})
}, 1000);
function getTareasStorage() {
  const ArrayTareasStorage=JSON.parse(localStorage.getItem("Tareas"))
  return ArrayTareasStorage
}
function DatosTareas(elm1,elm2,elm3,elm4) {
  const TareaName = elm1.value
  const TareaType = elm2
  const TareaStatus = elm3
  const TareaContext = elm4
  const tareasobjeto= {TareaType,TareaStatus,TareaContext,TareaName} 

  return tareasobjeto
}
function reloadfunc() {
  const arrayLocalStorageTareas = getTareasStorage()
  arrayLocalStorageTareas.forEach(element => {
    const TiTarea = element.TareaName
    const TyTarea = element.TareaType
    const CoTarea = element.TareaContext
    onloadtareasConstructor(TiTarea,TyTarea,CoTarea)

  });
}
document.addEventListener("DOMContentLoaded",reloadfunc())
function onloadtareasConstructor(TI,TY,CO) {
  const text = TI
  typeE = document.createElement("div")
    typeE.setAttribute("class","typeitem")
    typeE.textContent=TY
    const contextLI = document.createElement("div")
    contextLI.setAttribute("class","textDiv")
    const liInpunt = document.createElement("textarea")
    liInpunt.setAttribute("class","textLI")
    liInpunt.setAttribute("placeholder","Agrega Contexto A Tu Tarea")
    liInpunt.textContent= CO
    contextLI.insertAdjacentElement("afterbegin",liInpunt)
    
    

    const inputE = document.createElement("input")
    inputE.setAttribute("type","checkbox")
    const DinputE = document.createElement("div")
    DinputE.setAttribute("class","checkitem")
    DinputE.insertAdjacentElement("afterbegin", inputE)
    setInterval(() => {
    }, 5000);
  if (text !== "" && TY != undefined) {
    const li = document.createElement("li");
    li.setAttribute("class","item")
    const p = document.createElement("div");
    p.setAttribute("class","tituloitem")
    p.textContent = text;

    li.appendChild(p);
    li.insertAdjacentElement("beforeend",typeE)
    li.insertAdjacentElement("beforeend",DinputE)
    li.insertAdjacentElement("beforeend",textcontext(contextLI,li,liInpunt,text,TY))
    li.appendChild(addDeleteBtn(TI));
    if (typeE.textContent == "Normal") {
      typeE.classList.add("Normal")
      ul.insertAdjacentElement("beforeend",li)
      li.insertAdjacentElement("beforeend",contextLI)
  }else if (typeE.textContent == "Importante") {
      typeE.classList.add("Importante")
      ul.insertAdjacentElement("beforeend",li)
      li.insertAdjacentElement("beforeend",contextLI)
  }else if (typeE.textContent == "Urgente") {
      typeE.classList.add("Urgente")
      ul.insertAdjacentElement("afterbegin",li)
      li.insertAdjacentElement("beforeend",contextLI)
  }



  

    
    
    
    input.value = "";
    empty.style.display = "none";
  }
}
function tareasConstructor() {
  const text = DatosTareas(input,typeItem,false,"").TareaName
  typeE = document.createElement("div")
    typeE.setAttribute("class","typeitem")
    typeE.textContent= DatosTareas(input,typeItem,false,"").TareaType;
    const contextLI = document.createElement("div")
    contextLI.setAttribute("class","textDiv")
    const liInpunt = document.createElement("textarea")
    liInpunt.setAttribute("class","textLI")
    liInpunt.setAttribute("placeholder","Agrega Contexto A Tu Tarea")
    liInpunt.textContent= DatosTareas(input,typeItem,false,"").TareaContext
    contextLI.insertAdjacentElement("afterbegin",liInpunt)
    
    

    const inputE = document.createElement("input")
    inputE.setAttribute("type","checkbox")
    const DinputE = document.createElement("div")
    DinputE.setAttribute("class","checkitem")
    DinputE.insertAdjacentElement("afterbegin", inputE)
    
  if (text !== "" && typeItem != undefined) {
    const li = document.createElement("li");
    li.setAttribute("class","item")
    const p = document.createElement("div");
    p.setAttribute("class","tituloitem")
    p.textContent = text;

    li.appendChild(p);
    li.insertAdjacentElement("beforeend",typeE)
    li.insertAdjacentElement("beforeend",DinputE)
    li.insertAdjacentElement("beforeend",textcontext(contextLI,li,liInpunt,text,typeE.textContent))
    li.appendChild(addDeleteBtn());
    if (typeE.textContent == "Normal") {
      typeE.classList.add("Normal")
      ul.insertAdjacentElement("beforeend",li)
      li.insertAdjacentElement("beforeend",contextLI)
  }else if (typeE.textContent == "Importante") {
      typeE.classList.add("Importante")
      ul.insertAdjacentElement("beforeend",li)
      li.insertAdjacentElement("beforeend",contextLI)
  }else if (typeE.textContent == "Urgente") {
      typeE.classList.add("Urgente")
      ul.insertAdjacentElement("afterbegin",li)
      li.insertAdjacentElement("beforeend",contextLI)
  }


 DatosTareas(input,true,typeItem,"contexto")
  

    
    
    
    input.value = "";
    empty.style.display = "none";
  }
}
function sync() {
  let arrayobjt =  DatosTareas(input,typeItem,false,"")
  if (arrayobjt.TareaName != ""&& arrayobjt.TareaType!=undefined) {
    arraynew.push(arrayobjt)
    localStorage.setItem("Tareas", JSON.stringify(arraynew))
  }
}
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  sync()
  tareasConstructor()
  

});
function textcontext(elemento1,elemento2,context,comp1,comp2) {
  const contextbtn = document.createElement("div")
  contextbtn.setAttribute("class","contextBtn")
  contextbtn.textContent="More"
  
  contextbtn.addEventListener("click",()=>{
    
    elemento1.classList.toggle("focus")
    elemento2.classList.toggle("item-context")
    let ary = getTareasStorage()
    ary.forEach(element => {
      if (element.TareaName == comp1 && element.TareaType == comp2) {
        element.TareaContext=context.value
        
        localStorage.setItem("Tareas",JSON.stringify([]))
        localStorage.setItem("Tareas",JSON.stringify(ary))
      }
    });
  })
  return contextbtn; 
}

function borradorarrayT(nombreObjtToDELATE) {
  const arrraynew2 = getTareasStorage()
  const objtToFind = (element) => element.TareaName == nombreObjtToDELATE;
  const objtFinalt=arrraynew2.findIndex(objtToFind);
  arrraynew2.splice(objtFinalt,1)
  return arrraynew2
}
function addDeleteBtn(nombreObjtToDELATE) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent= "X"
  deleteBtn.className = "btn-delete";
  

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);
    localStorage.setItem("Tareas",JSON.stringify(borradorarrayT(nombreObjtToDELATE)))
    const items = ul.children
    
    if (items.length === 1) {
      empty.style.display = "inline-flex";
    }
  });

  return deleteBtn;
}


setInterval(() => {
  getTareasStorage()
}, 2000);
