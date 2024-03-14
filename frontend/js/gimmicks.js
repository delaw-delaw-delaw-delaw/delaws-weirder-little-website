
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
    var hoversound = new Audio('/frontend/sounds/hover.mp3')
    if (hoversound.paused) {
        hoversound.play()
    } else {
        hoversound.currentTime = 0;
    }
    hoversound.volume = 0.3;
}

var song = new Audio('/frontend/sounds/thankyousomuchtoyotacorolla.mp3')

function playsong() {
    var bar = document.getElementById("lengthbar");
    var vol = 0
    if (song.paused) {
        song.play()
        song.volume = 0;
        setInterval(
            function() {
              if (vol < 1) {
                vol += 0.005;
                song.volume = vol
            }
        }, 10);
        bar.style.transition = Math.floor(song.duration) + "s linear";
        bar.style.transform = "translateY(100%)"
    } else {
        song.pause()
        bar.style.transform = "translateY(0%)"
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