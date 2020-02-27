import React from 'react'
import {HashRouter, Switch, Route } from 'react-router-dom'
import CadastroProduto from './views/produtos/cadastro'
import ConsultaProduto from './views/produtos/consulta'
import Home from  './views/home'

export default () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/cadastro-produtos" component={CadastroProduto} />
                <Route exact={true} path="/consulta-produtos" component={ConsultaProduto} />
            </Switch>
        </HashRouter>
    )
}