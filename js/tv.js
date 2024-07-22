import { renderActorCard } from './renderActorCard.js';

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
const image = document.getElementById("image");
const runtime = document.getElementById("runtime");
const setStatus = document.getElementById("status");
const companies = document.getElementById("companies");
const homepage = document.getElementById("homepage");
const movieTrailer = document.getElementById("trailer");
const actors = document.getElementById("actors");
const body = document.body;

const paramId = searchParams.get("id");
const movieUrl = "https://api.themoviedb.org/3/tv";
const movieId = movieUrl + "/" + paramId;
const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
const imageBaseUrlOriginal = "https://image.tmdb.org/t/p/original";



const getMovie = async () => {

    // Get movie
    try {
    const res = await fetch(movieId,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + apiToken,
        }
    }); 

    const data = await res.json();
    const movieImg = imgBaseUrl + data.poster_path;
    console.log(data)
    
    showGenres(data.genres);
    showRating(data.vote_average)
    showCompanies(data.production_companies)

    // backdrop image
    const backdrop = imageBaseUrlOriginal + data.backdrop_path

    // Single information
    image.src = movieImg;
    title.innerText = data.name;
    releaseDate.innerText = data.first_air_date;
    content.innerText = data.overview;
    runtime.innerText = data.episode_run_time;
    setStatus.innerText = data.status;
    body.style.backgroundImage = `url(${backdrop})`;
    }   
    catch (error) {
    console.error("Error fetching movie data:", error);
    }

    // Get trailer
    try {
        const res = await fetch(movieId + "/videos",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + apiToken,
            }
        }); 

        const data = await res.json();
        const youtubeEmbedUrl = "https://www.youtube.com/embed/";
        const trailer = data.results.find(video => video.type === "Trailer" && video.site === 'YouTube').key;

   
        movieTrailer.src = youtubeEmbedUrl + trailer;        

    } catch (error) {
        console.error("Error fetching videos");
        movieTrailer.style.display = "none"   
    }

    // Get actors
    try {
        const res = await fetch(movieId + "/credits",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + apiToken,
            }
        }); 

        const data = await res.json();
        const cast = data.cast;
        console.log(cast)
        renderActorCard(actors, cast, imgBaseUrl)
      

    } catch (error) {console.error("Error fetching videos")}

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


// Loop through companies
const showCompanies = (data) => {
    companies.innerHTML = data.map(data => {
         return ( 
            `
            <li style="display: flex; justify-content: space-between; width: 100%;">
                <div>${data.name}</div>
            </li>            `
            )
    }).join("");
}

// Rating
const showRating = (data) => {
   rating.innerHTML = Math.floor(data);
}

  



getMovie();