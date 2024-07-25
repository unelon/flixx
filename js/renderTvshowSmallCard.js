export const renderSmallTvshowCard = (domSelector, data) => {

    const movieUrl = "https://api.themoviedb.org/3/movie/";

    const movieCard = ({ name, first_air_date, poster_path, id }) => {
        
        const posterUrl = poster_path 
            ? `https://image.tmdb.org/t/p/original/${poster_path}` 
            : 'images/no-image.jpg';

            return (
                `   
                    <div class="actor">
                        <div class="swiper-image-container">
                            <a href="tv-details.html?id=${id}">
                                <img
                                    src="${posterUrl}"
                                    class="card-img-top"
                                    alt="${name}"
                                />
                            </a>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title" style="font-size: 12px">${name}</h5>
                            <p class="card-title" style="font-size: 12px">${first_air_date}</p>
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
                    <div class="swiper-slide">${movie}</div>
                    `
                )
            }
        }
    ).join("");

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
            // when window width is >= 320px (Mobile)
      
            300: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
           800: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            1080: {
                slidesPerView: 7,
                spaceBetween: 20,
              },
            // when window width is >= 1240px (Desktop)
            1160: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
        }

      
    });    
}

 