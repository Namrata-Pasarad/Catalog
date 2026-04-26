import Home from './Components/Home';
import ItemDetail from './Components/ItemDetail';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:name" element={<ItemDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
