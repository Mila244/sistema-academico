import React, { useState } from "react";
import cursos from "../data/cursosFake";

function EstudiantePanel() {
  const [escuela, setEscuela] = useState("sistemas");
  const [desaprobados, setDesaprobados] = useState([1]); // Simula curso ID 1 desaprobado
  const [seleccionados, setSeleccionados] = useState([]);

  const manejarSeleccion = (cursoId) => {
    setSeleccionados((prev) =>
      prev.includes(cursoId)
        ? prev.filter((id) => id !== cursoId)
        : [...prev, cursoId]
    );
  };

  const validarRestriccion = (curso) => {
    return curso.requisito && desaprobados.includes(curso.requisito);
  };


  return (
    <div>
      <h2>Panel del Estudiante</h2>
      <label>Escuela Profesional:</label>
      <select value={escuela} onChange={(e) => setEscuela(e.target.value)}>
        <option value="sistemas">Ingeniería de Sistemas</option>
        <option value="contabilidad">Contabilidad</option>
      </select>

      <h3>Cursos disponibles para matrícula:</h3>
      <ul>
        {(cursos[escuela] || []).map((curso) => {
          const bloqueado = validarRestriccion(curso);
          return (
            <li key={curso.id}>
              <label>
                <input
                  type="checkbox"
                  disabled={bloqueado}
                  checked={seleccionados.includes(curso.id)}
                  onChange={() => manejarSeleccion(curso.id)}
                />
                {curso.nombre} (Ciclo {curso.ciclo})
                {bloqueado && " ❌ Requiere aprobar curso previo"}
              </label>
            </li>
          );
        })}
      </ul>

      <h4>Cursos seleccionados:</h4>
      <ul>
        {seleccionados.map((id) => {
          const curso = cursos[escuela].find((c) => c.id === id);
          return <li key={id}>{curso?.nombre}</li>;
        })}
      </ul>
    </div>
  );
}

export default EstudiantePanel;