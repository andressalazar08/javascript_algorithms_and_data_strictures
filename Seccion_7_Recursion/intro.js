//Uso de funciones y recursividad


function tomarDucha(){
    return "Bañandome!"
}


function comeDesayuno(){
    let desayuno = cocina_algo();
    return `Comiendo ${desayuno}`
}

function cocina_algo(){
    let ingredientes = ['Huevos', 'Cereal', 'Cafe'];
    return ingredientes[Math.floor(Math.random()*ingredientes.length)]
}

function despertar(){
    tomarDucha()
    comeDesayuno()
    console.log("Ok listo para ir al trabajo!")
}

despertar();
