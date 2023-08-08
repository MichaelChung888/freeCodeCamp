const flex = document.querySelectorAll(".flex");

const sessionLength = document.querySelector("#session-length")
const breakLength = document.querySelector("#break-length")

const sessionTime = document.querySelector("#session-time");
const breakTime = document.querySelector("#break-time");

let state = 0; //stop = 0 and start = 1
let mode = 0; //sessioncount = 0 and breakcount = 1
let countdown = null;

var audio = new Audio('alarm.wav');

function length2(str){
    if(str.length < 2){
        return "0"+str;
    }
    else{
        return str;
    }
}

function startstop() {
    if(state == 0){
        state = 1;
        document.getElementById("start_stop_icon").className = "fa-solid fa-pause"

        countdown = setInterval(() => {
            let bT = breakTime.textContent.match(/\d+/g);
            let sT = sessionTime.textContent.match(/\d+/g);
            let sT0 = parseInt(sT[0]);
            let sT1 = parseInt(sT[1]);
            let bT0 = parseInt(bT[0]);
            let bT1 = parseInt(bT[1]);

            console.log(bT0, bT1);
    
            if(mode == 0) {
                if(sT0 == 0 && sT1 == 0){
                    mode = 1;
                    audio.play();
                }
                else {
                    if(sT0 == 0){
                        sessionTime.textContent = String(sT0) + ":" + length2(String(sT1-1));
                    }
                    else if (sT1 == 0){
                        sessionTime.textContent = String(sT0-1) + ":59";
                    }
                    else {
                        sessionTime.textContent = String(sT0) + ":" + length2(String(sT1-1));
                    }
                }
            }
            else {
                if(bT0 == 0 && bT1 == 0){
                    mode = 0;
                    audio.play();
                    reset()
                }
                else {
                    if(bT0 == 0){
                        breakTime.textContent = String(bT0) + ":" + length2(String(bT1-1));
                    }
                    else if (bT1 == 0){
                        breakTime.textContent = String(bT0-1) + ":59";
                    }
                    else {
                        breakTime.textContent = String(bT0) + ":" + length2(String(bT1-1));
                    }
                }
            }
        }, 1000);
    }
    else {
        state = 0;
        document.getElementById("start_stop_icon").className = "fa-solid fa-play"
        clearInterval(countdown);
    }
}

function reset() {
    const bL = breakLength.textContent;
    const sL = sessionLength.textContent;
    breakTime.textContent = bL;
    sessionTime.textContent = sL;
    clearInterval(countdown);
    state = 0;
}

for(let i = 0; i < flex.length; i++){
    flex[i].addEventListener("click", e => {

        if(e.target.matches("button") || e.target.matches("i")) {
            let change = "";
            const bL = breakLength.textContent.match(/\d+/g);
            const sL = sessionLength.textContent.match(/\d+/g);

            if (e.target.matches("i")){
                change = e.target.parentElement.value;
            }
            else {
                change = e.target.value;
            }
    
            if(change == "break-increment"){
                breakLength.textContent = [parseInt(bL[0]) + 1, bL[1]].join(":");
                breakTime.textContent = breakLength.textContent;
            }
            else if(change == "break-decrement"){
                breakLength.textContent = [parseInt(bL[0]) - 1, bL[1]].join(":");
                breakTime.textContent = breakLength.textContent;
            }
            else if(change == "session-increment"){
                sessionLength.textContent = [parseInt(sL[0]) + 1, sL[1]].join(":");
                sessionTime.textContent = sessionLength.textContent;
            }
            else if(change == "session-decrement"){
                sessionLength.textContent = [parseInt(sL[0]) - 1, sL[1]].join(":");
                sessionTime.textContent = sessionLength.textContent;
            }
        }
    });
}
