import { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes para validar props
import { useNavigate } from 'react-router-dom';

// Estado inicial
const initialState = {
  isAuthenticated: false,
  user: null,
  lastVisitedPage: '/',
};

// Reducer para manejar las acciones de autenticación
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case 'SET_LAST_VISITED_PAGE':
      return {
        ...state,
        lastVisitedPage: action.payload.page,
      };
    default:
      return state;
  }
};

// Crear el contexto de autenticación
const AuthContext = createContext();

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => useContext(AuthContext);

// Provider del contexto de autenticación
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();

  // Función para iniciar sesión
  const login = (username) => {
    dispatch({
      type: 'LOGIN',
      payload: { user: username },
    });
    navigate(state.lastVisitedPage || '/'); // Redirige a la última página visitada o a la página principal
  };

  // Función para cerrar sesión
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  // Función para guardar la última página visitada
  const setLastVisitedPage = (page) => {
    dispatch({
      type: 'SET_LAST_VISITED_PAGE',
      payload: { page },
    });
  };

  return (
    <AuthContext.Provider
      value={{ ...state, login, logout, setLastVisitedPage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Añadir PropTypes para 'children'
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
