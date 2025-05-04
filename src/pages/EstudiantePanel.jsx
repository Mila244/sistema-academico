import React, { useState } from "react";
import cursosPorEscuela from "../data/cursosFake"; // Asegúrate que esta ruta es correcta

function EstudiantePanel() {
  const [escuela, setEscuela] = useState("Ingeniería de Sistemas");
  const [ciclo, setCiclo] = useState(1);
  const [seleccionados, setSeleccionados] = useState([]);

  const cursosDisponibles =
    cursosPorEscuela[escuela]?.filter((c) => c.ciclo === ciclo) || [];
    console.log("Escuela:", escuela);
    console.log("Ciclo:", ciclo);
    console.log("Cursos encontrados:", cursosDisponibles);

  const manejarSeleccion = (codigo) => {
    if (seleccionados.includes(codigo)) {
      setSeleccionados(seleccionados.filter((c) => c !== codigo));
    } else {
      setSeleccionados([...seleccionados, codigo]);
    }
  };

  const confirmarMatricula = () => {
    if (seleccionados.length === 0) {
      alert("No has seleccionado ningún curso.");
    } else {
      alert(`Te has matriculado en:\n${seleccionados.join(", ")}`);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Panel del Estudiante</h2>

      <div>
        <label><strong>Escuela Profesional:</strong></label>
        <select value={escuela} onChange={(e) => setEscuela(e.target.value)}>
          <option value="Ingeniería de Sistemas">Ingeniería de Sistemas</option>
          <option value="Administración">Administración</option>
        </select>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <label><strong>Semestre:</strong></label>
        <select value={ciclo} onChange={(e) => setCiclo(parseInt(e.target.value))}>
          <option value={1}>1° Ciclo</option>
          <option value={2}>2° Ciclo</option>
          <option value={3}>3° Ciclo</option>
        </select>
      </div>

      <h3 style={{ marginTop: "1rem" }}>Cursos disponibles:</h3>
      {cursosDisponibles.length === 0 ? (
        <p>No hay cursos disponibles para esta combinación.</p>
      ) : (
        <ul>
          {cursosDisponibles.map((curso) => (
            <li key={curso.codigo}>
              <label>
                <input
                  type="checkbox"
                  checked={seleccionados.includes(curso.codigo)}
                  onChange={() => manejarSeleccion(curso.codigo)}
                />
                {curso.nombre} ({curso.codigo})
              </label>
            </li>
          ))}
        </ul>
      )}

      <button onClick={confirmarMatricula} style={{ marginTop: "1rem" }}>
        Confirmar matrícula
      </button>
    </div>
  );
}

export default EstudiantePanel;
