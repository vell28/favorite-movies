import React from 'react';
import { Link } from 'react-router-dom';

class Movie extends React.PureComponent{
    render(){
        const { item, onClick, text, disable } = this.props;
        return(
            <React.Fragment>
                <h2 className="movie-title">
                    {item.name}
                </h2>
                <img
                    src={item.image.medium}
                    alt={item.name}
                />
                <div className="movie-buttons-wrap">
                    <Link
                        to={`/movie/${item.id}`}
                        className="btn btn-primary"
                    >
                        Movie details
                    </Link>
                    <button
                        data-id={item.id}
                        className="btn btn-primary"
                        onClick={!disable ? onClick : null}
                        disabled={disable}
                    >
                        {text}
                    </button>
                </div>
            </React.Fragment>
        )
    }
}

export default Movie;