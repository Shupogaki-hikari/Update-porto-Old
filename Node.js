const carousel = document.getElementById('carousel');
    let clonedCarousel = carousel.innerHTML;
    
    // Duplikasi isi carousel untuk membuat efek infinite loop
    carousel.innerHTML += clonedCarousel;

    
    