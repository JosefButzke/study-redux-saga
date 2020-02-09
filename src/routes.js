import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page1 from './pages/page1';
import Page2 from './pages/page2';

export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Page1} />
            <Route path='/carrinho' exact component={Page2} />
        </Switch>
    )
}