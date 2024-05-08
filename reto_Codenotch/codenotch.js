
const form = document.getElementById('formularioAlumnos');

var alumnos = [];


function recogerDatos() {

    let nameInfo = document.getElementById("nombre").value;
    let surnameInfo =  document.getElementById("apellidos").value;
    let emailInfo =  document.getElementById("email").value;
    let phoneInfo =  document.getElementById("tlf").value;
    let courseInfo =  document.getElementById("curso").value;
    let talkInfo =  document.getElementById("observaciones").value;

    let contacto = {
        nameContact : nameInfo,
        surnameContact: surnameInfo,
        emailContact: emailInfo,
        tlfContact: phoneInfo,
        cursoContact: courseInfo,
        comentarioContact: talkInfo
    }

    form.reset();
    console.log(alumnos);
    return clientes.push(contacto);

}


   
