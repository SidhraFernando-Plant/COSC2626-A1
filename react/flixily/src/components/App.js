import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <main role="main" className="body-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
