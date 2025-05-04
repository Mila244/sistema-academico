import React from "react";

function AdminPanel() {
  return (
    <div>
      <h2>Panel del Administrador</h2>
      <p>Aquí puedes asignar docentes y registrar la malla curricular.</p>
      <ul>
        <li>Registrar nuevos cursos</li>
        <li>Asignar docentes a cursos</li>
        <li>Configurar requisitos entre cursos</li>
      </ul>
    </div>
  );
}

export default AdminPanel;