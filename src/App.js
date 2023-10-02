//import './App.css';

import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/homepage';
import ServiciosPage from './pages/serviciospage';
import NosotrosPage from './pages/nosotrospage';
import ContactoPage from './pages/contactopage';

function App() {
  return (
    <div className="App">
      <Header/>
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='nosotros' element={<NosotrosPage/>} />
            <Route path='servicios' element={<ServiciosPage/>} />
            <Route path='contacto' element={<ContactoPage/>} />
          </Routes>
        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;