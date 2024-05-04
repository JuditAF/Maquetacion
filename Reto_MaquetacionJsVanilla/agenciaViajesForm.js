
const form = document.getElementById('formularioClientes');

var clientes = [];


function recogerDatos() {

    let nameInfo = document.getElementById("nombre").value;
    let surnameInfo =  document.getElementById("apellidos").value;
    let nPersonsInfo =  document.getElementById("numeroViajeros").value;
    let dataTimeInfo =  document.getElementById("fecha").value;
    let departureInfo =  document.getElementById("origen").value;
    let arrivalInfo =  document.getElementById("destino").value;

    let contacto = {
        nameContact : nameInfo,
        surnameContact: surnameInfo,
        nPersonsContact: nPersonsInfo,
        dataTimeContact: dataTimeInfo,
        departureContact: departureInfo,
        arrivalContact: arrivalInfo.toLowerCase()
    }

    form.reset();
    console.log(clientes);
    return clientes.push(contacto);

}

let listaClientes = [];

function mostrarOcultarInfo () {
    
    
    for ( i=0; i < clientes.length; i++ ) {

        if(clientes[i].arrivalContact == "galicia" || clientes[i].arrivalContact == "canarias" || clientes[i].arrivalContact == "mallorca") {
            listaClientes.push(clientes[i]);
        }
    }
    console.log(listaClientes);
        //document.getElementById("resultado").innerHTML = nombres;
    console.log(document.getElementById("resultados").innerHTML = listaClientes);
}