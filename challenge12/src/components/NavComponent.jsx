import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './NavComponent.css';

const NavComponent = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        {isAuthenticated && (
          <>
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
          </>
        )}
      </ul>
      <div className="auth-controls">
        {isAuthenticated ? (
          <>
            <span className="username">Hello, {user}</span>
            <button onClick={logout} className="btn btn-secondary btn-sm">Logout</button>
          </>
        ) : (
          <NavLink to="/login" className="btn btn-primary btn-sm">Login</NavLink>
        )}
      </div>
    </nav>
  );
};

export default NavComponent;
