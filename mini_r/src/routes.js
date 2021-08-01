import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import SobreEmpresa from './pages/SobreEmpresa';
import Contato from './pages/Contato';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/sobre-empresa" component={SobreEmpresa} />
                <Route path="/contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;