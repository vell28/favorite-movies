import React from 'react';
import { Router, Route, BrowserRouter } from 'react-router-dom';

import Layout from '../layout';
import StartPage from '../conteiners/home';
import DetailPage from '../conteiners/detailMovie';
import FavoritesMoviesPage from '../conteiners/favoriteMovies';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/favorites" component={FavoritesMoviesPage} />
          <Route exact path="/movie/:id" component={DetailPage} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default Routes;
