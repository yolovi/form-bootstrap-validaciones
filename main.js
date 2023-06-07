// Me traigo el input y el boton del html
const inputNombre = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPassUno = document.querySelector("#passwordUno");
const inputPassDos = document.querySelector("#passwordDos");
const contenedor = document.querySelector("#contenedor");
const boton = document.querySelector("#btn");
const btnClear = document.querySelector("#btnBorrar");
const btnBorrarTodos = document.querySelector("onclick");

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

  localStorage.setItem("usuario", JSON.stringify(user));

  // crea usuarios form a array vacio o recoge lo del formulario(se van acumulando en el array en cada push)
  let usuariosForm = JSON.parse(localStorage.getItem("formulario")) || [];
  usuariosForm.push(user);

  //guarda el array usuariosForm en el local storage
  localStorage.setItem("formulario", JSON.stringify(usuariosForm));

  //crea un objeto vacio
  contenedor.innerHTML = ``;

  pintarEnPantalla();
}

const pintarEnPantalla = function () {
  //recoge lo que haya en "formulario" del local storage
  const formulario = JSON.parse(localStorage.getItem("formulario"));

  if (formulario === null || formulario.length === 0) {
    contenedor.innerHTML = `<p>Rellena el formulario</p>`;
  } else {
    //crea un parrafo para cada usuario dentro del div id contenedor y lo rellena con los datos recogidos del "formulario"
    for (const elemento of formulario) {
      contenedor.innerHTML += `<p>Mi nombre es ${elemento.nombre}, mi email es ${elemento.correo} <button onclick = "deleteOne('${elemento.correo}')">Borrar elemento</button></p>`;
    }
  }
};

// funcion para borrar todo el local storage con el boton borrar todos local
function clearLocal() {
  localStorage.clear();
}

// Botón borrar solo un elemento
function deleteOne(laclave) {
  let nuevo = JSON.parse(localStorage.getItem("formulario"));

  // Crea un array vacio para utilizarlo en el bucle for. Después de que el bucle haya recorrido todos los elementos de nuevo, el array filtrado contendrá solo aquellos elementos cuya propiedad correo sea diferente al valor de laclave

  let filtrado = [];

  for (elemento of nuevo) {
    console.log(elemento.correo, laclave);
    if (elemento.correo !== laclave) {
      filtrado.push(elemento);
    }
  }

  // Almacena como string en el local storage los elementos del paso anterior, el filtrado.
  localStorage.setItem("formulario", JSON.stringify(filtrado));
  contenedor.innerHTML = ``;
  pintarEnPantalla();
}

btnClear.addEventListener("click", clearLocal);

boton.addEventListener("click", onSubmit);
