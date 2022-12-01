let relojHTML1 = document.querySelector(".relojH")
let relojHTML2 = document.querySelector(".relojR")
let relojHTML3 = document.querySelector(".relojA")
let relojHTML4 = document.querySelector(".relojT")
let estacion1 = document.querySelector(".estacion1")
let estacion2 = document.querySelector(".estacion2")
let estacion3 = document.querySelector(".estacion3")
let estacion4 = document.querySelector(".estacion4")
let imgestc1 = document.getElementById("imgestacion1")
let imgestc2 = document.getElementById("imgestacion2")
let imgestc3 = document.getElementById("imgestacion3")
let imgestc4 = document.getElementById("imgestacion4")

let hora
let minuto
let date
let time
let dia
let mes
let fecha

setInterval(() => {
    date = new Date
    hora = date.getHours()
    minuto = date.getMinutes()
    dia = date.getDate()
    mes = date.getMonth()
    //condicionales hora
    if (hora > 13) {
        
    }
    if (minuto < 10) {
        minuto = "0"+minuto
    }
    //condicionales fecha
    if (mes == 0) {
        mes = "Enero"
    }else if (mes == 1) {
        mes = "Febrero"
    }else if (mes == 2) {
        mes = "Marzo"
    }else if (mes == 3) {
        mes = "Abril"
    }else if (mes == 4) {
        mes = "Mayo"
    }else if (mes == 5) {
        mes = "Junio"
    }else if (mes == 6) {
        mes = "Julio"
    }else if (mes == 7) {
        mes = "Agosto"
    }else if (mes == 8) {
        mes = "Septiembre"
    }else if (mes == 9) {
        mes = "Octubre"
    }else if (mes == 10) {
        mes = "Noviembre"
    }else if (mes == 11) {
        mes = "Diciembre"
    }
    //condiciones estaciones
    if (mes == "Marzo" && dia > 20 || mes == "Abril" || mes == "Mayo" || mes == "Junio" && dia < 21) {
        imgestc1.setAttribute("src","/resource/estaciones/Primavera.png")
    }else if(mes == "Junio" && dia > 21 || mes == "Julio" || mes == "Agosto" || mes == "Septiembre" && dia < 23){
        imgestc1.setAttribute("src", "/resource/estaciones/Verano.png")
    }else if(mes == "Septiembre" && dia > 23 || mes == "Octubre" || mes == "Noviembre" || mes == "Diciembre" && dia < 21){
        imgestc1.setAttribute("src", "/resource/estaciones/Otoño.png")
        imgestc2.setAttribute("src", "/resource/estaciones/Otoño.png")
        imgestc3.setAttribute("src", "/resource/estaciones/Otoño.png")
        imgestc4.setAttribute("src", "/resource/estaciones/Otoño.png")
    }else if (mes == "Diciembre" && dia > 21 || mes == "Enero" || mes == "Febrero" || mes == "Marzo" && dia < 20) {
        imgestc1.setAttribute("src", "/resource/estaciones/Invierno.png")
    }
    time=hora+":"+minuto
    fecha=dia+" De "+mes
    
    //hora
    relojHTML1.textContent= time
    relojHTML2.textContent= time
    relojHTML3.textContent= time
    relojHTML4.textContent= time
    //fecha
    estacion1.textContent= fecha
    estacion2.textContent= fecha
    estacion3.textContent= fecha
    estacion4.textContent= fecha
    
}, 1000);
