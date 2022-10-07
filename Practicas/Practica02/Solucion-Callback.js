//Importamos los arreglos que tengamos que usar del archivo datos.js
const  {ControlesRealizados, Pacientes } = require('./datos.js')

//Metodo de estructura Callback
function BuscarIdControlesrealizados (IdControlesRealizados, callback){
    const CrtlRealizado = ControlesRealizados.find((CrtlRealizado)=> CrtlRealizado.IdControlRealizado === IdControlesRealizados);
    if(!CrtlRealizado)
    {
        const error = new Error();
        error.message = "Id del control realizado no se encuentra";
        return callback(error);
    }
    return callback(null, CrtlRealizado)
}

function BuscarIdPacientes(Id, callback){
    const Paciente = Pacientes.find((Paciente)=>Paciente.Id === Id);
    if(!Paciente)
    {
        const error = new Error();
        error.message = "Nombre del paciente no encontrado";
        return callback(error); 
    }
    return callback(null, Paciente)
}



BuscarIdControlesrealizados(2, (err, CrtlRealizado)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    // console.log(CrtlRealizado)
    BuscarIdPacientes(CrtlRealizado.IdControlRealizado, (err, Paciente)=>{
        if(err)
        {
            return console.log(err.message)
        }
        CrtlRealizado.Paciente = Paciente;
        delete CrtlRealizado.IdPaciente;
        console.log(CrtlRealizado)

    })
})
