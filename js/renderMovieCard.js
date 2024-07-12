export const renderMovieCard = (domSelector, data) => {

    const movieCard = ({title, release_date, poster_path, id}) => {

        return (
            `<div class="card">
                <a href="movie-details.html?id=${id}">
                    <img
                        src="https://image.tmdb.org/t/p/original/${poster_path ? poster_path : 'images/no-image.jpg'}.jpg"
                        class="card-img-top"
                        alt="Movie Title"
                    />
                </a>
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">
                        <small class="text-muted">Release: ${release_date}</small>
                    </p>
                </div>
            </div>`
        );
    }

    const newDomSelector = domSelector;
    newDomSelector.innerHTML = data.map(data => {
            const title = movieCard(data);

            return (
                `
                <div>${title}</div>
                `
            )
        }
    ).join("");
}

 