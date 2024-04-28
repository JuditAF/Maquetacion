
const formulario = document.getElementById("#formularioClientes");

formulario.addEventListener ("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log('validando...');
}

function mostrarOcultarInfo () {
    let info = document.getElementById("infoRecibida");
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

class Cliente {
    constructor() {
        this.name= " ";
        this.persons= 0;
        this.animalFriend= False;
        this.date= new Date();
        this.origin= " ";
        this.destiny= " ";
    }
}

let consultaClientes = [...Object];

for (let dato of Cliente) {
    return consultaClientes.push(dato);
}

let cliente1 = new Cliente(document.getElementById(nombre), document.getElementById(numeroViajeros), document.getElementById(amigoAnimal), document.getElementById(fecha), document.getElementById(origen), document.getElementById(destino));
