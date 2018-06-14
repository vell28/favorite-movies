// @flow
import React from 'react';
import { connect } from 'react-redux';

import { getSingleMovie } from '../../actions/getSingleMovieAction';
import Detail from '../../components/detailMovie';
import AddToLocalStorage from '../../services/AddToLocalStorage';

type Props ={
    getSingleMovie: ActionCreator,
    sigleMovie: Object ,
    match: Object,
    params: Object,
    id: number
}

type State = {
    favoritesMovies: Object,
    error: string
}


class DetailPage extends React.Component<Props, State> {

    componentWillMount (){
        this.props.getSingleMovie({ id: this.props.match.params.id });
    }

    onClick = (e: any) => {
        AddToLocalStorage(e.target.getAttribute('data-id'));
    }

    render() {
        const { result, error } = this.props.sigleMovie;
        return (
            <div>
                <Detail 
                    result = { result }
                    error = { error }
                    onClick = { this.onClick }
                />
            </div>     
        )
    }
}

const mapStateToProps = ( state: any ) => {
    return {
        sigleMovie: state.SingleMovie
    } 
}

export default connect(
    mapStateToProps, 
    { getSingleMovie }
)(DetailPage);