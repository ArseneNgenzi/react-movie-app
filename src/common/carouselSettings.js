export const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                dots: false,
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 1300,
            settings: {
                dots: false,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                dots: false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                // dots: false,
                // infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        
    ]
  };