import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';
import Navbar from './Navbar';
import Home from './Home';
import Dashboard from './Dashboard';
import FriendProfile from './FriendProfile';
import InspectMovie from './InspectMovie';
import NewRec from './NewRec';
import LogIn from './LogIn';
import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  function loginUser(username) {
    setCurrentUser(username);
    console.log(currentUser);
  }
  // function setCurrentUser(username) {
  //   alert('setting username: ' + username);
  // }
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <main role="main" className="body-content">
          <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard username={currentUser} />}
            />
            <Route path="/profile/:usernameReq" element={<FriendProfile />} />
            <Route path="/movie/:id" element={<InspectMovie />} />
            <Route path="/new-rec/:userTo" element={<NewRec />} />
            <Route path="/login" element={<LogIn updateUser={loginUser} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
