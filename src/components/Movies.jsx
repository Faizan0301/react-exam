import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../features/movies/movieSlice';

function Movies() {
    const dispatch = useDispatch();

    const { movies, loading, error } = useSelector((state) => state.movie);

    useEffect(() => {
        dispatch(fetchMovie());
        console.log(movies);

    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: { error }</div>;

    return (
        <>
            <h1 className='text-center my-5'>Movies</h1>
            <ul>
                <div className="container">
                    <div className="row justify-content-center">
                        { movies.map((movie) => (
                            <div className="col-md-3 mb-3">
                                <div className="card" style={ { width: '18rem' } }>
                                    <img src={ movie.Poster } className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.Title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p className="card-text">Release Date: {movie.Year}</p>
                                        <a href="#" className="btn btn-primary">Download</a>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </ul>
        </>
    );
}

export default Movies
