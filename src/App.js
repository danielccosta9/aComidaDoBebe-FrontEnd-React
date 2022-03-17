import {BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Main from './components/main/Main'
import Home from './components/home/Home'
import Usuario from './components/cadastroUsuario/Usuario';
import Ingrediente from './components/cadastroIngrediente/Ingrediente';

const App = () => {
  return (
    <div className='App'>

      <BrowserRouter>

        <Nav variant='tabs'>
          <Nav.Link as={Link} to="/" ><Home/></Nav.Link>
          <Nav.Link as={Link} to="/usuario" >Cadastro de Usuários</Nav.Link>
          <Nav.Link as={Link} to="/ingrediente" >Cadastro de Ingredientes</Nav.Link>
        </Nav>


        <Routes>
          <Route path="/" element={<Main/>} exact />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/ingrediente" element={<Ingrediente />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
