const inputFloors = document.querySelector("#input-floors");
const inputLifts = document.querySelector("#input-lifts");
const liftData = document.querySelector("#lift-details");
const submitBtn = document.querySelector("#submit-button");
const outputText = document.querySelector("#output-text");

const floorsLifts = document.querySelector("#floor-lift-display");

function validateInput() {
    const numOfFloors = Number(inputFloors.value);
    const numOfLifts = Number(inputLifts.value);

    if (numOfFloors <= 0 || numOfLifts <= 0) {
        outputText.style.display = "block";
        outputText.innerText = "Please enter values greater than 0";
    } else {
        outputText.style.display = "none";
        displayLifts(numOfFloors);
    }
}

function displayLifts(numOfFloors) {
    for (let i = numOfFloors; i >= 0; i--) {
        // creating required html elements

        let div = document.createElement("div");

        let floorNum = document.createElement("h3");
        floorNum.innerText = `Floor ${i} \n`;
        floorNum.classList.add("floorNum");

        let liftBtn = document.createElement("button");
        liftBtn.innerText = "Up/Down";
        liftBtn.classList.add("liftBtn");

        let lineBreak = document.createElement("div");
        lineBreak.classList.add("horizontalLine");

        // appending all created elements

        div.append(liftBtn);
        div.append(floorNum);
        div.append(lineBreak);
        floorsLifts.append(div);
    }
}

liftData.addEventListener("submit", validateInput);
