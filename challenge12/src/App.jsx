import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import TodoApp from './components/TodoApp';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <Router> {/* Mueve el Router para envolver al AuthProvider */}
      <AuthProvider>
        <NavComponent />
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/todos" element={<TodoApp />} />
             
            </Route>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
    </div>
  );
};

export default App;
