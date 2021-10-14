window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    var sign = document.getElementById("arrow");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("shadow");
        navbar.classList.add("bg-toska");
        navbar.classList.remove("mt-3");
        sign.classList.add("up-icon");
    } else {
        navbar.classList.remove("shadow");
        navbar.classList.remove("bg-toska");
        navbar.classList.add("mt-3");
        sign.classList.remove("up-icon");
    }
}