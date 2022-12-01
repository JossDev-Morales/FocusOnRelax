let inputName = document.querySelector(".NameAlarm-i")
let name 
let inputHora = document.querySelector(".HoraA-i")
let inputMinutos = document.querySelector(".MinutosA-i")
let inputTime = document.querySelector(".TimeA-i")

let btnAlarma = document.querySelector(".buttonA-V")

let container = document.querySelector(".Alarmas")
let noitems = document.querySelector(".noitems")

let alertDom = document.querySelector(".alert") 
let alertStopDom = document.querySelector(".stopalert")
let AlertAudio = document.getElementById("Alarma-Audio")

let arr = []
if (localStorage.getItem("Alarma") == null) {
    localStorage.setItem("Alarma",'[{"horadealarma":"1","minutosdealarma":"1","timedealarma":"AM","namealarma":"Primer Alarma"}]')
}


getAlarmStorage().forEach(element => {
    
    arr.push(element)
});



//actions to the time's data
let Horainicial = 1;inputHora.value=Horainicial;
let Minutosinicial = 1;inputMinutos.value=Minutosinicial;
let Timeinicial = "AM";inputTime.value=Timeinicial;


let UpHoraIMG = document.querySelector(".UPH img")
let UpHora = document.querySelector(".UPH")

let UpMinutosIMG = document.querySelector(".UPM img")
let UpMinutos = document.querySelector(".UPM")

let UpTimeIMG = document.querySelector(".UPT img")
let UpTime = document.querySelector(".UPT")

let DownHoraIMG = document.querySelector(".DOH img")
let DownHora = document.querySelector(".DOH")

let DownMinutosIMG = document.querySelector(".DOM img")
let DownMinutos = document.querySelector(".DOM")

let DownTimeIMG = document.querySelector(".DOT img")
let DownTime = document.querySelector(".DOT")

document.addEventListener("click", (e)=>{
   const trg = e.target
   //condicionales Hora
    if (Horainicial<12) {
        if (trg==UpHora||trg==UpHoraIMG) {
        Horainicial += 1;inputHora.value=Horainicial;
        }} 
    if(Horainicial>1){
        if (trg==DownHora||trg==DownHoraIMG) {
        Horainicial-=1;inputHora.value=Horainicial;
        }}
   //condicionales Minutos
   if (Minutosinicial<64) {
        if (trg==UpMinutos||trg==UpMinutosIMG) {
            Minutosinicial+=1;inputMinutos.value=Minutosinicial;
        }}
   if (Minutosinicial>1) {
        if (trg==DownMinutos|trg==DownMinutosIMG) {
            Minutosinicial-=1;inputMinutos.value=Minutosinicial;
        }}
   //condiciones am/mp    
   if (trg==UpTime||trg==UpTimeIMG) {
        if (Timeinicial=="AM") {
            Timeinicial="PM";inputTime.value=Timeinicial
        }else if (Timeinicial=="PM") {
            Timeinicial="AM";inputTime.value=Timeinicial
        }
   }
   if (trg==DownTime||trg==DownTimeIMG) {
        if (Timeinicial=="AM") {
            Timeinicial="PM";inputTime.value=Timeinicial
        }else if (Timeinicial=="PM") {
            Timeinicial="AM";inputTime.value=Timeinicial
        } 
   }
})
function getAlarmStorage() {
    const ArrayAlarmasStorage=JSON.parse(localStorage.getItem("Alarma"))
    return ArrayAlarmasStorage
}
function OnloadAlarmaConstructor(nombre,hora,minutos,time) {
    Datos(inputHora,inputMinutos,inputTime,inputTime)
    const alarma = document.createElement("div")
    alarma.setAttribute("class","Alarma")
    
    const tituloAlarma = document.createElement("div")
    tituloAlarma.setAttribute("class","Talarma")
    tituloAlarma.textContent = nombre
    const alerta = document.createElement("div")
    alerta.setAttribute("class","Alerta")
    const NombreAlarmaTituloEnArray=nombre
    
    
    const Talert = document.createElement("div")
    Talert.setAttribute("class","Talerta") 
    Talert.textContent= nombre  
    alerta.insertAdjacentElement("beforeend", Talert) 
    const txtarea = document.createElement("textarea")
    txtarea.setAttribute("cols","30");txtarea.setAttribute("row","10");
    alerta.insertAdjacentElement("beforeend", txtarea)
    let horaconstructor = hora
    let Minutosconstructor=minutos
    
    if (Minutosconstructor < 10) {
        Minutosconstructor = "0"+Minutosconstructor
    }
    const HoraDiveHora = horaconstructor+":"+Minutosconstructor
    const Horadiv =document.createElement("div")
    Horadiv.setAttribute("class","Hora")
    Horadiv.textContent=HoraDiveHora

    const AmPmdiv = document.createElement("div")
    AmPmdiv.setAttribute("class","AmPm")
    AmPmdiv.textContent=time

    alarma.insertAdjacentElement("afterbegin",tituloAlarma)
    //tiempos, reservado to insert
    alarma.insertAdjacentElement("beforeend",Horadiv)
    alarma.insertAdjacentElement("beforeend",AmPmdiv)
    alarma.insertAdjacentElement("beforeend",moreBtn(alerta))
    alarma.insertAdjacentElement("afterbegin", alerta)
    alarma.appendChild(eliminar(NombreAlarmaTituloEnArray))
    noitems.classList.remove("focus")

        

    return alarma
}
function myFunc() {
    const datosOnload =getAlarmStorage()
    datosOnload.forEach(element => {
        const horaDato = element.horadealarma
        const minutoDato=element.minutosdealarma
        const timeDato = element.timedealarma
        const nombreDato=element.namealarma
        container.appendChild(OnloadAlarmaConstructor(nombreDato,horaDato,minutoDato,timeDato))
        
    });
    
        
}
document.addEventListener("DOMContentLoaded",myFunc())
/*function carga() {
    const datosOnload =getAlarmStorage()
    console.log(datosOnload);
    container.appendChild(AlarmaConstructor())
}*/

