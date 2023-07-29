$('.multiple .carousel').each(function(){
    var currentCarouselId = '#' + $(this).attr('id');
    const multipleItemCarousel = document.querySelector(currentCarouselId);

    // if(window.matchMedia("(min-width:576px)").matches){
        const carousel = new bootstrap.Carousel(multipleItemCarousel, {
            interval: false,
            wrap: false
        })
        var carouselWidth = $(currentCarouselId + ' .carousel-inner')[0].scrollWidth;
        var cardWidth = $(currentCarouselId + ' .carousel-item').width();
        var scrollPosition = 0;    
        $(currentCarouselId + '.carousel-control-next').on('click', function(){
                scrollPosition = scrollPosition + cardWidth;
                $(currentCarouselId + '.carousel-inner').animate({scrollLeft: scrollPosition},300);
            
        });
        $(currentCarouselId + '.carousel-control-prev').on('click', function(){
                scrollPosition = scrollPosition - cardWidth;
                $(currentCarouselId + '.carousel-inner').animate({scrollLeft: scrollPosition},300);
            
        });
    // }else{
    //     $(multipleItemCarousel).addClass('slide');
    // }
});

const multipleItemCarousel = document.querySelector('#carouselExample')

// if (window.matchMedia("(min-width:576px").matches) {
    // const carousel = new bootstrap.Carousel(myCarouselElement, {
    //     interval: false
    // })

    var carouselWidth = $('.carousel-inner')[0].scrollWidth;
    var cardWidth = $('.carousel-item').width()

    var scrollPosition = 0

    $('.carousel-control-next').on('click', ()=>{
        // if(scrollPosition < (carouselWidth - (cardWidth *5))){
            scrollPosition = scrollPosition + cardWidth
            $('.carousel-inner').animate({scrollLeft: scrollPosition},
            400)
        // } 
    })
    $('.carousel-control-prev').on('click', ()=>{
        // if(scrollPosition > 0){
            console.log('prev')
            scrollPosition = scrollPosition - cardWidth
            $('.carousel-inner').animate({scrollLeft: scrollPosition},
            400)
        // }
    })
// }else{
//     $(multipleItemCarousel).addClass('slide')
// }


