import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';

import Navbar from './components/layouts/Navbar';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
    </div>
  )
}