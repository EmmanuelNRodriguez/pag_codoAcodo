const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const correo = document.querySelector("#email");
const password = document.querySelector("#password");
const fechaNacimiento = document.querySelector("#fechaNacimiento");
const pais = document.querySelector("#pais");
const terminos = document.querySelector("#terminos");

document.getElementById('form_regis').addEventListener('submit', function (e) {

  e.preventDefault();
  
  const validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (nombre.value == "") {
    swal({
      title: "Información erronea o faltante!",
      text: "Ingresá un nombre",
      icon: "warning",
      buttons: false,
      timer: 2500
    })
    return false;
  }

  if (apellido.value == "") {
    swal({
      title: "Información erronea o faltante!",
      text: "Ingresá un apellido",
      icon: "warning",
      buttons: false,
      timer: 2500
    })
    return false;
  }

  if (!validarEmail.test(correo.value)) {
    swal({
      title: "Información erronea o faltante!",
      text: "Ingresá un correo electrónico válido",
      icon: "warning",
      buttons: false,
      timer: 2500
    })
    return false;
  }

  if (password.value.length < 8) {
    swal({
      title: "Información faltante!",
      text: "Debes ingresar una contraseña valida.",
      icon: "warning",
      buttons: false,
      timer: 2500
    })
    return false;
  }

    const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    
    if (!regex.test(fechaNacimiento.value)) {
        console.log(fechaNacimiento.value)
        swal({
            title: "Información erronea o faltante!",
            text: "Ingresá una fecha de nacimiento",
            icon: "warning",
            buttons: false,
            timer: 2500
          })
          return false;
    }

  if (pais.value == "") {
    swal({
      title: "Información erronea o faltante!",
      text: "Ingresá un país",
      icon: "warning",
      buttons: false,
      timer: 2500
    })
    return false;
  }

  if (terminos.value == false) {
    swal({
      title: "Información erronea o faltante!",
      text: "Debes aceptar los terminos y condiciones",
      icon: "warning",
      buttons: false,
      timer: 2500
    })
    return false;
  }

    swal({
    title: '¿Estás seguro?',
    text: '¿Quieres intentar loggearte?',
    icon: 'warning',
    buttons: true
    }).then((value) => {
    if (value) {  
      swal({
        title: "Muchas gracias!",
        text: `Tu mensaje fue enviado con exito.`,
        icon: "success",
        buttons: false,
        timer: 3000
      })
    }
  })
});