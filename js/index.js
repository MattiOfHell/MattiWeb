window.addEventListener("load", function(){
    window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
    });
});

$(document).on("click", "#about-me-page-button", function () {
    window.scroll({
        top: 700, 
        left: 0, 
        behavior: 'smooth' 
    });
});

$(document).on("click", "#projects-page-button", function () {
    window.scroll({
        top: 1565, 
        left: 0, 
        behavior: 'smooth' 
    });
});

$(document).on("click", "#socials-page-button", function () {
    window.scroll({
        top: 2200, 
        left: 0, 
        behavior: 'smooth' 
    });
});

$(document).on("click", "#youtube-button", function () {
    window.location.href = "https://www.youtube.com/channel/UCmugzvz-0HvS4EpsFBih7ng";
});

$(document).on("click", "#github-button", function () {
    window.location.href = "https://github.com/MattiOfHell";
});