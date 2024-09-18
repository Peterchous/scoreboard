let homeScoreBtnOne = document.getElementById("home-plus-btn-one")
let homeNumDisplay = document.getElementById("home-num-display")
let homeScore = 0

function homePlusBtnOne() {
    homeScore += 1
    homeNumDisplay.textContent = homeScore
}

let homeScoreBtnTwo = document.getElementById("home-plus-btn-two")

function homePlusBtnTwo() {
    homeScore += 2
    homeNumDisplay.textContent = homeScore
}

let homeScoreBtnThree = document.getElementById("home-plus-btn-three")

function homePlusBtnThree() {
    homeScore += 3
    homeNumDisplay.textContent = homeScore
}

let guestScoreBtnOne = document.getElementById("guest-plus-btn-one")
let guestNumDisplay = document.getElementById("guest-num-display")
let guestScore = 0

function guestPlusBtnOne() {
    guestScore += 1
    guestNumDisplay.textContent = guestScore
}

let guestScoreBtnTwo = document.getElementById("guest-plus-btn-two")

function guestPlusBtnTwo() {
    guestScore += 2
    guestNumDisplay.textContent = guestScore
}

let guestScoreBtnThree = document.getElementById("guest-plus-btn-three")

function guestPlusBtnThree() {
    guestScore += 3
    guestNumDisplay.textContent = guestScore
}