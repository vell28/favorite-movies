// @flow
import React from 'react';
import { connect } from 'react-redux';

import { getSingleMovie } from '../../actions/getSingleMovieAction';
import Detail from '../../components/detailMovie';
import { initAddToFavorite } from '../../actions/addMovieToFavorite';
import {
    getMovie,
    getSingleError,
    getFavorites,
 } from '../../selectors';


type Props ={
    getSingleMovie: ActionCreator,
    initAddToFavorite: ActionCreator,
    result: Object,
    error: string,
    match: Object,
    favorite: Array<any>,
    params: Object,
    id: number
}

type State = {
    favoritesMovies: Object,
    error: string
}


class DetailPage extends React.Component<Props, State> {

    componentDidMount (){
        this.props.getSingleMovie({ id: this.props.match.params.id });
    }

    onClick = (e: any) => {
        this.props.initAddToFavorite(e.target.getAttribute('data-id'));
    }

    render() {
        const { result, error, favorite } = this.props;
        return (
            <div>
                <Detail 
                    result = { result }
                    error = { error }
                    onClick = { this.onClick }
                    favorite={ favorite }
                />
            </div>     
        )
    }
}

const mapStateToProps = ( state: any ) => {
    return {
        result: getMovie(state),
        error: getSingleError(state),
        favorite: getFavorites(state)
    } 
}

export default connect(
    mapStateToProps, 
    { getSingleMovie, initAddToFavorite }
)(DetailPage);