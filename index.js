let date = new Date();
console.log(date);

let hh = date.getHours();
let mm = date.getMinutes();
let ss = date.getSeconds();
console.log(hh)
console.log(mm)

let curr_mins = hh*60+mm
console.log(curr_mins)

// Sunrise: 7:00 AM => 420 mins
// Sunset: 6:30 PM => 1110 mins

let sunblur = document.getElementById('starblur');
let sun = document.getElementById('sun');
let horizon = document.getElementById('horizonblur');
let orangesky = document.getElementById('orangesky');
let nightsky = document.getElementById('nightsky');
let olay = document.getElementById('ovrlay');
let dayscene = document.getElementById('clouds');
let hillscene = document.getElementById('hills');
let nightscene = document.getElementById('block2');
let pos = 50
let posSun = 55

// 70 units in 15 secs: 4.67 in 1 sec
// 80 units in 15 secs: 5.34 in 1 sec
// 44 units in 20 secs: 2.2 in 1 sec
// 178 units in 20 secs: 8.9 in 1 sec
// 10 units in 5 secs: 2 in 1 sec


intId = setInterval(function(){
    let date = new Date();
    let ss = date.getSeconds();
    let green = 211
    let blue = 77
    let opa = 0
    let opahor = 0
    let opasky = 0
    let opanight = 0
    let opascenen = 0
    let opascened = 1
    let opaolay = 0
    console.log(ss);
    if (ss<15) {
        pos = 50 - 4.67*ss
        posSun = 55 - 5.34*ss
        if (ss<10) {
            green = 211 + 4.4*ss
            blue = 77 + 17.8*ss
        }
        else {
            green = 255
            blue = 255
        }
        if (ss<5) {
            opa = 1 - 0.2*ss
            opahor = 1 - 0.2*ss
            opasky = 1 - 0.2*ss
            
            opaolay = 0.3 - 0.06*ss
        }
        else {
            opa = 0
            opahor = 0
            opasky = 0
            opaolay = 0
        }
    }
    if (ss>15 && ss<30) {
        pos = -20 + 4.67*(ss-15)
        posSun = -25 + 5.34*(ss-15)
        if (ss>20) {
            green = 255 - 4.4*(ss-20)
            blue = 255 - 17.8*(ss-20)
        }
        else {
            green = 255
            blue = 255
        }
        if (ss>20) {
            opa = 0 + 0.1*(ss-20)
            opahor = 0 + 0.1*(ss-20)
            opasky = 0 + 0.1*(ss-20)
            opaolay = 0 + 0.03*(ss-20)
        }
        else {
            opa = 0
            opahor = 0
            opasky = 0
            opaolay = 0
        }
    }
    if (ss>=30) {
        if(ss<=35) {
            opa = 1 - 0.2*(ss-30)
            opahor = 1 - 0.2*(ss-30)
            opasky = 1 - 0.2*(ss-30)
            opaolay = 0.3 - 0.06*(ss-30)
            opanight = 0 + 0.2*(ss-30)
            opascenen = 0 + 0.2*(ss-30)
            opascened = 1 - 0.2*(ss-30)
        }
        else if (ss>55) {
            opanight = 1 - 0.2*(ss-55)
            opascenen = 1 - 0.2*(ss-55)
            opascened = 0 + 0.2*(ss-55)
            opasky = 0 + 0.2*(ss-55)
            opaolay = 0 + 0.06*(ss-55)
            opahor = 0 + 0.2*(ss-55)
            opa = 0 + 0.2*(ss-55)
        }
        else {
            opanight = 1
            opascenen = 1
            opascened = 0
        }
    }
    sun.style.top = posSun + "%";
    sunblur.style.top = pos + "%";
    // sunblur.style.background = "rgb(255, "+green+", "+blue+")";
    sunblur.style.opacity = opa
    horizon.style.opacity = opahor
    orangesky.style.opacity = opasky
    nightsky.style.opacity = opanight
    dayscene.style.opacity = opascened
    nightscene.style.opacity = opascenen
    hillscene.style.opacity = opascened
    olay.style.opacity = opaolay
    sun.style.background = "rgb(255, "+green+", "+blue+")";
}, 1000);