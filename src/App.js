import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './resources/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/recipe/:id" element={<RecipeDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
