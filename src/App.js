import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/homepage';
import ServiciosPage from './pages/serviciospage';
import NosotrosPage from './pages/nosotrospage';
import ContactoPage from './pages/contactopage';

import './App.css';
import './styles/components/layout/Header.css';
import './styles/components/layout/Footer.css';
import './styles/components/layout/Nav.css';
import './styles/components/pages/homepage.css';
import './styles/components/pages/nosotrospage.css';
import './styles/components/pages/serviciospage.css';
import './styles/components/pages/contactopage.css';

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