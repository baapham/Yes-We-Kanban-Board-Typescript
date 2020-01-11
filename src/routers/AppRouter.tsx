import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';
import Help from '../components/Help';

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route path="/help">
                        <Help /> 
                    </Route>
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;