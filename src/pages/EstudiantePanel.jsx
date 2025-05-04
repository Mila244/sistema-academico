import React, { useState } from "react";
import cursos from "../data/cursosFake";

function EstudiantePanel() {
  const [escuela, setEscuela] = useState("sistemas");

  return (
    <div>
      <h2>Panel del Estudiante</h2>
      <p>Selecciona tu Escuela Profesional:</p>
      <select value={escuela} onChange={(e) => setEscuela(e.target.value)}>
        <option value="sistemas">Ingeniería de Sistemas</option>
        <option value="contabilidad">Contabilidad</option>
      </select>

      <h3>Cursos disponibles:</h3>
      <ul>
        {(cursos[escuela] || []) .map((curso) => (
          <li key={curso.id}>
            {curso.nombre} (Ciclo {curso.ciclo})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EstudiantePanel;