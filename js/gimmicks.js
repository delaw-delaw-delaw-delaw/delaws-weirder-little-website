// be prepared for awful naming conventions; if you ever for any reason need this code
// dont


var funnies = 0;

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


function dispensedq() {
    var announcement = document.getElementById("robloxannouncement");
    var dialogcont = document.getElementById("dialogcont");

    announcement.style.display = "block";
    window.setTimeout(function () {
        var noobtube = new Audio('sounds/soundbytes/NoobTubeShoot.wav')
        noobtube.play();
        noobtube.volume = 0.08
        announcement.innerHTML = "Dispensing Reward..."
    }, 2000)
    window.setTimeout(function () {
        dialogcont.style.display = "block";
        announcement.style.display = "none";
    }, 3325)
}

var hoversound = new Audio('sounds/hover.mp3')
function playsound() {
    if (hoversound.paused) {
        hoversound.play()
    } else {
        hoversound.currentTime = 0;
    }
    hoversound.volume = 0.3;
}

function addblur(i) {
    var page1 = document.getElementById("container");
    var page2 = document.getElementById("container2");
    var page3 = document.getElementById("container3");
    var page4 = document.getElementById("container4")

    if (i == 1) {
        page1.classList.add("blurred");
        page2.classList.remove("blurred");
        window.setTimeout(function () {
            page2.style.display = "block";
            page1.style.display = "none"
        }, 1500)
    } else if (i == 2) {
        page1.classList.add("blurred");
        page3.classList.remove("blurred");
        window.setTimeout(function () {
            page3.style.display = "block";
            page1.style.display = "none"
        }, 1500)
    } else if (i == 3) {
        page1.classList.add("blurred");
        page4.classList.remove("blurred");
        window.setTimeout(function () {
            page4.style.display = "block";
            page1.style.display = "none"
        }, 1500)
    } else if (i == 4) {
        page2.classList.add("blurred");
        page1.classList.remove("blurred");
        window.setTimeout(function () {
            page1.style.display = "block";
            page2.style.display = "none"
        }, 1500)
    } else if (i == 5) {
        page3.classList.add("blurred");
        page1.classList.remove("blurred");
        window.setTimeout(function () {
            page1.style.display = "block";
            page3.style.display = "none"
        }, 1500)
    } else if (i == 6) {
        page4.classList.add("blurred");
        page1.classList.remove("blurred");
        window.setTimeout(function () {
            page1.style.display = "block";
            page4.style.display = "none"
        }, 1500)
    }

    var hoversound = new Audio('sounds/hover.mp3')
    if (hoversound.paused) {
        hoversound.play()
    } else {
        hoversound.currentTime = 0;
    }
    hoversound.volume = 0.3;
}

var speed = 20;
var anger = 0;
var woo = new Audio('sounds/woo.wav')
var thinkbreak = new Audio('sounds/thinkbreak174bpm.wav')
var executable = true;

function speedUp() {

    anger++;
    var speedable = document.getElementById("slowme");
    if (speed > 1) {
        speed = speed - 1;
    } else if (speed <= 1 && !(speed = 0.2)) {
        speed = speed - 0.1
    }

    if (executable == true) {
        if (speed > 0.3) {
            woo.play();
            woo.volume = 0.08;
        } else {
            thinkbreak.play();
            thinkbreak.volume = 0.08;
            funnies++;

            executable = false;

            if (funnies == 3) {
                dispensedq();
            }
        }
    } else if (executable == false && anger == 25) {
        speedable.classList.add("ouchie")
    }

    speedable.style.animation = "animspeed " + speed + "s steps(17) infinite";
}

var song = new Audio('sounds/thankyousomuchtoyotacorolla.mp3')
var canrun = true
function playsong() {
    var bar = document.getElementById("lengthbar");
    var buttontarget = document.getElementById("playbuttontarget");
    var vol = 0

    if (song.paused) {
        song.play()
        song.volume = 0;
        setInterval(
            function () {
                if (vol < 0.1) {
                    vol += 0.005;
                    song.volume = vol
                }
            }, 10);
        bar.style.transition = Math.floor(song.duration) + "s linear";
        bar.style.transform = "translateY(100%)"
        buttontarget.src = "imgs/couged2.png"
        buttontarget.style.marginLeft = "15px"
    } else {
        song.pause()
        bar.style.transform = "translateY(0%)"
        buttontarget.src = "imgs/couged.png"
        buttontarget.style.marginLeft = "20px"
    }
}

var floatingDQ = document.getElementsByClassName("floatingdq");
var clickamount = 0
function preloadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img)
        img.onerror = reject;
        img.src = url;
    })
}

async function switchImage(src) {
    try {
        await preloadImage(src);
        floatingDQ[0].style.background = "url('" + src + "') no-repeat"
        floatingDQ[0].style.backgroundSize = "12em"
    } catch (error) {
        console.error('error preloading image:', error);
    }
}

floatingDQ[0].addEventListener("click", () => {
    clickamount++;

    if (clickamount == 5) {
        switchImage('../imgs/dqsprites/deaddq2.png');
        const boink = new Audio('sounds/soundbytes/Boink.wav')

        boink.load();
        boink.play();
        boink.volume = 0.5;
    }

    if (clickamount == 10) {

        const okdesuka = new Audio('sounds/soundbytes/okdesuka.wav')
        okdesuka.volume = 0.5;
        dqcont.style.display = "block";
        

        dialogbubble.animate([
            { transform: "translateY(90%)" },
            { transform: "translateY(-10%)" },
            { transform: "translateY(0%)" }
        ], {
            duration: 500,
            iterations: 1,
            easing: 'cubic-bezier(0.1, 1, 0.5, 1)'
        })

        dq.animate([
            { transform: "scale(1, 0.9)" },
            { transform: "scale(1, 1.1)" },
            { transform: "scale(1, 1)" }
        ], {
            duration: 300,
            iterations: 1
        })

        floatingDQ[0].style.display = "none";

        okdesuka.load();
        okdesuka.play();
    }
    const squeak = new Audio('sounds/soundbytes/squeak.mp3');

    squeak.load();
    squeak.play();
    squeak.volume = 0.05;
})



function boo() {
    const qktsample = new Audio('sounds/soundbytes/qktsample.wav')
    var targetaphex = event.target;
    targetaphex.classList.add("boo");
    qktsample.volume = 0.3;
    qktsample.load();
    qktsample.play();
    window.setTimeout(function () {
        targetaphex.style.display = "none";
        funnies++;
        if (funnies == 3) {
            dispensedq();
        }
    }, 600)
}


document.getElementById("pressable").addEventListener('click', () => {
    const piston = document.getElementById("aphexcont");
    piston.style.display = "block";
    document.getElementById("pressable").src = "./imgs/pressedbutton.png"
    window.setTimeout(function () {
        document.getElementById("pressable").src = "./imgs/unpressedbutton.png"
        piston.style.display = "none";
    }, 1500)
})

function funnyquips() {
    const funnytable = [
        "Uwa!! So Delaw♫",
        "A Quick One Before The Long Title Devours Delaware",
        "Play Co-Open on itch.io",
        "Toyota Corolla Hybrid Altis Hybrid Premium",
        "Capitalism Did Keith Haring So Bad",
        "Made you Look!!",
        "Back at Full Speed",
        "Kris, I Didn't Smoke Weed"
    ]
    var dice = Math.floor(Math.random() * (funnytable.length));
    document.title = (funnytable[dice])
}

window.onload = funnyquips();