const correo = document.querySelector("#email");
const password = document.querySelector("#password");


document.getElementById('loginForm').addEventListener('submit', function (e) {
  
console.log("pase");

  e.preventDefault();
  
  var validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  //si no tiene un formato de Email sale esto
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
      text: "Debes ingresar una contraseña.",
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