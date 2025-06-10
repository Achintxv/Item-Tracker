import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import AddItemPage from './Pages/AddItemPage';
import ItemListPage from './Pages/ItemListPage';
import RegisterPage from './Pages/RegisterPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/items" element={<ItemListPage />} />
        <Route path="/add-item" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
