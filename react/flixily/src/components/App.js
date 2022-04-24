import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar';
import Home from './Home';
import Dashboard from './Dashboard';
import FriendProfile from './FriendProfile';
import InspectMovie from './InspectMovie';
import DataFetch from './DataFetch';
import NewRec from './NewRec';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <main role="main" className="body-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile/:usernameReq" element={<FriendProfile />} />
            <Route path="/movie" element={<InspectMovie />} />
            <Route path="/data" element={<DataFetch />} />
            <Route path="/new-rec" element={<NewRec />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
