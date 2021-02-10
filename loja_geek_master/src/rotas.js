import { Form } from "react-bootstrap";
import { Switch, Route } from 'react-router-dom';

import Produtos from './pages/Produtos';

import Pedidos from './pages/Pedidos';

import Contato from './pages/Contato';

import Lojas from './pages/Lojas'


function Rotas() {
    return(
        <Switch>
            <Route exact path="/produtos" component={ Produtos } />
            <Route exact path="/pedidos" component={ Pedidos } />
            <Route exact path="/Contato" component={ Contato } />
            <Route exact path="/Lojas" component={ Lojas } />


        </Switch>
    )
}

export default Rotas;