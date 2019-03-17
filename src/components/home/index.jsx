// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import Movie from '../movie';

type PropsType = {
    result: Array<any>,
    favorites: Array<any>,
    error: Object,
    isLoading: boolean,
    onClick: Function
} 

const Home = ({ result, error, isLoading, onClick, favorites }:PropsType ) => {
    return (
        <div className="home-page-wrap">
            { 
                !isLoading && 
                    <div className="spinner-wrap">
                        <img src="/images/spinner.gif" alt="spinner"/>
                    </div> 
            }
            {result && result.map((item, i) => (
                    <div key={i} className="movie-wrap col-md-3 col-sm-4 col-xs-6">
                        <Movie 
                            item={item}
                            onClick={onClick}
                            text={'Add to Favorite'}
                            disable={!!favorites.length && favorites.find(favorit => Number(favorit) === item.id)}
                        />
                    </div>
                )) 
            }
            { error && <div className="bg-danger text-white">{error.message}</div> }
        </div>     
    )
}

export default Home;