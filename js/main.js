const swiper = new Swiper('.channel-slider', {
    // Optional parameters

    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
breakpoints: {
    1900: {
        slidesPerView: 6,  
    },
    1600: {
        slidesPerView: 5,
    },
    1300: {
        slidesPerView: 4,
    },
    1100: {
        slidesPerView: 3,
    },
    800: {
        slidesPerView: 2,
    }

},
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },

  });

  const recomswiper = new Swiper('.channel-slider-big', {
    // Optional parameters

    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
   
    breakpoints: {
        
        1600: {
            slidesPerView: 3,
        },
      
        1100: {
            slidesPerView: 2,
        },
       
    
    },
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next-big',
      prevEl: '.channel-button-prev-big',
    },

  });

  const recomendswiper = new Swiper('.channel-slider-rec', {
    // Optional parameters

    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1900: {
            slidesPerView: 6,  
        },
        1600: {
            slidesPerView: 5,
        },
        1300: {
            slidesPerView: 4,
        },
        1100: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 2,
        }
    
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next-rec',
      prevEl: '.channel-button-prev-rec',
    },

  });

  const searchBtn = document.querySelector('.mobile-search');
  const mobileSearch = document.querySelector('.input-group');
  searchBtn.addEventListener('click', () => {
mobileSearch.classList.toggle('is-open');
  });

  if (document.documentElement.scrollWidth <= 640) {
    swiper.destroy();
    recomendswiper.destroy();
    recomswiper.destroy();
  }
 