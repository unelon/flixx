export const renderTvCard = (domSelector, data) => {

    const tvCard = ({ name, first_air_date, poster_path, id }) => {
        
        const posterUrl = poster_path 
            ? `https://image.tmdb.org/t/p/original/${poster_path}` 
            : 'images/no-image.jpg';

            return (
            `   
                <div class="card">
                    <a href="movie-details.html?id=${id}">
                        <div style="position: relative">
                            <img
                                src="${posterUrl}"
                                class="card-img-top"
                                alt="${name}"
                            />
                            <div class="card-label card-label-tv">TV Show</div>
                        </div>
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">
                            <small class="text-muted">Release: ${first_air_date}</small>
                        </p>
                    </div>
                </div>
            `
        );

    }
    

    const newDomSelector = domSelector;
    newDomSelector.innerHTML = data.map(data => {
            const movie = tvCard(data);
        
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

 