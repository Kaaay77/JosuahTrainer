import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import SobreMi from './pages/sobreMi/sobreMi';

import { Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sobremi" element={<SobreMi />} />
      </Routes>
    </div>
  );
}

export default App;
