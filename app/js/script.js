$(".slider-banner").owlCarousel({
    loop:true,
    items: 1,
    nav: true,
    navText: [
        "<img src='images/dest/icons/arrow.svg'>", 
        "<img src='images/dest/icons/arrow.svg'>"
    ],
});

$(".slider-catalog").owlCarousel({
    stagePadding: 40,
    margin:20,
    dots: false,
    autoWidth: true,
    responsive: {
        0: {
            items: 1
        },
        660: {
            items: 2
        },
        1200: {
            items: 4,
            autoWidth: false,
            nav: true,
            navText: [
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"  fill="#707180"> \
                <g> \
                    <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z" data-original="#000000" class="active-path" data-old_color="#000000"/> \
                </g> \
                </svg>', 
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"  fill="#707180"> \
                <g> \
                    <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z" data-original="#000000" class="active-path" data-old_color="#000000"/> \
                </g> \
                </svg>'
            ],
        }
    }

});

$(".slider-categories").owlCarousel({
    stagePadding: 40,
    margin:20,
    autoWidth: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        660: {
            items: 3
        },
        1200: {
            items: 4
        }
    }

});

$(".slider-brands").owlCarousel({
    stagePadding: 40,
    margin:20,
    dots: false,
    autoWidth: true

});


$(window).on('load resize', function () {
    if ($(this).width() > 1160) {
      $(".slider-top-menu").trigger('destroy.owl.carousel');
      $(".slider-top-menu").removeClass("owl-carousel owl-theme");
    } else {
        $(".slider-top-menu").removeClass("owl-carousel owl-theme").addClass("owl-carousel owl-theme");
        $(".slider-top-menu").owlCarousel({
            margin:40,
            dots: false,
            autoWidth: true,
            // nav: true        
        });
    }
  })

  





