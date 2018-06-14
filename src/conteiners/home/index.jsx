// @flow
import React from 'react';
import { connect } from 'react-redux';

import { getAllPosts } from '../../actions/getPostAction';
import AddToLocalStorage from '../../services/AddToLocalStorage';
import Home from '../../components/home';

type Props = {
    result: Array<any>, 
    error: Object,
    isLoading: boolean,
    getAllPosts: ActionCreator,
    getMovies: Props
}

class StartPage extends React.Component<Props> {

    
    componentDidMount (){
        this.props.getAllPosts();
    }

    onClick = (e) => {
        AddToLocalStorage(e.target.getAttribute('data-id'));
    }

    render() {
        const { result, error, isLoading } = this.props.getMovies;
        return (
            <div>
                <Home 
                    result = { result }
                    error = { error }
                    isLoading = { isLoading }
                    onClick = { this.onClick }
                />
            </div>     
        )
    }
}

const mapStateToProps:any = (state) => {
    return {
        getMovies: state.AllPosts
    }
}

export default connect(
    mapStateToProps,
    {getAllPosts}
)(StartPage);