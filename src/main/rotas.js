import React from 'react'

import Login from '../views/login'
import CadastroUsuario from '../views/CadastroUsuario'
import Home from '../views/Home'

import { Route, Switch, HashRouter } from 'react-router-dom'

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario}/>
            </Switch>
        </HashRouter>
    )
}

export default Rotas