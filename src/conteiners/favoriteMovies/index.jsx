// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import RemoveToLocalStorage from '../../utils/RemoveFavoriteMovie';
import { mockErrorFavorites } from '../../errors/index';
import FavoritesMovies from '../../components/favoriteMovies';
import { initAddToFavorite } from '../../actions/addMovieToFavorite';
import {
    getFavorites,
    getMovies,
 } from '../../selectors';

type Props ={
    getPosts: Object,
    favorite: Array<any>,
    initAddToFavorite: ActionCreator,
}

type State = {
    error: string
}

class FavoritesMoviesPage extends React.Component<Props, State> {
    onClick = (e) => {
        const id = e.target.getAttribute('data-id'); 
        this.props.initAddToFavorite(id)
    }

    render() {
        const { getPosts, favorite } = this.props;
        const id = (id) => !!favorite.length && favorite.find(item => Number(item) === id);
        const movies = getPosts && getPosts.filter(movie => id && id(movie.id) && movie)
        return (
            <div>
                <FavoritesMovies 
                    favoritesMovies = { movies }
                    error = { false }
                    onClick = { this.onClick }
                />
            </div>     
        )
    }
}

const mapStateToProps:any = (state) => {
    return {
        getPosts: getMovies(state), 
        favorite: getFavorites(state)
    }
}

export default connect(
    mapStateToProps,
    {initAddToFavorite}
)(FavoritesMoviesPage);