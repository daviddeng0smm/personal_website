$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.header-links').toggleClass('open');
        $('.header-main').toggleClass('fluid-height');
        
        // Toggle between hamburger and cross icon
        $(".cross").show()
        $(".hamburger").hide()
    });
    $('.cross').click(function () {
        $('.header-links').toggleClass('open');
        $('.header-main').toggleClass('fluid-height');
        
        // Toggle between hamburger and cross icon
        $(".hamburger").show()
        $(".cross").hide()
    });
});