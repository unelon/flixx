const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTBiMTUxZGVmYzYyNzI2MDVjZWQxYTZjZDI5YjU3MiIsIm5iZiI6MTcyMDQzODU5NS4xNTA3MDksInN1YiI6IjY2OGJiMmRjMjk5ZGU2Zjk2ODNkMmU4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RdZwp59vudKRBx8xzYKUtHpc97UDMtUfpr6r3lzHgio";
const global = {currentPage: window.location.pathname}

const popularMoviesURL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const testURL = "https://api.themoviedb.org/3/movie/573435"

const fetchPopularMovies = async () => {
    const res = await fetch(popularMoviesURL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + apiToken,
        }
    })
    
    const data = await res.json();

    console.log(data)
}

const movieCard = (movie) => {
    return (
        `<div>${movie.title}</div>`
    );
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
            break;
        case "/shows.html":
            console.log("TV Shows");
            break;
        case "/movie-details.html":
            console.log("Movie Details");
            break;
        case "/tv-details.html":
            console.log("TV Details");
            break;
        case "/search.html":
            console.log("Search");
            break;
    }

    highlightActiveLink()
}

document.addEventListener("DOMContentLoaded", init)

fetchPopularMovies()