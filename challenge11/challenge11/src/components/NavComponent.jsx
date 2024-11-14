import { NavLink } from 'react-router-dom';
import './NavComponent.css'; // Archivo CSS para estilos

const NavComponent = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink to="/" exact className="nav-link" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/todos" className="nav-link" activeClassName="active-link">
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link" activeClassName="active-link">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;
