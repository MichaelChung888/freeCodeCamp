const keys = document.querySelectorAll(".key");

var a1 = new Audio('music/1.mp3');
var a2 = new Audio('music/2.mp3');
var a3 = new Audio('music/3.mp3');
var a4 = new Audio('music/4.mp3');
var a5 = new Audio('music/5.mp3');
var a6 = new Audio('music/6.mp3');
var a7 = new Audio('music/7.mp3');
var a8 = new Audio('music/8.mp3');
var a9 = new Audio('music/9.mp3');

function Play(audio, letter) {
    audio.play();
    for(let i = 0; i < keys.length; i++){
        if(keys[i].textContent == letter){
            keys[i].classList.add("key-press");
            return;
        }
    }
}

document.addEventListener("keydown", e => {
    if(e.key == "q"){
        Play(a1, "Q");
    } else if(e.key == "w"){
        Play(a2, "W");
    } else if(e.key == "e"){
        Play(a3, "E");
    } else if(e.key == "a"){
        Play(a4, "A");
    } else if(e.key == "s"){
        Play(a5, "S");
    } else if(e.key == "d"){
        Play(a6, "D");
    } else if(e.key == "z"){
        Play(a7, "Z");
    } else if(e.key == "x"){
        Play(a8, "X");
    } else if(e.key == "c"){
        Play(a9, "C");
    }
});