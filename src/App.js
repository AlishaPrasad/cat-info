import CatBreedDetails from './components/CatBreedDetails';
import CatBreeds from './components/CatBreeds';
import {Route, Routes } from "react-router-dom";

function App() {
  return (    
      <div>
        <header>
          <Routes>
            <Route path="/" element={<CatBreeds />} />
            <Route path="details/:id" element={<CatBreedDetails />} />
          </Routes>
        </header>        
      </div>
  );
}

export default App;
