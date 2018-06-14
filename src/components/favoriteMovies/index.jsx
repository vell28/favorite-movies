import React from 'react';
import { Link } from 'react-router-dom';

type PropsType = {
    onClick: Function,
    favoritesMovies: Array<any>,
    error: string
}

const FavoritesMovies = ({ favoritesMovies, error, onClick }: PropsType) => {
    return (
        <div className="home-page-wrap">
            {
                favoritesMovies
                    ? favoritesMovies.map((item, i) => {
                        return <div key={i} className="movie-wrap col-md-3 col-sm-4 col-xs-6">
                            <h2 className="movie-title">{item[0].name}</h2>
                            <img src={item[0].image.medium} alt={item[0].name} />
                            <div className="movie-buttons-wrap">
                                <Link
                                    to={`/movie/${item[0].id}`}
                                    className="btn btn-primary">
                                    Movie details
                                </Link>
                                <button
                                    data-id={item[0].id}
                                    className="btn btn-primary"
                                    onClick={onClick}
                                >
                                    Delete Favorite
                                </button>
                            </div>
                        </div>
                    })
                    :
                <div className="bg-danger text-white">{error}</div>
            }
        </div>
    )
}

export default FavoritesMovies;