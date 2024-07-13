export const renderActorCard = (domSelector, data, endpoint) => {
    const actorCard = ({ id, character, name, profile_path }) => {
        const profileUrl = `${endpoint}${profile_path}`;

        return (
            `   <div class="card actor">
                    <a href="movie-details.html?id=${id}">
                        <img
                            src="${profileUrl}"
                            class="card-img-top"
                            alt="${name}"
                        />
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <h5 class="card-title">${character}</h5>
                    </div>
                </div>
            `
        );
    }

    const filteredActors = data.filter(actor => actor.profile_path);
    domSelector.innerHTML = filteredActors.map(actor => actorCard(actor)).join("");
}
