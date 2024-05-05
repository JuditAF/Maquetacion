
const form = document.getElementById('formulario');


function addTable () {
    const contenedorTabla = document.getElementById('contenedorTabla');

    if (contenedorTabla) {
        const clickFiltro = document.getElementById('addTable');
        if (clickFiltro) {
            clickFiltro.addEventListener('click', () => crearTabla());
        }
    }
// function addTable () {

//     const contenedorTabla = document.getElementById('contenedorTabla');

//     const tablaInfoRecibida = document.createElement('table');

//     if (contenedorTabla) {

//         if (tablaInfoRecibida) {

//         tablaInfoRecibida = '</table class="table">';
//         tablaInfoRecibida = tablaInfoRecibida + '<tr> <th scope="col">Nombre</th> <th scope="col">Apellidos</th> <th scope="col">Número Viajeros</th> <th scope="col">Fecha</th> <th scope="col">Origen</th> <th scope="col">Destino</th> </tr>';
//         tablaInfoRecibida = tablaInfoRecibida + '</table>';
//         listaClientes.forEach(contacto => {
//             tablaInfoRecibida = tablaInfoRecibida + '<tr>';
//             tablaInfoRecibida = tablaInfoRecibida + '<td>' + contacto.nameContact + '</td>';
//             tablaInfoRecibida = tablaInfoRecibida + '<td>' + contacto.surnameContact + '</td>';
//             tablaInfoRecibida = tablaInfoRecibida + '<td>' + contacto.nPersonsContact + '</td>';
//             tablaInfoRecibida = tablaInfoRecibida + '<td>' + contacto.dataTimeContact + '</td>';
//             tablaInfoRecibida = tablaInfoRecibida + '<td>' + contacto.departureContact + '</td>';
//             tablaInfoRecibida = tablaInfoRecibida + '<td>' + contacto.arrivalContact + '</td>';
//             tablaInfoRecibida = tablaInfoRecibida + '</tr>';
//         });

//         tablaInfoRecibida = '</table>';

//         // document.getElementById('tablaFiltro').innerHTML = tablaInfoRecibida;

//     }

//     contenedorTabla.appendChild('contenedorTabla')
// }

//     document.getElementById('formulario').innerHTML = contenedorTabla;
//     document.getElementById('onclick');
//     if (onclick) {
//         onclick.addEventListener('click', () => addTable)
//     }

// }

    function crearTabla () {

        let tablaInfoRecibida = '<table class="table">';
        tablaInfoRecibida = tablaInfoRecibida + '<tr> <th scope="col">Nombre</th> <th scope="col">Apellidos</th> <th scope="col">Número Viajeros</th> <th scope="col">Fecha</th> <th scope="col">Origen</th> <th scope="col">Destino</th> </tr>';
        tablaInfoRecibida = tablaInfoRecibida + '</table>';
        listaClientes.forEach(contacto => {
            tablaInfoRecibida = tablaInfoRecibida + '<tr>';
            tablaInfoRecibida = tablaInfoRecibida + '<td>' + contacto.nameContact + '</td>';
            tablaInfoRecibida = tablaInfoRecibida + '<td>' + contacto.surnameContact + '</td>';
            tablaInfoRecibida = tablaInfoRecibida + '<td>' + contacto.nPersonsContact + '</td>';
            tablaInfoRecibida = tablaInfoRecibida + '<td>' + contacto.dataTimeContact + '</td>';
            tablaInfoRecibida = tablaInfoRecibida + '<td>' + contacto.departureContact + '</td>';
            tablaInfoRecibida = tablaInfoRecibida + '<td>' + contacto.arrivalContact + '</td>';
            tablaInfoRecibida = tablaInfoRecibida + '</tr>';
        });

        tablaInfoRecibida = '</table>';

        document.getElementById('tablaFiltro').innerHTML = tablaInfoRecibida;

    }

    console.log();
};
