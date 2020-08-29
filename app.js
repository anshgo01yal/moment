let bg = document.getElementById("img1");
let mountain = document.getElementById("img2");
let moon = document.getElementById("img3");
let road = document.getElementById("img4");
let text = document.getElementById("text");

window.addEventListener('scroll', function()
{
    var value = window.scrollY;
    bg.style.top = value * 0.5 + 'px';
    moon.style.left = value * 0.5 + 'px';
})