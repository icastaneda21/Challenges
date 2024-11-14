import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import TodoApp from './components/TodoApp';


const App = () => {
  return (
    <Router>
      <NavComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoApp />} />
          
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => <h2>Welcome to the Home Page</h2>;

export default App;
