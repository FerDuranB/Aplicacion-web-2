//Entidad Paciente con sus atributos
const Pacientes = [
  {
    IdPaciente: 1,
    Nombre: "Fernandoo",
    Identificacion: 0999999991,
  },
  {
    IdPaciente: 2,
    Nombre: "Eduardo",
    Identificacion: 0999999992,
  },
  {
    IdPaciente: 3,
    Nombre: "Luis",
    Identificacion: 0999999993,
  },
  {
    IdPaciente: 4,
    Nombre: "Melissa",
    Identificacion: 0999999994,
  },
  {
    IdPaciente: 5,
    Nombre: "Yessenia",
    Identificacion: 0999999995,
  },
];

// Funcion flecha que recoore por todo el arreglo con una estructura de recorrido de for
let ListaPaciente = (Pacientes) => {
  for (let i = 0; i < ListaPaciente.length; i++) {
    ListaPaciente[i] = ListaPaciente[i];
  }

  return Pacientes;
};
// funcion que actualiza los datos y un recorido de for-in
let ListaPacienteNew = ListaPaciente(Pacientes);
console.log("\n------------- DATOS DE LOS PACIENTES  -------------");
for (ListaPacienteNew in Pacientes) {
  console.log(Pacientes[ListaPacienteNew]);
}
console.log("----------------------------------------------");

//entidad Signo vitales con sus atributos
const SignosVitales = [
  {
    IdSignoVital: 1,
    Descripcion: "Presion arterial",
    NivelMinimo: 120,
    NivelMaximo: 80,
  },
  {
    IdSignoVital: 1,
    Descripcion: "Presion arterial",
    NivelMinimo: 120,
    NivelMaximo: 80,
  },
  {
    IdSignoVital: 2,
    Descripcion: "Temperatura",
    NivelMinimo: 36.5,
    NivelMaximo: 37.3,
  },
  {
    IdSignoVital: 3,
    Descripcion: "Respiracion",
    NivelMinimo: 12,
    NivelMaximo: 18,
  },
  {
    IdSignoVital: 4,
    Descripcion: "Pulso",
    NivelMinimo: 60,
    NivelMaximo: 100,
  },
];

let RevicionSigno = (SignosVitales) => {
  for (let i = 0; i < SignosVitales.length; i++) {
    SignosVitales[i] = SignosVitales[i];
  }

  return SignosVitales;
};

// funcion que actualiza los datos y un recorido de foreach
let RevicionSignoNew = RevicionSigno(SignosVitales);
console.log("\n--------------- DATOS DE LOS SIGNO VITALES  ---------------");
SignosVitales.forEach((RevicionSignoNew) => {
  console.log(
    `ID Signo Vital: ${RevicionSignoNew.IdSignoVital} Descripción: ${RevicionSignoNew.Descripcion} Nivel Minimo: ${RevicionSignoNew.NivelMinimo}  Nivel Maximo: ${RevicionSignoNew.NivelMaximo}`
  );
});
console.log("--------------------------------------------------");

//Entiddad Controles Realizado con sus atributos
const ControlesRealizados = [
  {
    IdControlRealizado: 1,
    IdPaciente: 1,
    IdSgnoVital: 1,
    Fecha: {
      Dia: [21],
      Mes: [12],
      Año: [2020],
    },
    Hora: "3pm",
    Valor: 1,
  },
  {
    IdControlRealizado: 2,
    IdPaciente: 2,
    IdSgnoVital: 2,
    Fecha: {
      Dia: [21],
      Mes: [12],
      Año: [2020],
    },
    Hora: "4pm",
    Valor: 2,
  },
  {
    IdControlRealizado: 3,
    IdPaciente: 3,
    IdSgnoVital: 3,
    Fecha: {
      Dia: [21],
      Mes: [12],
      Año: [2020],
    },
    Hora: "1am",
    Valor: 3,
  },
  {
    IdControlRealizado: 4,
    IdPaciente: 4,
    IdSgnoVital: 4,
    Fecha: {
      Dia: [21],
      Mes: [12],
      Año: [2020],
    },
    Hora: "6pm",
    Valor: 1,
  },
  {
    IdControlRealizado: 5,
    IdPaciente: 5,
    IdSgnoVital: 5,
    Fecha: {
      Dia: [21],
      Mes: [12],
      Año: [2020],
    },
    Hora: "7pm",
    Valor: 5,
  },
];

let Revicion = (ControlesRealizados) => {
  for (let i = 0; i < ControlesRealizados.length; i++) {
    ControlesRealizados[i] = ControlesRealizados[i];
  }

  return ControlesRealizados;
};

//Funcion que actualiza datos y una estructura de recorrido for-of
let RevicionNew = Revicion(ControlesRealizados);
console.log(
  "\n--------------- DATOS DE LOS CONTROLES REALIZADOS  ---------------"
);
for (RevicionNew of ControlesRealizados) {
  console.log(
    `ID de Contro Realizado ${RevicionNew.IdControlRealizado} ID Paciente: ${RevicionNew.IdPaciente} ID Signo Vital: ${RevicionNew.IdSgnoVital} Dia: ${RevicionNew.Fecha.Dia} Mes: ${RevicionNew.Fecha.Mes} Año: ${RevicionNew.Fecha.Año} hora: ${RevicionNew.Hora} Valor: ${RevicionNew.Valor}`
  );
}
console.log("--------------------------------------------------");
