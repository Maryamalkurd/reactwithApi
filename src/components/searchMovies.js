import React, { useState } from 'react'
import MovieCard from './MovieCard.js';

export default function SearchMovies() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const search = async (e) => {
        e.preventDefault();
        console.log("submitting");
        const query = "Jurassic Park";

        const url = 'https://api.themoviedb.org/3/search/movie?api_key=b47112dac2590422dee3ebcf0366d409&language=en-US&query=${query}&page=1&include_adult=false'
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <form className="form" onSubmit={search} >
                <label className="label" htmlFor="query">movie name</label>
                <input className="input" type="text" placeholder="e.i. pares helton"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                ></input>
                <button className="button" type="submit">search</button>
            </form>

            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    )
}