//end
function Datos(dato1,dato2,dato3,dato4) {
    const horadealarma = dato1.value
    const minutosdealarma = dato2.value
    const timedealarma = dato3.value
    const namealarma = dato4.value
    const datosarray= {horadealarma,minutosdealarma,timedealarma,namealarma}
    
    return datosarray
}

function eliminar(nombreObjtToDELATE) {
    const eliminarbtn = document.createElement("div")
    eliminarbtn.setAttribute("class","EliminarAlarma")
    eliminarbtn.textContent="Eliminar"

    eliminarbtn.addEventListener("click",(e)=>{
        
        const alarmaitem = e.target.parentElement;
        container.removeChild(alarmaitem)
        const itemscontainer = container.children.length
        
    localStorage.setItem("Alarma",JSON.stringify(borradorarray(nombreObjtToDELATE))) 
    
        if (itemscontainer === 1) {
            noitems.classList.add("focus")
            
        }
        
    })
    
    return eliminarbtn
}
function moreBtn(toDisplay) {
    const more = document.createElement("div")
    more.setAttribute("class","Button-Alerta")
    more.textContent="More"
    more.addEventListener("click",()=>{
        toDisplay.classList.toggle("focus")
        
    })
    return more
}



function AlarmaConstructor() {
    Datos(inputHora,inputMinutos,inputTime,inputTime)
    const alarma = document.createElement("div")
    alarma.setAttribute("class","Alarma")
    
    const tituloAlarma = document.createElement("div")
    tituloAlarma.setAttribute("class","Talarma")
    tituloAlarma.textContent = Datos(inputHora,inputMinutos,inputTime,inputName).namealarma
    const alerta = document.createElement("div")
    alerta.setAttribute("class","Alerta")

    const Talert = document.createElement("div")
    Talert.setAttribute("class","Talerta") 
    Talert.textContent= Datos(inputHora,inputMinutos,inputTime,inputName).namealarma
    alerta.insertAdjacentElement("beforeend", Talert) 
    const txtarea = document.createElement("textarea")
    txtarea.setAttribute("cols","30");txtarea.setAttribute("row","10");
    alerta.insertAdjacentElement("beforeend", txtarea)

    let horaconstructor = Datos(inputHora,inputMinutos,inputTime,inputName).horadealarma
    let Minutosconstructor=Datos(inputHora,inputMinutos,inputTime,inputName).minutosdealarma
    if (Minutosconstructor < 10) {
        Minutosconstructor = "0"+Minutosconstructor
    }
    const Horadiv =document.createElement("div")
    Horadiv.setAttribute("class","Hora")
    Horadiv.textContent=horaconstructor+":"+Minutosconstructor

    const AmPmdiv = document.createElement("div")
    AmPmdiv.setAttribute("class","AmPm")
    AmPmdiv.textContent=Datos(inputHora,inputMinutos,inputTime,inputName).timedealarma

    alarma.insertAdjacentElement("afterbegin",tituloAlarma)
    //tiempos, reservado to insert
    alarma.insertAdjacentElement("beforeend",Horadiv)
    alarma.insertAdjacentElement("beforeend",AmPmdiv)
    alarma.insertAdjacentElement("beforeend",moreBtn(alerta))
    alarma.insertAdjacentElement("afterbegin", alerta)
    alarma.appendChild(eliminar(Datos(inputHora,inputMinutos,inputTime,inputName).namealarma))
    noitems.classList.remove("focus")
    return alarma
}

function sync() {



    



    const datosEnArray = Datos(inputHora,inputMinutos,inputTime,inputName)
    
    arr.push(datosEnArray)
    
    localStorage.setItem("Alarma",JSON.stringify(arr))
    
}

btnAlarma.addEventListener("click",()=>{
    container.appendChild(AlarmaConstructor())
    

  sync()
  
    inputName.value=""
})

function borradorarray(nombreObjtToDELATE) {
    const arrraynew = getAlarmStorage()
    const objtToFind = (element) => element.namealarma == nombreObjtToDELATE;
    const objtFinal=arrraynew.findIndex(objtToFind);
    arrraynew.splice(objtFinal,1)
    return arrraynew
}
//reloj
let relojhora
let relojminuto
let relojtime
setInterval(() => {
    let reloj = new Date
    relojhora = reloj.getHours()
    relojminuto = reloj.getMinutes()
    if (relojhora >13) {
        relojtime="PM"
        
        relojhora -=12 
    }else if (relojhora<=12) {
        relojtime="AM"
        
    }    
    
}, 1000);

function DisplayAlert() {
    alertDom.classList.add("focus")
    AlertAudio.play()
}
function DisplayNoneAlert() {
    alertDom.classList.remove("focus")
}
alertStopDom.addEventListener("click",()=>{
    DisplayNoneAlert()
    AlertAudio.pause()
    alertDom.classList.remove("Active")
    alertDom.classList.add("noActive")
})
setInterval(() => {
    getAlarmStorage().forEach(element => {
       if (alertDom.classList.contains("Active")) {
        if (element.horadealarma==relojhora && element.minutosdealarma==relojminuto && element.timedealarma==relojtime) {
            DisplayAlert()
            setTimeout(() => {
                alertDom.classList.add("Active")
            }, 60000);
       } 
       }
    });
}, 1000);
