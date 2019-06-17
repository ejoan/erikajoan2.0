$(document).ready(function() {
    // Image Toggling
    $('.img-toggle a').click(function(event) {
            event.preventDefault();
    });

    $('.link-1').click(function() {
        $(this).closest('.project-area').find($('.image-1')).show();
        $(this).closest('.project-area').find($('.image-2')).hide();
        $(this).closest('.project-area').find($('.image-3')).hide();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });
    $('.link-2').click(function() {
        $(this).closest('.project-area').find($('.image-2')).show();
        $(this).closest('.project-area').find($('.image-1')).hide();
        $(this).closest('.project-area').find($('.image-3')).hide();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });
    $('.link-3').click(function() {
        $(this).closest('.project-area').find($('.image-3')).show();
        $(this).closest('.project-area').find($('.image-1')).hide();
        $(this).closest('.project-area').find($('.image-2')).hide();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });
    $('#mock-area .img-toggle a').click(function(event) {
            event.preventDefault();
    });
    $('#mock-area .link-1').click(function() {
        $(this).closest('.project-area').find($('.desktop')).show();
        $(this).closest('.project-area').find($('.mobile')).hide();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });
    $('#mock-area .link-2').click(function() {
        $(this).closest('.project-area').find($('.mobile')).addClass('display-flex');
        $(this).closest('.project-area').find($('.desktop')).hide();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });
    // disable dropdown function on portfolio link when mobile menu active to avoid double menu bug
    if($('.navbar-toggle').css('display') == 'block') {
        $('.navbar-nav .dropdown .dropdown-toggle').attr('data-toggle', false);
        $('.navbar-nav .contact-link').css('clear', 'both');
    } else {
        $('.navbar-nav .dropdown .dropdown-toggle').attr('data-toggle', 'dropdown');
        $('.navbar-nav .contact-link').css('float', 'left');
    }
});
// add shadow to navigation on scroll
$(window).scroll(function() {
var st = $(window).scrollTop()
var nav = $('#site-navigation')

    if ($('.nav-transition').length > 0) {
        if (st > $('.nav-transition').offset().top - nav.height()) {
            nav.addClass('shadow');
        } else {
            nav.removeClass('shadow');
        }
    }
});
