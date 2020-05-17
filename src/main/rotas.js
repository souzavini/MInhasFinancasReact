import React from 'react'

import Login from '../views/login'
import CadastroUsuario from '../views/CadastroUsuario'
import Home from '../views/Home'
import ConsultaLancamentos from '../views/lancamentos/consultaLancamentos'

import { Route, Switch, HashRouter } from 'react-router-dom'

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario}/>
                <Route path="/consulta-lancamentos" component={ConsultaLancamentos}/>

            </Switch>
        </HashRouter>
    )
}

export default Rotas