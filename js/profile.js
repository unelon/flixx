import { renderMovieSmallCard } from "./renderMovieSmallCard.js";

const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTBiMTUxZGVmYzYyNzI2MDVjZWQxYTZjZDI5YjU3MiIsIm5iZiI6MTcyMDQzODU5NS4xNTA3MDksInN1YiI6IjY2OGJiMmRjMjk5ZGU2Zjk2ODNkMmU4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RdZwp59vudKRBx8xzYKUtHpc97UDMtUfpr6r3lzHgio";
const personId = new URLSearchParams(window.location.search).get('id');

const profileUrl = `https://api.themoviedb.org/3/person/${personId}`;
const imageUrl = `https://image.tmdb.org/t/p/w500/`;
const imdbProfileUrl = "https://www.imdb.com/name/";
const actorMoviesUrl = `https://api.themoviedb.org/3/person/${personId}/movie_credits`

console.log(actorMoviesUrl)

// DOM selectors
const title = document.getElementById("profile-title");
const content = document.getElementById("content");
const profileImg = document.getElementById("image");
const birthday = document.getElementById("birthday");
const birthplace = document.getElementById("birthplace");
const imdbProfile = document.getElementById("imdbProfile");
const movies = document.getElementById("movies");

const getProfile = async () => {

    try {
        const res = await fetch(profileUrl, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer " + apiToken,
            }
        })

        const data = await res.json();

        title.innerText = data.name;
        if (data.biography !== "") {
        content.innerText = data.biography
        } else {
            content.innerText = "No data available"
        }
       
        profileImg.src = imageUrl + data.profile_path;
        birthday.innerText = data.birthday;
        birthplace.innerText = data.place_of_birth;
        imdbProfile.href = imdbProfileUrl + data.imdb_id
        
    } catch (error) {
        
    }

    try {
        const res = await fetch(actorMoviesUrl, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer " + apiToken,
            }
        })

        const data = await res.json();
        console.log("actormovies:",  data)
        renderMovieSmallCard(movies, data.cast)
        
      
        
    } catch (error) {
        
    }
}

getProfile()



