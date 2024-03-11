
var ogcirclecontainer = document.getElementById("og");
var allcontainers = document.getElementsByClassName("circlecontainer")
var bg = document.getElementById("bg");
var windoww = window.innerWidth;
var windowh = window.innerHeight;

for (i = 1; i <= 80; i++) {
    random = Math.random() * 10;
    clone = ogcirclecontainer.cloneNode(true);
    clone.id = "clone" + [i];

    clone.style.position = "absolute";
    clone.style.left = Math.random() * 100 + "%";
    clone.style.top = Math.random() * 100 + "%";

    bg.appendChild(clone);

    clone.style.width = Math.floor(random) + "px";
    clone.style.height = Math.floor(random) + "px";

    clone.animate([
        {opacity: 0},
        {left: left = Math.random() * 100 + "%", top:Math.random() * 100 + "%",},
        {opacity: 1},
        {left: clone.getBoundingClientRect().left, top:clone.getBoundingClientRect().top},
        {left: clone.getBoundingClientRect().left + ((Math.random() * 2 - 1) * 10) + 'px', top: clone.getBoundingClientRect().top + ((Math.random() * 2 - 1) * 10) + 'px'},
        {opacity: 0}
    ], {
        duration: random * 25000,
        iterations: Infinity,
    })
}
