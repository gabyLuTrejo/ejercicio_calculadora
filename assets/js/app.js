
function verNumero(numero){
  var mostrar = document.getElementById('pantalla');
  mostrar.value += numero.getAttribute("valor");
}

function resolverOperacion(operacion){
  var resultado = document.getElementById('pantalla');
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
