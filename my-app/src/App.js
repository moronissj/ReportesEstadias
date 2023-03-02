import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div class="header">

    <div class="left">

          <select name="menu" id="menu">
            <option value="1">Reportes para Revisión</option>
            <option value="2">Reportes de Estadía</option>
            <option value="3">Alumnos</option>
            <option value="4">Asesores</option>
            <option value="5">Cerrar sesión</option>
          </select>

          
          <i class="fa-solid fa-bell" id="notificaciones" ></i>
    </div>

    <div class="right">
        <input type="text" placeholder="Buscar Repositorio"></input>
        <button id="buscar"><i class="fa-solid fa-magnifying-glass"></i></button>

    </div>
</div>
  );
}

export default App;
