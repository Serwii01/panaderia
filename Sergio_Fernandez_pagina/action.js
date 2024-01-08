//alerta de inicio y requerimiento del nombre//
alert('Página cargada')
var hola=prompt('Hola, ingresa tu nombre');
document.write ('Bienvenido '+hola);//guarda la variable nombre y la imprime//
var saltoDeLinea = document.createElement("br");
document.body.appendChild(saltoDeLinea);
    
//script elegir la imagen con un prompt//
var opcion = prompt("Elige una opción:\n1. Londres\n2. Sevilla \n3. Paris\n4. Roma\n\nHola, " + hola);

//si escoges la imagen con la id "1" te muestra la imagen "1" con estilos//
if (opcion === "1") {
    var imagen1 = document.createElement("img");
        imagen1.src = "img/londres.jpg";
        imagen1.alt = "Londres";
        imagen1.style.border = "1px solid black";
        imagen1.style.width = "100%";
        imagen1.style.height = "30%";
        imagen1.style.borderRadius = "25px";
        document.body.appendChild(imagen1);
} else if (opcion === "2") {
    var imagen2 = document.createElement("img");
        imagen2.src = "img/sevilla.jpg";
        imagen2.alt = "Sevilla";
        imagen2.style.border = "1px solid black";
        imagen2.style.width = "100%";
        imagen2.style.height = "30%";
        imagen2.style.borderRadius = "25px";
        document.body.appendChild(imagen2);
} else if (opcion === "3") {
    var imagen3 = document.createElement("img");
        imagen3.src = "img/paris.jpg";
        imagen3.alt = "París";
        imagen3.style.border = "1px solid black";    
        imagen3.style.width = "100%";
        imagen3.style.height = "30%";
        imagen3.style.borderRadius = "25px";
        document.body.appendChild(imagen3);
} else if (opcion=== "4"){
    var imagen4 = document.createElement("img");
        imagen4.src = "img/roma.jpg";
        imagen4.alt = "Roma";
        imagen4.style.border = "1px solid black";
        imagen4.style.width = "100%";
        imagen4.style.height = "30%";
        imagen4.style.borderRadius = "25px";
        document.body.appendChild(imagen4);
}