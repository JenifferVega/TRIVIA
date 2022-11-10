/*
let miInput = document.getElementById("mibutton");
miInput.addEventListener("click", saludar);
*/

const roma = document.querySelector(".roma");
const napoles = document.querySelector(".napoles");
//var romaCity = document.getElementById("romaCity");
const tokyo = document.querySelector(".tokyo");
const londres = document.querySelector(".londres");
const results = document.querySelector(".results");

/* INTENTANDO EL ALERT function verifyAnswer() {
  if(roma == roma) {
        alert ("correcta")
    roma.style.background = "green";
  }
  else {
    alert("respuesta erronea");
  }
}*/

function verifyAnswer() {
  if (roma == roma) {
    roma.style.background = "green";
  }
  else {
    alert("respuesta erronea");
  }
}


function verifyAnswer2() {
  tokyo.style.background = "green";
}

function verifyAnswer3() {
  londres.style.background = "green";
}

function verifyAnswer4() {
  roma.style.background = "green";
  tokyo.style.background = "green";
  londres.style.background = "green";
  /* checkbox.romaCity = true;
   checkbox.setAttribute("romaCity", "true");*/
}

function getName() {
  var myName = document.getElementById("nombre").value;
  alert("Bienvenid@ " + myName + " a nuestra trivia! Presiona Aceptar e Iniciar Juego en el siguiente boton :D");
}

/*
function DatoU(){
    var elem = document.getElementById('nombre');
    var NombreUsuario = prompt( " ¿Como te llamas? ");
    alert (" Bienvenido " +  NombreUsuario + ' ¡Haz click en iniciar juego!');
}
*/

function mostrarContainer() {
  var myName = document.getElementById("nombre").value;
document.getElementById('containerBody').style.display = 'block';
  document.getElementById("hiName").textContent = ("Hola, Bienvenid@ " + myName);
  //document.getElementById('hiName').text("Hola Bienvenid@" + myName );
}

/* PRUEBA PARA ESCONDER BLOQUE TRIVIA function mostrarsalir() {
  document.getElementById('salir').style.display = 'block'
}*/

function salir() {
  var salir = confirm("¿Deseas salir del Juego?")
  if (salir) {
    alert("Gracias por intentarlo")
    document.write('Hazta luego')
  }
}

function reiniciar() {
  
document.getElementById('containerBody').style.display = 'none';
  document.getElementById("hiName").textContent = ("Hola");
  document.getElementById('id_formulario').reset();
  roma.style.background = "white";
  tokyo.style.background = "white";
  londres.style.background = "white";

}



