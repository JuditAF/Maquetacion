
const form = document.getElementById('formularioClientes');

var clientes = [];
let listaClientes = [];

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
        departureContact: departureInfo.toLowerCase(),
        arrivalContact: arrivalInfo,
    }

    form.reset();
    console.log(clientes);
    return clientes.push(contacto);

};




    // const listaClientes = clientes.filter((contacto) => contacto.departureContact.includes('galicia') || contacto.departureContact.includes('mallorca') || contacto.departureContact.includes('canarias'));
    // console.log(listaClientes);

// let crearTabla = function (listaClientes) {

//     let cabeceraTabla = "<tr><th>Nombre</th><th>Apellidos</th><th>Número Viajeros</th><th>Fecha</th><th>Origen</th><th>Destino</th></tr>";
   
//     for (cliente of listaClientes) {

//         let fila = "<tr> <td>";
//         fila += cliente.nameContact;
//         fila += "</td>";

//         fila = "<tr> <td>";
//         fila += cliente.surnameContact;
//         fila += "</td>";

//         fila = "<tr> <td>";
//         fila += cliente.nPersonsContact;
//         fila += "</td>";

//         fila = "<tr> <td>";
//         fila += cliente.dataTimeContact;
//         fila += "</td>";

//         fila = "<tr> <td>";
//         fila += cliente.departureContact;
//         fila += "</td>";

//         fila = "<tr> <td>";
//         fila += cliente.arrivalContact;
//         fila += "</td>";

//         fila += "</tr>";

//         cabeceraTabla += fila;
//     }

//     return cabeceraTabla;
// }

// document.getElementById('listaClientes').innerHTML = crearTabla(listaClientes);

function mostrarOcultarInfo () {

    function (clientes) {
    
        clientes.filter ((i) => {
            if (clientes[i].arrivalContact.includes('galicia') || clientes[i].arrivalContact.includes('mallorca') || clientes[i].arrivalContact.includes('canarias')) {
                return listaClientes.push(contacto);
            }
            console.log(listaClientes);
        });
    }

    // for (contacto of clientes) {

    // const listaClientes = clientes.filter((contacto) => contacto.arrivalContact.includes('galicia') || contacto.arrivalContact.includes('mallorca') || contacto.arrivalContact.includes('canarias'));
    // console.log(listaClientes);

    // }
    // let info = document.getElementById("infoRecibida");
    // if (info.style.display === "none") {
    //     info.style.display === "block";
    // } else { 
    //     info.style.display = "none";
    // } 

    function crearTabla (listaClientes) {

        for (let i= 0; i < listaClientes.length; i++) {

            for (cliente of listaClientes) {

                let tr = document.createElement("tr");
                let td = document.createElement("td");
                let tdText = document.createTextNode("cliente.nameContact");
                td.appendChild(tdText);
                tr.appendChild(td);

                tr = document.createElement("tr");
                td = document.createElement("td");
                tdText = document.createTextNode("cliente.surnameContact");
                td.appendChild(tdText);
                tr.appendChild(td);

                tr = document.createElement("tr");
                td = document.createElement("td");
                tdText = document.createTextNode("cliente.nPersonsContact");
                td.appendChild(tdText);
                tr.appendChild(td);

                tr = document.createElement("tr");
                td = document.createElement("td");
                tdText = document.createTextNode("cliente.dataTimeContact");
                td.appendChild(tdText);
                tr.appendChild(td);

                tr = document.createElement("tr");
                td = document.createElement("td");
                tdText = document.createTextNode("cliente.departureContact");
                td.appendChild(tdText);
                tr.appendChild(td);

                tr = document.createElement("tr");
                td = document.createElement("td");
                tdText = document.createTextNode("cliente.arrivalContact");
                td.appendChild(tdText);
                tr.appendChild(td);
    
            }
        }

        console.log(crearTabla(listaClientes));
        // document.write(crearTabla);
    }

    // let crearTabla = function (listaClientes) {

    //     for (cliente of listaClientes) {

    //         let fila = "<tr> <td>";
    //         fila += cliente.nameContact;
    //         fila += "</td>";
            
    //         fila = "<td>";
    //         fila += cliente.surnameContact;
    //         fila += "</td>";
            
    //         fila = "<td>";
    //         fila += cliente.nPersonsContact;
    //         fila += "</td>";
            
    //         fila = "<td>";
    //         fila += cliente.dataTimeContact;
    //         fila += "</td>";
            
    //         fila = "<td>";
    //         fila += cliente.departureContact;
    //         fila += "</td>";
            
    //         fila = "<td>";
    //         fila += cliente.arrivalContact;
    //         fila += "</td>";
            
    //         fila += "</tr>";
            
    //         document.getElementById("infoTabla") += fila;
    //     }
    // }

    // let info = document.getElementById("infoRecibida");

    // if (info.style.display === "none") {
    //     info.style.display === "block";
    // } else { 
    //     info.style.display = "none";
    // } 

    let aMostrar = document.getElementById("infoRecibida");
    aMostrar.style.display = 'block';

    let pantallas = ["table"];

    for (pantalla of pantallas) {
        if(pantalla!== id) {
            document.querySelector("#" + pantalla).style.display = 'none';
        }
    }

};

// window.onload = init;

// mostrarOcultarInfo(listaClientes);


// }

// let nombres =[];
// function filtro(){
    
//     for (i=0; i<arrViajes.length; i++){
//         if(arrViajes[i].destinoObj.toLowerCase() == "galicia" || arrViajes[i].destinoObj.toLowerCase() == "canarias" || arrViajes[i].destinoObj.toLowerCase() == "mallorca"){
//             nombres.push(arrViajes[i].nombreObj);
//         }
//     }
//     console.log(nombres);
//     //document.getElementById("resultado").innerHTML = nombres;
//     console.log(document.getElementById("resultados").innerHTML = nombres);
// }