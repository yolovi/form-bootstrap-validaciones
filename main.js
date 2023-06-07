// Me traigo el input y el boton del html
const inputNombre = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPassUno = document.querySelector("#passwordUno");
const inputPassDos = document.querySelector("#passwordDos");
const inputBtn = document.querySelector("#btn");

let parrafo = document.createElement("p")


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
    // console.log(user)

    // parrafo.innerText = ""//limpiamos lo que había escrito en el DOM
        pintarPantalla()

}

function pintarPantalla (){
        document.body.appendChild(parrafo)
        const userGuardado = JSON.parse(localStorage.getItem("usuario"));
        parrafo.innerText = `Nombre: ${userGuardado.nombre}  Correo: ${userGuardado.correo}  Password: ${userGuardado.password}`
      }


inputBtn.addEventListener("click", onSubmit);



