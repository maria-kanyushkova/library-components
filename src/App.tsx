import React from 'react';
import { Route, Switch } from "react-router";
import { Layout } from "./layers";
import { pages } from "./pages";
import { BrowserRouter } from "react-router-dom";

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Layout>
                    <Switch>
                        { pages.map((page, index) => (
                            <Route key={ index } exact={ true } path={ page.path } component={ page.component }/>
                        )) }
                    </Switch>
                </Layout>
            </div>
        </BrowserRouter>
    );
};
