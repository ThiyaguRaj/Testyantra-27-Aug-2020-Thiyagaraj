import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import TestNav from './components/Navbar/TestNav';
function App() {
  return (
    <Router>
      <div>
        <TestNav />
      </div>
    </Router>
  );
}

export default App;
