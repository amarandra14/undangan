import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header, Fitur, Harga, Accordion, Pembayaran } from './container';

import { Navbar } from './components';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';


const App = () => {
  return (
    <Routes>
      <Route element={<LandingPage/>} path="/" />
      <Route element={<Login/>} path="/login" />
      <Route element={<Register/>} path="/register" />
    </Routes>
  )
}

export default App 