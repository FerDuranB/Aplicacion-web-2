//Importamos los arreglos que tengamos que usar del archivo datos.js
const  {ControlesRealizados, Pacientes } = require('./datos.js')

//Metodo de estructura Promise
function BuscarCrtlRealizadoPorId(IdControlRealizado){
    return new Promise((resolve, reject)=>{
        const IdCrtlRealizado = ControlesRealizados.find((IdCrtlRealizado) => IdCrtlRealizado.IdControlRealizado===IdControlRealizado);
        if(!IdCrtlRealizado)
        {
            const error = new Error();
            error.message = "El Id del control realizado no fue encontrado";
            reject(error);
        }
        resolve(IdCrtlRealizado);
    })
}

function BuscarPacientePorId(Id){
    return new Promise((resolve, reject)=>{
        const Paciente = Pacientes.find((Paciente) => {
            return Paciente.Id===Id;
        });
        if(!Paciente)
        {
            const error = new Error();
            error.message = "El Id del Pacinete no fue encontrado";
            reject(error);
        }
        resolve(Paciente)
    })
}

BuscarCrtlRealizadoPorId(3)
.then((IdCrtlRealizado)=>{
    console.log(IdCrtlRealizado);
    return BuscarPacientePorId(IdCrtlRealizado.IdPaciente);
})
.then((Paciente)=>{
    console.log(Paciente)
})
.catch((error)=>{
    console.log(error.message)
})