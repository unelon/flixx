export const renderActorCard = (domSelector, data, endpoint) => {
    const actorCard = ({ id, character, name, profile_path }) => {
        const profileUrl = `${endpoint}${profile_path}`;

        return (
            `   
            <div class="swiper-slide">
                <div class=" actor">
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
            </div>
            `
        );
    }

    const filteredActors = data.filter(actor => actor.profile_path);
    domSelector.innerHTML = filteredActors.map(actor => actorCard(actor)).join("");

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 4,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
    });    
}


