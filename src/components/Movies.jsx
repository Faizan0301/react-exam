import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Movies() {
    // const dispatch = useDispatch();

    // const { movies, loading, error } = useSelector((state) => state.movieData);

    // useEffect(() => {
    //     dispatch(fetchMovies());
    // }, [dispatch]);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: { error }</div>;

    // return (
    //     <div>
    //         <h2>Movies</h2>
    //         <ul>
    //             { movies.map((movie) => (
    //                 <li key={ movie.id }>{ movie.title }</li>
    //             )) }
    //         </ul>
    //     </div>
    // );
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card" style={ { width: '18rem' } }>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdposhX7i4yD-2lugfvcTk8-zZMsz04Hykew&s" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Movies
