
import React from 'react';
import Movie from '../movie';

type PropsType = {
    onClick: Function,
    favoritesMovies: Array<any>,
    error: string
}

const FavoritesMovies = ({ favoritesMovies, error, onClick }: PropsType) => {
    return (
        <div className="home-page-wrap">
            {
                favoritesMovies && !!favoritesMovies.length
                    ? favoritesMovies.map((item, i) => (
                        <div
                            key={i}
                            className="movie-wrap col-md-3 col-sm-4 col-xs-6"
                        >
                            <Movie 
                                item={item}
                                onClick={onClick}
                                text={'Delete Favorite'}
                                disable={false}
                            />
                        </div>
                    ))
                    :
                <div className="bg-danger text-white">{error}</div>
            }
        </div>
    )
}

export default FavoritesMovies;