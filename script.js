//Navbar
var burger = document.getElementById('burger');
var links = document.getElementById('links');
var navbar = document.getElementsByTagName('nav')[0];

burger.addEventListener('click', function () {
    if (burger.classList.contains('open')) {
        burger.classList.remove('open');
        navbar.classList.remove('opened');
    } else {
        burger.classList.add('open');
        navbar.classList.add('opened');
    }
});

links.addEventListener('click', function () {
    if (burger.classList.contains('open')) {
        burger.classList.remove('open');
        navbar.classList.remove('opened');
    }
});


//Home Page
var el = document.querySelector("#home");
var sub = document.querySelector("#sub-heading");
var subHeading = ["A Web Developer", "An App Developer", "A Graphic Designer"];

el.addEventListener("mousemove", (e) => {
    el.style.backgroundPositionX = -e.offsetX + "px";
    el.style.backgroundPositionY = -e.offsetY + "px";
});

var counter = 0;
var inst = setInterval(change, 2000);

function change() {
    sub.innerHTML = subHeading[counter];
    counter++;
    if (counter >= subHeading.length) counter = 0;
}