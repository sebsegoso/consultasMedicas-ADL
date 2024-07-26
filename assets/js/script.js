// Lista de horas por especialidad
const horasDental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "11123425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9878789-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7998789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18887662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14441281-0",
    prevision: "ISAPRE",
  },
];

const horasRadiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];
const horasTraumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15554774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15444147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17879423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1547423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16554741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9747535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "11254785-5",
    prevision: "ISAPRE",
  },
];
// Lista de especialidades con sus respectivas horas de atención
const horasPorEspecialidad = {
  /** el nombre de la propiedad definirá nuestros titulos */
  Radiologia: horasRadiologia,
  Traumatologia: horasTraumatologia,
  Dental: horasDental,
};

/**
 * Crea un encabezado HTML para una especialidad médica, incluyendo la primera y última hora de atención.
 *
 * @param {Object[]} horas - Un array de objetos que representan las horas de atención.
 * @param {string} especialidad - El nombre de la especialidad médica.
 *
 * @returns {string} El código HTML para el encabezado de la especialidad.
 */
function generarHeader(horas, especialidad) {
  const primeraHora = horas[0]; // Primera hora de atención
  const ultimaHora = horas[horas.length - 1]; // Última hora de atención

  return `
        <div class="text-center">
            <h2>${especialidad}</h2>
            <p><b>Primera atención</b>: ${primeraHora.paciente} - ${primeraHora.prevision} | <b>Última atención</b> : ${ultimaHora.paciente} - ${ultimaHora.prevision}.</p>
        </div>
    `;
}

/**
 * Genera una tabla HTML a partir de un array de objetos que representan las horas de atención.
 *
 * @param {Object[]} horas - Un array de objetos que representan las horas de atención.
 *
 * @returns {string} El código HTML para la tabla de horas.
 */
function generarTabla(horas) {
  let encabezados = "";
  // Crear encabezados de la tabla basados en las claves del primer objeto
  for (let key in horas[0]) {
    encabezados += `<th>${key.toUpperCase()}</th>`;
  }

  let filas = "";
  // Crear filas para la tabla
  for (let hora of horas) {
    let columnas = "";
    // Crear columnas para cada fila
    for (let key in hora) {
      columnas += `<td>${hora[key]}</td>`;
    }
    filas += `<tr>${columnas}</tr>`;
  }

  return `
       <div class="table-responsive">
            <table class="rounded table table-bordered table-striped shadow-sm">
                <thead>
                    <tr>${encabezados}</tr>
                </thead>
                <tbody>
                    ${filas}
                </tbody>
            </table>
       </div>
    `;
}

// Renderizar el contenido en el elemento principal
const main = document.getElementById("Main");
main.innerHTML += `
    <h1 class="text-center my-3">Estadisticas centro médico ñuñoa</h1>
`;

// Iterar sobre las especialidades y agregar cada una al documento
for (let especialidad in horasPorEspecialidad) {
  const horas = horasPorEspecialidad[especialidad];
  main.innerHTML += `
        <section id="${especialidad}" class="border p-3 rounded mb-4">
            ${generarHeader(horas, especialidad)}
            ${generarTabla(horas)}
        </section>
    `;
}
