import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
