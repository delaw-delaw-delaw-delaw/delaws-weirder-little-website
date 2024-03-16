
for (i = 1; i <= 80; i++) {
    var bg = document.getElementById("bg");
    var ogcirclecontainer = document.getElementById("og");
    var allcontainers = document.getElementsByClassName("circlecontainer")

    random = Math.random() * 10;
    clone = ogcirclecontainer.cloneNode(true);
    clone.id = "clone" + [i];

    clone.style.position = "absolute";
    clone.style.left = Math.random() * 100 + "%";
    clone.style.top = Math.random() * 100 + "%";

    bg.appendChild(clone);

    clone.style.width = Math.floor(random) * 10 + "px";
    clone.style.height = Math.floor(random) * 10 + "px";

    clone.animate([
        { opacity: 0.10 },
        { left: left = Math.random() * 100 + "%", top: Math.random() * 100 + "%", },
        { opacity: 0.66 },
        { left: clone.getBoundingClientRect().left, top: clone.getBoundingClientRect().top },
        { left: clone.getBoundingClientRect().left + ((Math.random() * 2 - 1) * 10) + 'px', top: clone.getBoundingClientRect().top + ((Math.random() * 2 - 1) * 10) + 'px' },
        { opacity: 0 }
    ], {
        duration: random * 50000 + 1000, //dont ask
        iterations: Infinity,
    })
}

function playsound() {
    var hoversound = new Audio('/sounds/hover.mp3')
    if (hoversound.paused) {
        hoversound.play()
    } else {
        hoversound.currentTime = 0;
    }
    hoversound.volume = 0.3;
}

function addblur(i) {
    //this is ugly but it works

    var page1 = document.getElementById("container");
    var page2 = document.getElementById("container2");
    var page3 = document.getElementById("container3");
    var page4 = document.getElementById("container4")

    if (i == 1) {
        page1.classList.add("blurred");
        page2.classList.remove("blurred");
        window.setTimeout(function() {
            page2.style.display = "block";
            page1.style.display = "none"
        }, 1500)
    } else if (i == 2) {
        page1.classList.add("blurred");
        page3.classList.remove("blurred");
        window.setTimeout(function() {
            page3.style.display = "block";
            page1.style.display = "none"
        }, 1500)
    } else if (i == 3) {
        page1.classList.add("blurred");
        page4.classList.remove("blurred");
        window.setTimeout(function() {
            page4.style.display = "block";
            page1.style.display = "none"
        }, 1500)
    } else if (i == 4) {
        page2.classList.add("blurred");
        page1.classList.remove("blurred");
        window.setTimeout(function() {
            page1.style.display = "block";
            page2.style.display = "none"
        }, 1500)
    }  else if (i == 5) {
        page3.classList.add("blurred");
        page1.classList.remove("blurred");
        window.setTimeout(function() {
            page1.style.display = "block";
            page3.style.display = "none"
        }, 1500)
    }  else if (i == 6) {
        page4.classList.add("blurred");
        page1.classList.remove("blurred");
        window.setTimeout(function() {
            page1.style.display = "block";
            page4.style.display = "none"
        }, 1500)
    }



    var hoversound = new Audio('/sounds/hover.mp3')
    if (hoversound.paused) {
        hoversound.play()
    } else {
        hoversound.currentTime = 0;
    }
    hoversound.volume = 0.3;
}

var speed = 20;
var woo = new Audio ('/sounds/woo.wav')
var thinkbreak = new Audio ('/sounds/thinkbreak174bpm.wav')
function speedUp() {
    var speedable = document.getElementById("slowme");
    if (speed > 1) {
        speed = speed - 1;
    } else if (speed <= 1 && !(speed = 0.2)) {
        speed = speed - 0.1 
    }

    if (speed > 0.3) {
        woo.play();
        woo.volume = 0.3;
    } else {
        thinkbreak.play();
        thinkbreak.volume = 0.3;
    }

    speedable.style.animation = "animspeed " + speed + "s steps(17) infinite";
}
var song = new Audio('/sounds/thankyousomuchtoyotacorolla.mp3')
function playsong() {
    var bar = document.getElementById("lengthbar");
    var button = document.getElementById("playbutton");

    var vol = 0
    if (song.paused) {
        song.play()
        song.volume = 0;
        setInterval(
            function () {
                if (vol < 1) {
                    vol += 0.005;
                    song.volume = vol
                }
            }, 10);
        bar.style.transition = Math.floor(song.duration) + "s linear";
        bar.style.transform = "translateY(100%)"

        button.src = "/imgs/couged2.png"
        button.style.marginLeft = "15px"
    } else {
        song.pause()
        bar.style.transform = "translateY(0%)"
        button.src = "/imgs/couged.png"
        button.style.marginLeft = "20px"
    }
}

function funnyquips() {
    const funnytable = [
        "Uwa!! So Delaw♫",
        "A Quick One Before The Long Title Devours Delaware",
        "Play Co-Open on itch.io",
        "Toyota Corolla Hybrid Altis Hybrid Premium",
        "Capitalism Did Keith Haring So Bad",
        "Made you Look!!"
    ]
    var dice = Math.floor(Math.random() * (funnytable.length));
    document.title = (funnytable[dice])
}

window.onload = funnyquips();