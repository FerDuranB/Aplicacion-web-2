//Entidades en arreglos 
const Pacientes = [
  {
    Id: 1,
    Nombre: "Fernando",
    Identificacion: 0999999991,
  },
  {
    Id: 2,
    Nombre: "Eduardo",
    Identificacion: 0999999992,
  },
  {
    Id: 3,
    Nombre: "Luis",
    Identificacion: 0999999993,
  },
  {
    Id: 4,
    Nombre: "Melissa",
    Identificacion: 0999999994,
  },
  {
    Id: 5,
    Nombre: "Yessenia",
    Identificacion: 0999999995,
  },
];

const SignosVitales = [
  {
    Id: 1,
    Descripcion: "Presion arterial",
    NivelMinimo: 120,
    NivelMaximo: 80,
  },
  {
    Id: 1,
    Descripcion: "Presion arterial",
    NivelMinimo: 120,
    NivelMaximo: 80,
  },
  {
    Id: 2,
    Descripcion: "Temperatura",
    NivelMinimo: 36.5,
    NivelMaximo: 37.3,
  },
  {
    Id: 3,
    Descripcion: "Respiracion",
    NivelMinimo: 12,
    NivelMaximo: 18,
  },
  {
    Id: 4,
    Descripcion: "Pulso",
    NivelMinimo: 60,
    NivelMaximo: 100,
  },
  {
    Id: 5,
    Descripcion: "Pulso",
    NivelMinimo: 60,
    NivelMaximo: 100,
  },
];

const ControlesRealizados = [
  {
    IdControlRealizado: 1,
    IdPaciente: 1,
    IdSignoVital: 1,
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
    IdSignoVital: 2,
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
    IdSignoVital: 3,
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
    IdSignoVital: 4,
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
    IdSignoVital: 5,
    Fecha: {
      Dia: [21],
      Mes: [12],
      Año: [2020],
    },
    Hora: "7pm",
    Valor: 5,
  },
];

//Modulo que exporta los arreglos 
module.exports = {
  Pacientes,
  SignosVitales,
  ControlesRealizados,
};
