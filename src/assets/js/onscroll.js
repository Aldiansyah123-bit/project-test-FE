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

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);
    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('home', true);
    show('spinner', false);
});
