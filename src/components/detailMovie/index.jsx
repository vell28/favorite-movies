// @flow
import React from 'react';
import { Link } from 'react-router-dom';

type PropsType = {
    onClick: Function,
    result: Object,
    error: string
}

const Detail  = ({ onClick, result, error }:PropsType ) => {
    return (
        <div className="row single-movies-wrap">
            {
                result.image ? <div className="single-movies-info-wrap">
                    <div className="col-md-4 single-movies-left-wrap">
                        <h2>{result.name}</h2>
                        <h4><b>Premiered: {result.premiered}</b></h4>
                        <img src={result.image.medium} alt={result.name} />
                        <p>
                            <b>Genres:
                                {
                                    result.genres && result.genres.map((item, i) => {
                                        return <span key={i}>{item}.</span>
                                    })
                                }
                            </b>
                        </p>
                    </div>
                    <div className="col-md-8 single-movies-rigth-wrap">
                        <p>{result.summary}</p>
                        <div className="single-movie-btn-wrap">
                            <Link
                                to={'/'}
                                className="btn btn-primary"
                            >
                                Go Back
                                    </Link>
                            <button
                                data-id={result.id}
                                className="btn btn-primary"
                                onClick={onClick}
                            >
                                Add to favorite
                                    </button>
                        </div>
                    </div>
                </div>
                    :
                <div className="bg-danger text-white"><b>{error}</b></div>
            }
        </div>
    )
}

export default Detail;