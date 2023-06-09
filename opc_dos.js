// EJERCICIO REALIZADO POR ADRIAN Y PATRICIA
// Ellos han resuelto las validaciones y guardar de otra manera (sin return y poniendo la funcion guardar usuario dentro del else, cuando la validacion es correcta)
// -------------------------------------------------------------------------------------

// Selectores
const nameInputSelector = document.querySelector("#name-input");
const emailInputSelector = document.querySelector("#email-input");
const passwordInputSelector = document.querySelector("#password-input");
const confirmPasswordInputSelector = document.querySelector(
  "#confirm-password-input"
);
const buttonInputSelector = document.querySelector("#button-input");
const parrafoErrorSelector = document.querySelector("#p-error");
const parrafoExitoSelector = document.querySelector("#p-exito");
const cardNombreSelector = document.querySelector("#name-card");
const cardEmailSelector = document.querySelector("#email-card");

let credenciales = {};

// Función guardar usuario
// He separado los tiempos porque cada vez que le dábamos a enviar y el usuario no era correcto te llevaba a la pantalla de usuario.
function guardarUsuario() {
  localStorage.setItem(credenciales.email, JSON.stringify(credenciales));
  parrafoExitoSelector.innerHTML = ""; // Faltaba el parrafoExito para que desaparezca a los 3 seg
  setTimeout(function () {
    window.location.href = document.getElementById("pageLink").href; // Propiedad que devuelve la url en la que está el script
  }, 3000);
  console.log(credenciales);
}

// Función Validar
function validarCredenciales(event) {
  event.preventDefault();
  credenciales = {
    nombre: nameInputSelector.value,
    email: emailInputSelector.value,
    password: passwordInputSelector.value,
    confirmPassword: confirmPasswordInputSelector.value,
  };

  // Validación de todos los campos. Ninguno se queda vacío
  if (
    nameInputSelector.value === "" ||
    emailInputSelector.value === "" ||
    passwordInputSelector.value === "" ||
    confirmPasswordInputSelector.value === ""
  ) {
    parrafoExitoSelector.innerHTML = "";
    parrafoErrorSelector.innerHTML = `<p class="alert alert-danger">"Rellene los campos"</p>`;
  }

  //   Validación email
  else if (
    /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(emailInputSelector.value) !== true
  ) {
    parrafoExitoSelector.innerHTML = "";
    parrafoErrorSelector.innerHTML = `<p class="alert alert-danger">"Correo no válido"</p>`;
  }

  //   Validación contraseña
  else if (/^[a-zA-Z]\w{3,14}$/.test(passwordInputSelector.value) !== true) {
    parrafoExitoSelector.innerHTML = "";
    parrafoErrorSelector.innerHTML = `<p class="alert alert-danger">"Contraseña no válida"</p>`;
  }

  //   Validación Contraseñas iguales
  else if (passwordInputSelector.value !== confirmPasswordInputSelector.value) {
    parrafoExitoSelector.innerHTML = "";
    parrafoErrorSelector.innerHTML = `<p class="alert alert-danger">Las contraseñas no coinciden</p>`;
  }

  //   Todas las validaciones son correctas
  else {
    guardarUsuario();
    parrafoErrorSelector.innerHTML = "";
    parrafoExitoSelector.innerHTML = `<p class="alert alert-success">Usuario registrado con éxito</p>`;
  }

  // Borrar mensaje
  setTimeout(function () {
    parrafoErrorSelector.innerHTML = "";
  }, 3000);
}

buttonInputSelector.addEventListener("click", validarCredenciales);
