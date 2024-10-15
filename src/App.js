import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './resources/pages/Home';
import Navbar from './resources/shared/Navbar';
import InstallPWA from './resources/shared/InstallModal';
import PokeData from './resources/pages/Pokemon_Details';

function App() {
  return (
    <BrowserRouter>
      <div className='pattern_body'>
        <Navbar />
        <InstallPWA />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poke_data/:name" element={<PokeData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;