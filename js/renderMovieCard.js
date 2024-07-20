export const renderMovieCard = (domSelector, data) => {

    const movieCard = ({ title, release_date, poster_path, id }) => {
        
        const posterUrl = poster_path 
            ? `https://image.tmdb.org/t/p/original/${poster_path}` 
            : 'images/no-image.jpg';

            return (
            `   
                <div class="card">
                    <a href="movie-details.html?id=${id}">
                        <img
                            src="${posterUrl}"
                            class="card-img-top"
                            alt="${title}"
                        />
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">
                            <small class="text-muted">Release: ${release_date}</small>
                        </p>
                    </div>
                </div>
            `
        );

    }
    

    const newDomSelector = domSelector;
    newDomSelector.innerHTML = data.map(data => {
            const movie = movieCard(data);
        
            if (data.poster_path) {
                return (
                    `
                    ${movie}
                    `
                )
            }
        }
    ).join("");
}

 