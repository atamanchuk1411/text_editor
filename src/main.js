import './assets/styles/style.sass'

const bold = document.querySelector("#bold");
const italic = document.querySelector("#italic");
const content = document.querySelector("#content");
const text = document.querySelector("#text");
const color = document.querySelector("#color");
const left = document.querySelector("#left");
const center = document.querySelector("#center");
const right = document.querySelector("#right");

bold.addEventListener("click", function () {
    if (content.style.fontWeight === "bold") {
        content.style.fontWeight = "normal";
    } else {
        content.style.fontWeight = "bold";
    }
});

italic.addEventListener("click", function () {
    if (content.style.fontStyle === "italic") {
        content.style.fontStyle = "normal";
    } else {
        content.style.fontStyle = "italic";
    }
});

text.addEventListener("change", function () {
    content.style.fontSize = text.value + "px";
});

color.addEventListener("change", function () {
    content.style.color = color.value;
});

left.addEventListener("click", function () {
    content.style.textAlign = "left";
});

center.addEventListener("click", function () {
    content.style.textAlign = "center";
});

right.addEventListener("click", function () {
    content.style.textAlign = "right";
});