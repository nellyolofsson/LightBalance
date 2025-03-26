import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Importera din HomePage-komponent
import SupplementsPage from './pages/SupplementsPage';
import Product from './pages/Product';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/supplements" element={<SupplementsPage />} />
        <Route path="/product/:productId" element={<Product />} /> {/* Dynamisk rutt för produkt */}
     
   </Routes>
    </Router>
  );
}

export default App;
