export const renderMovieCard = (domSelector, movie) => {
    const movieCard = ({ title, release_date, poster_path, id }) => {
        const posterUrl = poster_path
            ? `https://image.tmdb.org/t/p/original/${poster_path}`
            : 'images/no-image.jpg';
        return (`
                <div class="card">
                    <a href="movie-details.html?id=${id}">
                        <div style="position: relative">
                            <img
                                src="${posterUrl}"
                                class="card-img-top"
                                alt="${title}"
                            />
                            <div class="card-label card-label-movie">Movie</div>
                        </div>
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">
                            <small class="text-muted">Release: ${release_date}</small>
                        </p>
                    </div>
                </div>
            `);
    };
    domSelector.innerHTML = movie.map(movie => {
        const showMovieCard = movieCard(movie);
        if (movie.poster_path) {
            return (`
                    ${showMovieCard}
                    `);
        }
    }).join("");
};
