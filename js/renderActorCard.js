export const renderActorCard = (domSelector, data, endpoint) => {
    const actorCard = ({ id, character, name, profile_path }) => {
        const profileUrl = `${endpoint}${profile_path}`;

        return (
            `   
            <div class="swiper-slide">
                <div class="actor">
                <div class="swiper-image-container">
                    <a href="profile-details.html?id=${id}">
                        <img
                            src="${profileUrl}"
                            class="card-img-top"
                            alt="${name}"
                        />
                    </a>
                </div>
                    <div class="card-body">
                        <h5 class="card-title" style="font-size: 12px">${name}</h5>
                        <p class="card-title" style="font-size: 12px">${character}</p>
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
        slidesPerView: 2,
        spaceBetween: 10,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {  
            0: {
                slidesPerView: 1,
                spaceBetween: 0
            }, 
            250: {
                slidesPerView: 2,
                spaceBetween: 8
            }, 
              400: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
           700: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            1080: {
                slidesPerView: 7,
                spaceBetween: 20,
              },
            1160: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
        }

      
    });    
}


