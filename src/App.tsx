import React from 'react';
import { Switch } from 'react-router-dom';
import Provider from './components/provider/Provider';
import Route from './components/route/Route';
import { routes } from './routing';
import Header from './components/header';
const App: React.FC = () => {
  const pages = routes.map((x, i) => (
    <Route key={i} path={x.url}>
      <x.content />
    </Route>
  ));

  return (
    <Provider>
      <Header />
      <Switch>{pages}</Switch>
    </Provider>
  );
};

export default App;
