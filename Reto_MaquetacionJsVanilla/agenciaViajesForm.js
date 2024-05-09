
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

function filtrarInfo () {
    
    console.log(listaClientes);
    console.log(document.getElementById("info").innerHTML = listaClientes);
    return
    
};

function genera_tabla() {
    // let formCl = document.getElementById("formularioClientes");
    // let tabla = document.getElementById("infoRecibida");
    let tblBody = document.getElementById("infoTabla");
    let formCl = document.getElementById("formularioClientes");
    
    for (let i = 0; i < 2; i++) {
        let fila = document.createElement("tr");

        for (let j = 0;  j < listaClientes.length; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            listaClientes.map(contacto)
            let celda = document.createElement("td");
            let textoCelda = document.createTextNode(
              "celda en la hilera " + i + ", columna " + j,
            );
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
          }
      
          // agrega la hilera al final de la tabla (al final del elemento tblbody)
          tblBody.appendChild(fila);
        }

         // posiciona el <tbody> debajo del elemento <table>
//   tabla.appendChild(tblBody);
  // appends <table> into <body>
  infoTabla.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");

}

// function addTable () {
//     const tabla = document.getElementById(infoRecibida);
//     const lista = [...listaClientes];

//     listaClientes.map
//     for ( i=0; i < listaClientes.length; i++ ) {

//         for ( i=0; i < listaClientes.length; i++ )
//     }
    
// }
// function addTable () {
//     const formCl = document.getElementById("formularioClientes");

//     form.addEventListener("onclick", function (event) {
//         event.preventDefault();
//         let transactionFormData = new FormData (form)
//     })
// };
   
