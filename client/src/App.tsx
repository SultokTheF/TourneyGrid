import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';

import TournamentListPage from './pages/Teams/TournamentListPage';
import AddTeamPage from './pages/Teams/AddTeamPage';

import AddTournamentPage from './pages/Tournaments/AddTournamentPage';

import LoginPage from './pages/Authorization/LoginPage';
import RegisterPage from './pages/Authorization/RegisterPage';

import Navbar from './components/layouts/Navbar';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/about' element={<AboutPage />}/>

        <Route path='/team' element={<TournamentListPage />}/>
        <Route path='/team/add' element={<AddTeamPage />}/>

        <Route path='/tournament/add' element={<AddTournamentPage />}/>

        <Route path='/login' element={<LoginPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
      </Routes>
    </div>
  )
}