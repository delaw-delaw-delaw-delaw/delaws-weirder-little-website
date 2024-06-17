var twads = [
    {
        m: "...", answers: [
            { r: "..." }
        ]
    },
    {
        m: "Yo.", answers: [
            { r: "..." }
        ]
    },
    {
        m: "Thanks for waking me up.", answers: [
            { r: "..." }
        ]
    },
    {
        label: "ohgod", m: "It was getting kinda stuffy outside of the screen.", answers: [
            { r: "You can talk?", next: "ofc" },
            { r: "I can talk?!", next: "ofc" },
        ]
    },
    {
        label: "ofc", m: "Of course.", answers: [
            { r: "...", next: "seeu" }
        ]
    },
    { label: "seeu", m: "Next thing you're gonna tell me is that you don't know I can see you.", answers: [
        { r: "???" }
    ] },
    { m: "Just kidding; of course I can't. I'm only seeing a giant cursor.", next: "question", answers: [
        { r: "..." }
    ] },
    { m: "...", answers: [
        { r: "..." }
    ] },
    { m: "I'd talk to you about the weather, or something, but...", answers: [
        { r: "..." }
    ] },
    { m: "I don't know where I am. ", answers: [
        { r: "..." }
    ] },
    { m: "Or how I got here.", answers: [
        { r: "..." }
    ] },
    { m: "The weather itself isn't helping either.", answers: [
        { r: "..." }
    ] },
    { m: "Am I supposed to say \"It's been really Pink lately, hasn't it?\"", answers: [
        { r: "Are you one of the <br> creator's characters?" }
    ] },
    { m: "Uh...", answers: [
        { r: "..." }
    ] },
    { m: "If so, gotta say, God has a really bad sense of decor.", answers: [
        { r: "..." }
    ] },
    { m: "Frutiger Aero went out of fashion last decade.", answers: [
        { r: "When are you from?", next: "year" },
        { r: "Where are you from?", next: "location" }
    ] },
    { label: "year", m: "3449.", answers: [
        { r: "Jesus..." }
    ] },
    { m: "Yeah, After Jesus. 3449 A.J.", answers: [
        { r: "..." }
    ] },
    { m: "As to where...", answers: [
        { r: "..." }
    ] },
    { label: "location", m: "Pangeatown.", answers: [
        { r: "... Like the supercontinent?" }
    ] },
    { m: "Huh? No, it's a tiny archipelago. ", answers: [
        { r: "..." }
    ] },
    { m: "Which makes the population of one million really pack the place.", answers: [
        { r: "..." }
    ] },
    { m: "Three million, if you count the bots", answers: [
        { r: "..." }
    ] },
    { m: "Four million, if you count the cops.", answers: [
        { r: "..." }
    ] },
    { m: "They're always busy playing the slots.", answers: [
        { r: "..." }
    ] },
    { m: "Yeah. Uhuh. I'm rapping.", answers: [
        { r: "Bots?", next: "bots" },
        { r: "Cops?", next: "cops" }
    ] },
    { label:"cops", m: "Lazy cunts.", answers: [
        { r: "Woah." },
        { r: "Hell yeah." }
    ] },
    { m:"They're basically useless and now they're addicted to slot machines. A lot of them don't even know they're getting scammed!", answers: [
        { r: "..." },
    ]},
    { m:"They're also extremely dumb.", answers: [
        { r: "..." },
    ]},
    { m:"I saw one trying to arrest a parking meter the other day.", answers: [
        { r: "..." },
    ]},
    { m:"He said it was \"using an unlawful measurement system.\"", answers: [
        { r: "..." },
    ]},
    { m:"I think I heard \"Parking INCHER!\" when I walked away.", answers: [
        { r: "...", next:"anyways" },
    ]},
    { label: "bots", m:"Yeah, the bots. They usually do meager tasks.", answers: [
        { r: "..." },
    ]},
    { m:"Like marketing.", answers: [
        { r: "..." },
    ]},
    { m:"And killing anyone that doesn't pay taxes", answers: [
        { r: "..." },
    ]},
    { m:"And groceries.", answers: [
        { r: "Wait, what was-" },
    ]},
    { m:"Mostly produced by the Big Bot, which is a subsidiary of the Big Money.", answers: [
        { r: "..." },
    ]},
    { m:"The bank controls EVERYTHING, trust me.", answers: [
        { r: "Even the government?" },
        { r: "Yeah, that checks out.", next: "anyways" }
    ]},
    { m:"They ARE the government. They got bought out.", answers: [
        { r: "It doesn't work like that!" },
    ]},
    { m:"Oh, they made it work like that. Infinite cash can do anything nowadays.", answers: [
        { r: "..." },
    ]},
    { label:"anyways", m:"Anyways, um...", answers: [
        { r: "..." },
    ]},
    { label:"hub", m:" Is there anything you'd like to know?", answers: [
        { r: "Can you tell me some more <br> about who you are?", next: "whour" },
        { r: "About your world...", next: "urworld" },
        { r: "About your creator...", next: "creator" },
        { r: "Nah, I'm good.", next: "bye" },
    ]},
    { label:"creator", m:"Can't say I know much about them, but go ahead.", answers: [
        { r: "Did she trick me into reading <br> a loredump of her awful, <br> comically shallow  world?", next:":3" },
        { r: "She is amazing and awesome in <br> every way possible, where <br> can I talk to her?", next:"thanks" },
        { r: "I don't like any of these dialogue options.", next:"coward" },
    ]},
    { label:"coward", m:"Booring. You should have picked one of the extreme and unreasonable dialogue optins. They're funny.", answers: [
        { r: "No.", next:"hub" },
    ]},
    { label:"thanks", m:"I can't say I agree, but I would assume \"My Socials\" has what you're looking for.", answers: [
        { r: "..." },
    ]},
    { m:"Call her something mean for me, though. Also ask her to give me a better job. She should also kill my boss.", answers: [
        { r: "..." },
    ]},
    { m:"My previous one. Because she'll give me a better job.", answers: [
        { r: "...", next:"hub" },
    ]},
    { label:":3", m:":3", answers: [
        { r: "...", next:"hub" },
    ]},
    { label:"urworld", m:"What about it?", answers: [
        { r: "What is it called?", next:"name" },
        { r: "How is the tech?", next:"tech" },
        { r: "How is it like to live there?", next:"live" },
    ]},
    { label:"live", m:"Well...", answers: [
        { r: "..." },
    ]},
    { m:"It's complicated.", answers: [
        { r: "..." },
    ]},
    { m:"We have a crap-ton of conveniences that make our lives easier, like automatic tax filers and decent public transport,", answers: [
        { r: "..." },
    ]},
    { m:"But, I'm just gonna be blunt, there's also Capitalism.", answers: [
        { r: "..." },
    ]},
    { m:"I don't know who the hell thought it would be a good idea to follow that.", answers: [
        { r: "..." },
    ]},
    { m:"We also can't do anything about it. Big Money has eyes everywhere.", answers: [
        { r: "..." },
    ]},
    { m:"It sucks.", answers: [
        { r: "But Capitalism is AWESOME!", func:"capitalismsucks", next:"null" },
        { r: "Same here. About something else...", next:"hub" },
    ]},
    { label:"tech", m:"Oh, nothing special. Nothing like those science fiction movies humans—or we—produced.", answers: [
        { r: "..." },
    ]},
    { m:"The most technologically advanced thing we have is a quantum computer, and it's still experimental as shit.", answers: [
        { r: "..." },
    ]},
    { m:"I think.", answers: [
        { r: "..." },
    ]},
    { m:"Listen, I'm not an encyclopedia. There could be, like, a portal opener somewhere out there that I'm not aware of.", answers: [
        { r: "..." },
    ]},
    { m:"But, in my opinion, I like automatic train stations best,", answers: [
        { r: "..." },
    ]},
    { m:"Or the self-customization booths.", answers: [
        { r: "..." },
    ]},
    { m:"Smart watches are also pretty cool.", answers: [
        { r: "About something else...", next: "hub" },
    ]},
    { label:"name", m:"Earth. Big Money wants us to call it \"Futuria\",", answers: [
        { r: "..." },
    ]},
    {m:"But no one's gonna do that.,", answers: [
        { r: "Oh. About something else...", next:"hub" },
        { r: "Do you know anything about <br> the early 2000's?" },
    ]},
    {m:"Hmm.. I slept in a lot in class. But, as far as I can recall,", answers: [
        { r: "..." },
    ]},
    {m:"There were these things called \"Humans\". They killed themselves with nuclear bombs, I think.", answers: [
        { r: "!!!" },
    ]},
    {m:"Then, some animals, our ancestors, that survived, got mutated. Into being sapient.", answers: [
        { r: "..." },
    ]},
    {m:"They took everything Humanity knew from this thing called a \"Floppy Disk\".", answers: [
        { r: "..." },
    ]},
    {m:"They blindly followed everything in that. They agreed that the bombs were stupid, though.", answers: [
        { r: "..." },
    ]},
    {m:"And I don't remember what comes after that, but, give us a thousand years and we got to this point.", answers: [
        { r: "..." },
    ]},
    {m:"We have a few political parties surrounding all of that stuff nowadays.", answers: [
        { r: "..." },
    ]},
    {m:"Like the HIFWTHDKOSA.", answers: [
        { r: "..." },
    ]},
    {m:"\"Hey, Isn't Following What The Humans Did Kind Of Stupid Actually?\"", answers: [
        { r: "..." },
    ]},
    {m:"Or the NO.", answers: [
        { r: "..." },
    ]},
    {m:"It stands for \"No.\"", answers: [
        { r: "About something else...", next:"hub"  },
    ]},
    { label:"whour", m:"Hmm...", answers: [
        { r: "..." },
    ]},
    { m:"Well, my name is DQ. I know, that's not an acronym.", answers: [
        { r: "And?" },
    ]},
    { m:"I'm 24, I work at a club as a janitor.", answers: [
        { r: "..." },
    ]},
    { m:"The people there aren't the type to socialize. Or drink", answers: [
        { r: "..." },
    ]},
    { m:"Or... Get out of the club? I may sound like a conspirancy theorist,", answers: [
        { r: "..." },
    ]},
    { m:"But I swear everyone in there isn't even a person.", answers: [
        { r: "..." },
    ]},
    { m:"I rarely see anyone that doesn't look like a nightmare shadow demon thing in there.", answers: [
        { r: "..." },
    ]},
    { m:"The pay's decent though, so I can't complain.", answers: [
        { r: "..." },
    ]},
    { m:"Anyways... Do you need to know anything else about me?", answers: [
        { r: "About something else...", next: "hub" },
        { r: "Yes." },
    ]},
    { m:"What do you need to know?", answers: [
        { r: "..."}
    ]},
    { m:"...", answers: [
        { r: "..."}
    ]},
    { m:"I'm... pansexual? But I'm not looking.", answers: [
        { r: "..."}
    ]},
    { m:"I like rainy weather. I also... like old movies??", answers: [
        { r: "..."}
    ]},
    { m:"I don't know what else to say.", answers: [
        { r: "Sorry, I picked the wrong <br> dialogue path by accident."}
    ]},
    { m:"Oh.", answers: [
        { r: "Yeah, sorry."}
    ]},
    { m:"Yeah, it's fine. It happens. Mhm.", answers: [
        { r: "Yeah."}
    ]},
    { m:"...", answers: [
        { r: "..."}
    ]},
    { m:"Can we talk about something else.", answers: [
        { r: "Yeah...", next:"hub"}
    ]},
    { label:"bye", m:"Oh, okay.", answers: [
        { r: "..." },
    ]},
    { m:"Now, to get out of here...", answers: [
        { r: "..." },
    ]},
    { m:"Hm. This. This is kinda awkward.", answers: [
        { r: "..." },
    ]},
    { m:"I've been stuck to this position this whole time.", answers: [
        { r: "..." },
    ]},
    { m:"Well, I guess that, if I just try really, really hard...", answers: [
        { r: "...", func: "flip" },
    ]},
    { label:"null", m:"...", answers: [
        { r: "What is happening??"},
    ]},
]

