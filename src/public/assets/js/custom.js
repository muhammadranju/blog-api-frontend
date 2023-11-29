$(function ($) {
    "use strict";

    $(document).ready(function () {

     // pre_loader
        $("#pre_loader").delay(300).animate({
            "opacity": "0"
        }, 500, function () {
            $("#pre_loader").css("display", "none");
        });


    // On SCROLL actions
        var scroll_offset = 120;
        $(window).scroll(function(){
            var $this = $(window);
            if( $('.header_area').length ) {
                if( $this.scrollTop() > scroll_offset ) { 
                    $('.header_area').addClass('nav_fixed');
                } else {
                    $('.header_area').removeClass('nav_fixed');
                }	
            }
        });
 

    // Scroll Top
        $(window).scroll(function(){
            if($(window).scrollTop() > 500 ){
                $('.scrollToTop').addClass('topActive');
            }
            else{
                $('.scrollToTop').removeClass('topActive');
            }
        });

        // hero_swiper
        var swiper = new Swiper(".hero_swiper", {
            slidesPerView: 1,
            spaceBetween: 40,
            freeMode: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination_hero",
                clickable: true,
            },
        });

        // featured_swiper
        var swiper = new Swiper(".featured_swiper", {
            slidesPerView: 1,
            spaceBetween: 6,
            freeMode: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: { 
                768: {
                slidesPerView: 2,
                },
                992: {
                slidesPerView: 2,
                spaceBetween: 10,
                },
                1400: {
                slidesPerView: 3,
                },
            },
        });

        
    // ajax
       
        // Email Subscribe
        jQuery('#frmSubscribe').on('submit',function(e){
            var emailSubscribe = jQuery("input[name='sMail']").val();
            jQuery('#subscribeMsg').html('');
            jQuery('#emailSubscribe').html('Please wait....');
            jQuery('#emailSubscribe').attr('disabled',true);
            jQuery.ajax({
                url:'mail.php',
                type:'POST',
                data: {
                    'subscribes': '',
                    'emailSubscribe': emailSubscribe
                },
                success:function(result){
                    jQuery('#subscribeMsg').html(result);
                    jQuery('#emailSubscribe').html('Subscribe');
                    jQuery('#emailSubscribe').attr('disabled',false);
                    jQuery('#frmSubscribe')[0].reset();

                    setTimeout(function () {
                        $('.alert-dismissible').fadeOut('slow', function(){
                            $(this).remove();
                        });
                    }, 3000);
                }
            });
            e.preventDefault();
        });
    });    
});


