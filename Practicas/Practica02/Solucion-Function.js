//Importamos los arreglos que tengamos que usar del archivo datos.js
const  {ControlesRealizados, Pacientes } = require('./datos.js')

//Funcion de busqueda sin usar Async
function mostrarElemento(idControl) {
  const encontrado = ControlesRealizados.find((elemento) => {
    return elemento.IdControlRealizado == idControl;
  });
  const encontrado2 = Pacientes.find((elemento) => {
    return elemento.Id == encontrado.IdPaciente;
  });

  console.log("Elemento del arreglo de objetos transaccional: ");
  console.log(encontrado);

  console.log("Datos de la entidad relacionada: ");
  console.log(encontrado2);
}

mostrarElemento(2);
