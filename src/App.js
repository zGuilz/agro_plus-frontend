import Home from './pages/Home';
import CriarConta from './pages/CriarConta';
import ConfirmarConta from './pages/ConfirmarConta';
import CriarContaAgricultor from './pages/CriarContaAgricultor';
import LoginCliente from './pages/LoginCliente';
import PedidoCliente from './pages/PedidoCliente';
import PagamentoConfirmado from './pages/PagamentoConfirmado';
import CalculadoraNutricional from './pages/CalculadoraNutricional'

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

import { isAuthenticated } from './services/auth';

import './App.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/criarConta" component={CriarConta} />
          <Route
            path="/criarContaAgricultor"
            component={CriarContaAgricultor}
          />
          <Route path="/calculadora" component={CalculadoraNutricional} />
          <Route path="/confirmarConta" component={ConfirmarConta} />
          <Route path="/loginCliente" component={LoginCliente} />
          <PrivateRoute path="/pedidoCliente" component={PedidoCliente} />
          <PrivateRoute
            path="/pagamentoConfirmado"
            component={PagamentoConfirmado}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
