// Naziya = 'naziya'

let moon = document.getElementById("moon");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let splash_behind = document.getElementById("splash_behind");
let background_front = document.getElementById("background_front");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
    let value = window.scrollY;

    moon.style.top = value * 1.05 + "px";
    splash_behind.style.left = -value * 0.5 + "px";
    background_front.style.top = value * 0 + "px";
    text.style.marginRight = -value * 4 + "px";
    text.style.marginTop = value * 1 + "px";
    btn.style.left = -value * 1.5 + 100 + "px";
    header.style.top = value * 0.5 + "px";
});
