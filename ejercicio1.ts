class Alumno {
    nombre: string;
    edad: number;
    carrera: string;
    


    constructor(nombre: string, edad: number, carrera: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
    }

    crearAlumno(nombre: string, edad: number, carrera: string): void {
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
    }

    obtenerAlumno(): Alumno {
        return this;
    }
}

const alumnos: Alumno[] = [];

const nombres = ["Ana", "Carlos", "María", "Juan", "Luis", "Sofia", "Pedro", "Laura", "Diego", "Carmen"];
const carreras = ["Ingeniería", "Medicina", "Derecho", "Arquitectura", "Psicología"];

for (let i = 0; i < 10; i++) {
    const alumno = new Alumno(
        nombres[i] || `Estudiante${i}`,
        18 + Math.floor(Math.random() * 10),
        carreras[Math.floor(Math.random() * carreras.length)] || "General"
    );
    alumnos.push(alumno);
}

console.log(" --LISTA ORIGINAL-- ");
alumnos.forEach((alumno, index) => {
    console.log(`${index + 1}. ${alumno.nombre} - ${alumno.edad} años - ${alumno.carrera}`);
});

const alumnosOrdenados = alumnos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("\n--- ALUMNOS ORDENADOS POR NOMBRE ---");
alumnosOrdenados.forEach((alumno, index) => {
    console.log(`${index + 1}. ${alumno.nombre} - ${alumno.edad} años - ${alumno.carrera}`);
});

alumnosOrdenados.shift();
alumnosOrdenados.pop();

console.log("\n--- DESPUÉS DE QUITAR PRIMERO Y ÚLTIMO ---");
alumnosOrdenados.forEach((alumno, index) => {
    console.log(`${index + 1}. ${alumno.nombre} - ${alumno.edad} años - ${alumno.carrera}`);
});