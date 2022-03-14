import { useState } from 'react';
import {BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import Main from './components/main/Main'
import Home from './components/home/Home'
import Alimentos from './components/cadastroAlimentos/Alimentos';
import Refeicao from './components/cadastroRefeicao/Refeicao';

import './App.css';

const App = () => {
  return (
    <div className='App'>

      <BrowserRouter>

        <Nav variant='tabs'>
          <Nav.Link as={Link} to="/"><Home/></Nav.Link>
          <Nav.Link as={Link} to="/alimentos">Cadastro de Alimentos</Nav.Link>
          <Nav.Link as={Link} to="/refeicao">Cadastro de Refeicao</Nav.Link>
        </Nav>


        <Routes>
          <Route path="/" element={<Main/>} exact />
          <Route path="/alimentos" element={<Alimentos/>}/>
          <Route path="/refeicao" element={<Refeicao/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
