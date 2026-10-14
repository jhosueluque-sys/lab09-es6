import estudiantes, { curso } from "./datos.js";
import { reporte } from "./calculos.js";

const nuevo = { ...estudiantes[0], nombre: "Ana María" };
const todos = [...estudiantes, nuevo];

console.log(`Curso: ${curso}`);

const ulReportes = document.querySelector("#reportes");

todos.forEach(estudiante => {
  const lineaReporte = reporte(estudiante);
  console.log(lineaReporte);
  
  if (ulReportes) {
    const li = document.createElement("li");
    li.textContent = lineaReporte;
    ulReportes.appendChild(li);
  }
});