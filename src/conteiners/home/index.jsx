// @flow
import React from 'react';
import { connect } from 'react-redux';

import { getAllPosts } from '../../actions/getPostAction';
import { initAddToFavorite } from '../../actions/addMovieToFavorite';
import Home from '../../components/home';
import {
    getFavorites,
    getMovies,
    getLoading,
    getError
 } from '../../selectors';

type Props = {
    result: Array<any>, 
    favorites: Array<any>,
    error: Object,
    isLoading: boolean,
    getAllPosts: ActionCreator,
    initAddToFavorite: ActionCreator,
    getMovies: Props
}

class StartPage extends React.Component<Props> {

    componentDidMount (){
        this.props.getAllPosts(0);
        this.props.initAddToFavorite();
    }

    onClick = (e) => {
        this.props.initAddToFavorite(e.target.getAttribute('data-id'));
    }

    render() {
        const { result, error, isLoading, favorites } = this.props;
        return (
            <div>
                <Home 
                    result = { result }
                    error = { error }
                    isLoading = { isLoading }
                    onClick = { this.onClick }
                    favorites={favorites}
                />
            </div>     
        )
    }
}

const mapStateToProps:any = (state) => {
    return {
        result: getMovies(state), 
        isLoading: getLoading(state),
        favorites: getFavorites(state),
        error: getError(state)
    }
};

export default connect(
    mapStateToProps,
    {getAllPosts, initAddToFavorite}
)(StartPage);