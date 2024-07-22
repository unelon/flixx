import { renderMovieCard } from './renderMovieCard.js';
import { renderTvCard } from './renderTvCard.js';

const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTBiMTUxZGVmYzYyNzI2MDVjZWQxYTZjZDI5YjU3MiIsIm5iZiI6MTcyMDQzODU5NS4xNTA3MDksInN1YiI6IjY2OGJiMmRjMjk5ZGU2Zjk2ODNkMmU4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RdZwp59vudKRBx8xzYKUtHpc97UDMtUfpr6r3lzHgio";

// Get current Page
const global = {currentPage: window.location.pathname}
console.log(global)

// Endpoints
const popularMoviesURL = "https://api.themoviedb.org/3/movie/popular?language=da-DK&page=1";
const imageBaseUrlOriginal = "https://image.tmdb.org/t/p/original";

const popularTvShowsUrl = "https://api.themoviedb.org/3/tv/popular?language=da-DK&page=1";

// DOM Selectors
const popularMovies = document.getElementById("popular-movies");
const body = document.body;

// Fetch popular movies
const fetchPopularMovies = async () => {
    const res = await fetch(popularMoviesURL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + apiToken,
        }
    })
    const data = await res.json();
    const movies = data.results;
    const backdrop = imageBaseUrlOriginal + data.results[Math.floor(Math.random() * 20)].backdrop_path
    body.style.backgroundImage = `url(${backdrop})`;
    console.log(movies)
    renderMovieCard(popularMovies, movies)  
}

// Fetch popular movies
const fetchPopularTvShows = async () => {
    const res = await fetch(popularTvShowsUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + apiToken,
        }
    })
    const data = await res.json();
    const movies = data.results;
    const backdrop = imageBaseUrlOriginal + data.results[Math.floor(Math.random() * 20)].backdrop_path
    body.style.backgroundImage = `url(${backdrop})`;
    console.log(movies)
    renderTvCard(popularMovies, movies)  
}

// Highlight active link
function highlightActiveLink() {
    let allNavItems = document.querySelectorAll(".nav-link");
    allNavItems.forEach(e => {
        if (e.getAttribute("href") === global.currentPage) {
            e.classList.add("active")
        }
    });
}

// Init App
function init() {
    switch(global.currentPage) {
        case "/":
        case "/index.html":
            console.log("Home");
            fetchPopularMovies();
            break;
        case "/shows.html":
            console.log("TV Shows");
            fetchPopularTvShows();
            break;
        case "/movie-details.html":
            console.log("Movie Details");
            break;
        case "/tv-details.html":
            console.log("TV Details");
            break;console.log("")("Search");
            break;
    }

    highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init);

