import Navbar from './components/Navbar'
import Home from './pages/Home'

import { Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
				<Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
