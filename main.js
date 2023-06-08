// Me traigo el input y el boton del html
const inputNombre = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPassUno = document.querySelector("#passwordUno");
const inputPassDos = document.querySelector("#passwordDos");
const msg = document.querySelector("#msg");
const contenedor = document.querySelector("#contenedor");
const boton = document.querySelector("#btn");
const btnClear = document.querySelector("#btnBorrar");
const btnBorrarTodos = document.querySelector("onclick");

// funcion validar
function validar() {
  const password = /(^(?=.*\d).{4,8}$)/;
  // Password must be between 4 and 8 digits long and include at least one numeric digit.
  // Matches1234 | asdf1234 | asp123
  
  const email = /[\w-]+@([\w-]+\.)+[\w-]+/;
  // Description: simple email validator expression
  // Matches  joe@aol.com | a@b.c
  // Non-Matches	asdf | 1234
  
  setTimeout(() => {
    msg.innerHTML = "";
  }, 3000);

  if (
    inputNombre.value === "" ||
    inputEmail.value === "" ||
    inputPassUno.value === "" ||
    inputPassDos.value === ""
  ) {
    msg.innerHTML = `<p class="alert alert-warning" role="alert" >"Please enter all fields"</p> `;
    return false
  } else if(email.test(inputEmail.value) !== true){
    msg.innerHTML = `<p class="alert alert-warning" role="alert" >Please enter a valid email</p> `;
    return false
  }
  else if (password.test(inputPassUno.value) !== true) {
    msg.innerHTML =  `<p class="alert alert-warning" role="alert">"Please enter a valid password"</p>`;
    return false
  } else if (inputPassUno.value !== inputPassDos.value ){
    msg.innerHTML =  `<p class="alert alert-warning" role="alert">"It must be the same password"</p>`;
    return false
  }
  else {
    msg.innerHTML = `<p class="alert alert-success" role="alert">"Usuario creado correctamente"</p>`;
    return true
  }

}

// funcion que se ejecutara con el boton enviar. Esta funcion previene la accion por defecto de boton y ademas recoge los valores de los inputs que rellene el usuario para despues almacenarlos en el local storage.

function onSubmit(e) {
  e.preventDefault();

  const nombre = inputNombre.value;
  const emailValue = inputEmail.value;
  const inputPassUnoValue = inputPassUno.value;
  const inputPassDosValue = inputPassDos.value;

  const user = {
    nombre, //si la key y la value se llaman igual solo se pone una
    correo: emailValue,
    password: inputPassUnoValue,
    passwordDos: inputPassDosValue,
  };

  // almaceno el resultado del return de la funcion validar en la variable validado
  let validado = validar()

  // comprueba si validado es true ejecuta la accion que es crear y guardar en una array
  if (validado) {
    //almacena en una string en local
   localStorage.setItem("usuario", JSON.stringify(user));
   // crea usuarios form a array vacio o recoge lo del formulario(se van acumulando en el array en cada push)
   let usuariosForm = JSON.parse(localStorage.getItem("formulario")) || [];
   usuariosForm.push(user);
   //guarda el array usuariosForm en el local storage
   localStorage.setItem("formulario", JSON.stringify(usuariosForm));
   setTimeout(() => {
    window.location.href = "usuarios.html";

  }, 3000);
  
 }

}


// -----------------------

// BOOTSTRAP CARDS 

const datosUsuario = document.getElementById("datos-usuario");

function pintarUsuarios() {

  let usuarios = JSON.parse(localStorage.getItem("formulario"));
  let boton = document.getElementById('boton');
  boton.classList.add('hidden');
  if (usuarios) {
    for (const elemento of usuarios) {
            datosUsuario.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="https://picsum.photos/200/200" class="card-img-top" alt="imagen avatar">
            <div class="card-body">
                <h5 class="card-title">Datos del usuario</h5>
                <div id="datos-usuario">
                    <p> Nombre : ${elemento.nombre}</p>
                    <p> Email : ${elemento.correo}</p>
                </div>
          </div>`
          }
  }
}


  
function clearLocal() {
  localStorage.clear();
}

// Botón borrar solo un elemento
function deleteOne(laclave) {
  let nuevo = JSON.parse(localStorage.getItem("formulario"));
}

btnClear.addEventListener("click", clearLocal);

boton.addEventListener("click", onSubmit);
