
function verNumero(numero){
  var mostrar = document.getElementById('pantalla');
  var numeroIngresado = numero.getAttribute("valor");
  if(mostrar.value == 0 ){
    mostrar.value = numeroIngresado;
  } else{
    mostrar.value += numeroIngresado;
  }
}

function borrar(numero){
  var mostrar = document.getElementById('pantalla');
  document.getElementById('operacionRequerida').innerHTML = mostrar.value;
  mostrar.value = "0";
}

function borrarUltimoNumero(){
  var numero = document.getElementById('pantalla').value;
  var nuevoValor = numero.substring(0,numero.length-1);
  document.getElementById('pantalla').value = nuevoValor;
}

function resolverOperacion(operacion){
  var resultado = document.getElementById('pantalla');
  document.getElementById('operacionRequerida').innerHTML = resultado.value;
  resultado.value = eval(resultado.value);
}

function numerosTeclado(event){
  var tecla = event.keyCode;
  if (tecla == 13) {
    resolverOperacion();
  }
  if(tecla < 42 || tecla > 57){
      return false;
  }
}