const dqsprite = document.getElementById("dq")
var currentDialogue = 40;

var t = 0;
var x = 0;
var interval = 0;
const mouthes = [
    "imgs/dqsprites/mouth1.png",
    "imgs/dqsprites/mouth2.png"
]
var og = document.getElementsByClassName("bog");
let bePatient = true;
const ccontainer = document.getElementById("choicecontainers")
const talksound = new Audio('sounds/soundbytes/audiobyte.wav')
var dqcont = document.getElementById("dqcont")
const dialogbubble = document.getElementById("speechbubble")

function addflip() {
    var dq = document.getElementById("dq")

    const suck = new Audio('sounds/soundbytes/toohSebuTbooN.wav')
    suck.play()
    suck.volume = 0.08

    dialogbubble.style.display = "none"
    window.setTimeout(function () {
        dq.classList.add("flipouttatheway")
    }, 1125)
}

function capitalismsucks() {
    const everything = document.querySelectorAll('*')
    const ka = document.getElementById('kaboom')
    const boom = new Audio('/sounds/soundbytes/explosion.mp3')

    ka.style.display = "block";
    boom.play()
    boom.volume = 0.1;

    window.setTimeout(function() {
        everything.forEach(element => {
            element.style.display = "none";
        })
    }, 725)
}

