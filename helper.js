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
});