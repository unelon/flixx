const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTBiMTUxZGVmYzYyNzI2MDVjZWQxYTZjZDI5YjU3MiIsIm5iZiI6MTcyMDQzODU5NS4xNTA3MDksInN1YiI6IjY2OGJiMmRjMjk5ZGU2Zjk2ODNkMmU4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RdZwp59vudKRBx8xzYKUtHpc97UDMtUfpr6r3lzHgio";

// Single Movie page
const myKeysValues = window.location.search;
const searchParams = new URLSearchParams(myKeysValues);

// DOM selectors
const title = document.getElementById("movie-title");
const rating = document.getElementById("rating");
const releaseDate = document.getElementById("release-date");
const content = document.getElementById("content");
const genres = document.getElementById("genres");

const paramId = searchParams.get("id");
const movieId = "https://api.themoviedb.org/3/movie/" + paramId;

const getMovie = async () => {
    const res = await fetch(movieId,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + apiToken,
        }
    }); 
    const data = await res.json();

    showGenres(data.genres);
    showRating(data.vote_average);

    // Single information
    title.innerHTML = data.title;
    releaseDate.innerHTML = data.release_date;
    content.innerHTML = data.overview;
}

// Loop through genres
const showGenres = (data) => {
    genres.innerHTML = data.map(data => {
         return ( 
            `
                <li>${data.name}</li>
            `
            )
    }).join("");
}

// Rating
const showRating = (data) => {
   rating.innerHTML = Math.floor(data);
   console.log()
}

getMovie()




