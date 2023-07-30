import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import TournamentListPage from './pages/TournamentListPage';

import Navbar from './components/layouts/Navbar';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='teamList' element={<TournamentListPage />}/>
      </Routes>
    </div>
  )
}