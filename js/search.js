import { renderMovieCard } from './renderMovieCard.js';

const myKeysValues = window.location.search;
const searchParams = new URLSearchParams(myKeysValues);
const apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTBiMTUxZGVmYzYyNzI2MDVjZWQxYTZjZDI5YjU3MiIsIm5iZiI6MTcyMDQzODU5NS4xNTA3MDksInN1YiI6IjY2OGJiMmRjMjk5ZGU2Zjk2ODNkMmU4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RdZwp59vudKRBx8xzYKUtHpc97UDMtUfpr6r3lzHgio';

// DOM Selectors

const movieResults = document.getElementById("search-results");
movieResults.innerHTML = `
    <div style="width: 100%; height: 500px; background-color: #041628; color: #fff; text-align:center; display: flex; align-items: center; justify-content: center"> 
        <div>
            <img src="../images/film.gif" />    
            <div style="margin-top: 4px">Fetching movies</div>
        </div>
    </div>
`

console.log(movieResults)

const search = async () => {
    const query = searchParams.get('search-term');
    const searchMovies = `https://api.themoviedb.org/3/search/movie?query=${query}`;
    
    const res = await fetch(searchMovies, {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + apiToken,
        }
    });
    
    const data = await res.json();

    const filteredResults = data.results.filter(movie => movie.original_title.toLowerCase().includes(query.toLowerCase()))
    renderMovieCard(movieResults, filteredResults);
}

search();
