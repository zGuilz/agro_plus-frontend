
import Home from './pages/Home';
import CriarConta from './pages/CriarConta'; 
import ConfirmarConta from './pages/ConfirmarConta';
import CriarContaAgricultor from './pages/CriarContaAgricultor';
import LoginCliente from './pages/LoginCliente';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/criarConta" component={CriarConta} />
        <Route path="/criarContaAgricultor" component={CriarContaAgricultor} />
        <Route path="/confirmarConta" component={ConfirmarConta} />
        <Route path="/loginCliente" component={LoginCliente} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
