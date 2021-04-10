
import Home from './pages/Home';
import CriarConta from './pages/CriarConta'; 
import CriarContaAgricultor from './pages/CriarContaAgricultor';
import ConfirmarConta from './pages/ConfirmarConta';


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
      </Switch>
    </Router>
    </div>
  );
}

export default App;
