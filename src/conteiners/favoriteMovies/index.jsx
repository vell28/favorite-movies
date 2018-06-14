// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RemoveToLocalStorage from '../../services/RemoveFavoriteMovie';
import { mockErrorFavorites } from '../../errors/index';
import FavoritesMovies from '../../components/favoriteMovies';

type Props ={
    getPosts: Object
}

type State = {
    favoritesMovies: Object,
    error: string
}

class FavoritesMoviesPage extends React.Component<Props, State> {

    state = { 
        favoritesMovies: {},
        error: ''
    }

    componentWillMount (){

        let getFavoritesId;
        if (localStorage['favoriteMovie']) {

            getFavoritesId = JSON.parse(localStorage['favoriteMovie']);

            const { result }  = this.props.getPosts;
            const FavoritesMovies = getFavoritesId.map( id => {
                return result.filter(item => {
                    return item.id == id;
                })
            });

            this.setState({ error: '', favoritesMovies: FavoritesMovies });

        } else {

            this.setState({ error: mockErrorFavorites });

        }
        if( getFavoritesId ){

            this.setState({ error: mockErrorFavorites })

        }
    }

    onClick = (e) => {

        const id = e.target.getAttribute('data-id'); 
        RemoveToLocalStorage(id);
        const newFavorite = this.state.favoritesMovies.filter(item => {
            return item[0].id != id;
        })
        this.setState({ favoritesMovies: newFavorite });

    }

    render() {
        const { favoritesMovies, error } = this.state;
        return (
            <div>
                <FavoritesMovies 
                    favoritesMovies = { favoritesMovies }
                    error = { error }
                    onClick = { this.onClick }
                />
            </div>     
        )
    }
}

const mapStateToProps:any = (state) => {
    return {
        getPosts: state.AllPosts
    }
}

export default connect(
    mapStateToProps
)(FavoritesMoviesPage);