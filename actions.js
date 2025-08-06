const lugar = [
    "Monserrate",
    "La Candelaria",
    "Simón Bolívar",   
    "Centro de la Felicidad",
    "Museo Nacional",
    "Parque de los Novios",
    "Parque El Virrey",
    "Parque de Usaquén",
    "Parque El Chicó",
    "Parque de la 93",         
];

let lugarActual = 0;

function cambiarLugar() {       
    const elLugar = document.querySelector('.otro-parrafo');
    lugarActual = (lugarActual + 1) % lugar.length;
    elLugar.innerHTML = lugar[lugarActual];
}