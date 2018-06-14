// @flow
import React from 'react';
import { Link } from 'react-router-dom';

type PropsType = {
    result: Array<any>,
    error: Object,
    isLoading: boolean,
    onClick: Function
} 

const Home = ({ result, error, isLoading, onClick }:PropsType ) => {
    return (
        <div className="home-page-wrap">
            { 
                !isLoading && 
                    <div className="spinner-wrap">
                        <img src="/images/spinner.gif" alt="spinner"/>
                    </div> 
            }
            {
                result 
                    && result.map((item, i) => {
                        return <div key={i} className="movie-wrap col-md-3 col-sm-4 col-xs-6">
                                <h2 className="movie-title">{item.name}</h2>
                                    <img src={item.image.medium} alt={item.name} />
                                <div className="movie-buttons-wrap">
                                    <Link 
                                        to={`/movie/${item.id}`}
                                        className="btn btn-primary">
                                        Movie details
                                    </Link>
                                    <button
                                        data-id={item.id}
                                        className="btn btn-primary"
                                        onClick={onClick}
                                    >
                                        Add to favorite
                                    </button>
                                </div> 
                            </div>       
                    })  
            }
            { error && <div className="bg-danger text-white">{error.message}</div> }
        </div>     
    )
}

export default Home;