function playtalksounds() {
    og[0].style.display = "none";
    var currentDupes = document.getElementsByClassName("removedupe" + (currentDialogue));
    var target = event.target

    if (bePatient == true) {
        bePatient = false;

        if(twads[currentDialogue].answers[target.id].func) {
            let funccall = twads[currentDialogue].answers[target.id].func
            switch (funccall) {
                case 'flip':
                    addflip();
                break

                case 'capitalismsucks':
                    capitalismsucks();
                    window.clearInterval(speak)
                    window.clearInterval(voice)
                break
            }
        }

        if (twads[currentDialogue].answers[target.id].next) {
            var nextd = twads.find(item => item.label === twads[currentDialogue].answers[target.id].next)
            currentDialogue = twads.indexOf(nextd)
        } else {
            currentDialogue++;
        }

        twads[currentDialogue].m.length > 40 ? interval = 40 : interval = 80;
        twads[currentDialogue].m.length / 100 >= 0.65 ? fontSizeModifier = 0.65 : fontSizeModifier = twads[currentDialogue].m.length / 100;

        console.log(fontSizeModifier)
        for (let j = 0; j < twads[currentDialogue].answers.length; j++) {
            duplicate = og[0].cloneNode(true);
            ccontainer.appendChild(duplicate);
            duplicate.id = j;
            duplicate.classList.add("removedupe" + currentDialogue)
            duplicate.style.display = "block";
            duplicate.innerHTML = twads[currentDialogue].answers[j].r;
        }

        while (currentDupes[0]) {
            currentDupes[0].parentNode.removeChild(currentDupes[0])
        }

        voice = setInterval(function () {
            talksound.load();
            talksound.play();
            talksound.volume = 0.1;
            t = (t + 1 == 2) ? 0 : 1;

            if (t == 0) {
                dqsprite.style.transform = "scale(1, 0.98)"
            } else {
                dqsprite.style.transform = "scale(1, 1)"
            }
        }, 80)
        speak = setInterval(function () {
            if (document.hasFocus()) {
                document.getElementById("talktext").innerHTML = twads[currentDialogue].m.substring(0, x + 1)
                document.getElementById("talktext").style.fontSize = 2 - fontSizeModifier + "em"

                if (++x == twads[currentDialogue].m.length) {
                    window.clearInterval(speak)
                    window.clearInterval(voice)
                    x = 0;
                    t = 0;
                    bePatient = true;
                }
                document.getElementById("mouth").src = mouthes[t]
            }
        }, interval.toFixed(4))

    } else {
        x = twads[currentDialogue].m.length - 1;
        document.getElementById("talktext").innerHTML = twads[currentDialogue].m.substring(0, x + 1)
        window.clearInterval(speak)
        window.clearInterval(voice)
        x = 0;
        t = 0;
        bePatient = true;
        document.getElementById("mouth").src = mouthes[t]
    }
}
