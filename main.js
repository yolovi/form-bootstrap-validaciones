// Me traigo el input y el boton del html
const inputNombre = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPassUno = document.querySelector("#passwordUno");
const inputPassDos = document.querySelector("#passwordDos");
const inputBtn = document.querySelector("#btn");

console.log(inputPassUno)


function onSubmit(e) {
    e.preventDefault();
  
    const nombre = inputNombre.value;
    const emailValue = inputEmail.value;
    const inputPassUnoValue = inputPassUno.value;
    const inputPassDosValue = inputPassDos.value;

    console.log(inputPassUno)

  
    const user = {
      nombre, //si la key y la value se llaman igual solo se pone una
      correo: emailValue,
      password: inputPassUnoValue,
      passwordDos: inputPassDosValue,

    };

    localStorage.setItem("usuario", JSON.stringify(user)); 
    console.log(user)

}


inputBtn.addEventListener("click", onSubmit);

//     --------------

//     const objeto = { nombre, email, mensaje };
//     localStorage.setItem("user", JSON.stringify(objeto));
  
//     parrafo.innerText = ""//limpiamos lo que había escrito en el DOM
//     pintarPantalla()
//   }
//   function pintarPantalla (){
//     document.body.appendChild(parrafo)
//     const user = JSON.parse(localStorage.getItem("user"));
//     parrafo.innerText = 'Nombre: '+user.nombre +' Correo: '+ user.email +' Mensaje: '+user.mensaje
//   }
//   boton.addEventListener("click", onSubmit)