
function verNumero(numero){
  var mostrar = document.getElementById('pantalla');
  mostrar.value += numero.getAttribute("valor");
}

function resolverOperacion(operacion){
  var resultado = document.getElementById('pantalla');
  resultado.value = eval(resultado.value);
}
